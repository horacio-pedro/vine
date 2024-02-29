"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAddForm = void 0;
const jsx_runtime_1 = require("jsxte/jsx-runtime");
const TodoAddForm = () => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", { action: "/todo-add", method: "get", children: [(0, jsx_runtime_1.jsx)("input", { class: "text-input", name: "title", type: "text" }), (0, jsx_runtime_1.jsx)("button", { class: "btn", type: "submit", children: "Add" })] }) }));
};
exports.TodoAddForm = TodoAddForm;
