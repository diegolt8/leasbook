"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const multer_1 = __importDefault(require("../libs/multer"));
const bookctrl_1 = require("../controllers/bookctrl");
router.route('/publication')
    .post(multer_1.default.single('add_photo'), bookctrl_1.createBook)
    .get(bookctrl_1.getBooks);
router.route('/publication/:id')
    .get(bookctrl_1.getBook)
    .delete(bookctrl_1.deleteBook)
    .put(bookctrl_1.updateBook);
exports.default = router;
