"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = function (event) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Serverless v2.0! Your function executed successfully!',
        }, null, 2),
    };
    return new Promise(function (resolve) {
        resolve(response);
    });
};
//# sourceMappingURL=handler.js.map