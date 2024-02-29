"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
/* eslint-disable no-eq-null */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
const crypto_1 = require("crypto");
class Todo {
    _id;
    _title;
    _completed;
    constructor(_id, _title, _completed) {
        this._id = _id;
        this._title = _title;
        this._completed = _completed;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get completed() {
        return this._completed;
    }
    updateTitle(title) {
        if (title != null) {
            this._title = title;
        }
    }
    updateCompleted(completed) {
        if (completed != null) {
            this._completed = completed;
        }
    }
}
class TodoController {
    static entities = [];
    static create(title) {
        const id = (0, crypto_1.randomUUID)();
        const todo = new Todo(id, title, false);
        TodoController.entities.push(todo);
        return todo;
    }
    static read(id) {
        return TodoController.entities.find((todo) => todo.id === id);
    }
    static readAll() {
        return TodoController.entities.slice();
    }
    static update(id, update) {
        const todo = TodoController.read(id);
        if (!todo) {
            throw new Error(`Todo entity for ID[${id}] not found.`);
        }
        todo.updateTitle(update.title);
        todo.updateCompleted(update.completed);
        return todo;
    }
    static delete(id) {
        const index = TodoController.entities.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            TodoController.entities.splice(index, 1);
        }
    }
}
exports.TodoController = TodoController;
