"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsxte_1 = require("jsxte");
const utils_1 = require("./utils");
class ExpressAdapter {
    app;
    constructor() {
        this.app = (0, express_1.default)();
    }
    templateEngine() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        (0, jsxte_1.expressExtend)(this.app);
        this.app.set('views', utils_1.pages);
        this.app.use(express_1.default.json());
        this.app.use(utils_1.assetsDirectory);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    async register(method, url, callback) {
        this.app[method](url, async function (request, response) {
            const output = await callback(response);
            return output;
        });
    }
    async listen(port) {
        return this.app.listen(port);
    }
}
exports.default = ExpressAdapter;
