"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const authctrl_1 = require("../controllers/authctrl");
router.route('/signup').post(authctrl_1.signup);
router.post('/signin', authctrl_1.signin);
exports.default = router;
//# sourceMappingURL=auth.js.map