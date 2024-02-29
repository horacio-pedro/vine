"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const jsx_runtime_1 = require("jsxte/jsx-runtime");
const Html = (props) => {
    return ((0, jsx_runtime_1.jsxs)("html", { children: [(0, jsx_runtime_1.jsxs)("head", { children: [(0, jsx_runtime_1.jsx)("meta", { charset: "utf-8" }), (0, jsx_runtime_1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), (0, jsx_runtime_1.jsx)("title", { children: "JSXTE Example - TODO App" }), (0, jsx_runtime_1.jsx)("link", { rel: "stylesheet", href: "/css/styles.css" }), (0, jsx_runtime_1.jsx)("script", { src: "/js/main.js", defer: true })] }), (0, jsx_runtime_1.jsx)("body", { children: props.children })] }));
};
exports.Html = Html;
