"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieConfiguration = void 0;
exports.cookieConfiguration = {
    path: '/',
    secure: process.env.NODE_ENV === 'development' ? false : true,
    maxAge: 31 * 24 * 60 * 60 * 100,
};
