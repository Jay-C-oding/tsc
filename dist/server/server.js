"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var port = 3000;
var App = /** @class */ (function () {
    function App(port) {
        this.port = port;
        this.server = new http_1["default"].Server();
        var io = new socket_io_1["default"].Server(this.server);
    }
    App.prototype.Start = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Server listening on port " + _this.port + ".");
        });
    };
    return App;
}());
new App(port).Start();
