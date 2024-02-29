"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("./adapters");
const httpServer = new adapters_1.ExpressAdapter();
httpServer.templateEngine();
const port = process.env.PORT | 3000;
httpServer.register('get', '/', function (response) {
    response.render('auth/signin.tsx');
});
httpServer.listen(port).then(() => console.info('listening on port ' + port));
