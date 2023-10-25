var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../server/ServerSetup", "jsonwebtoken"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectTable = void 0;
    var ServerSetup_1 = require("../server/ServerSetup");
    var jwt = __importStar(require("jsonwebtoken"));
    var ProjectTable = (function (_super) {
        __extends(ProjectTable, _super);
        function ProjectTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectTable.prototype.create = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        ProjectTable.prototype.read = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.app.get('/projects', function (req, res) {
                _this.allow_communikation_from_all_ip_adress(res);
                _this.prisma.tblprojekte.findMany().
                    then(function (projects) {
                    res.status(200).send(projects);
                }).catch(function (error) {
                    res.status(500).send({ "message": error.message });
                });
            });
        };
        ProjectTable.prototype.get_user_data = function (req) {
            var authorization_header = req.headers.authorization;
            var token = authorization_header.split(' ')[1];
            var decodedToken = jwt.decode(token);
            var axios = require('axios');
            axios.get('https://graph.microsoft.com/v1.0/me', {
                headers: {
                    'Authorization': "Bearer ".concat(token)
                }
            })
                .then(function (response) {
                console.log(response.data);
            })
                .catch(function (error) {
                console.error("API call error:", error);
            });
        };
        ProjectTable.prototype.deletee = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.prisma.tblprojekte.deleteMany();
        };
        ProjectTable.prototype.update = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        return ProjectTable;
    }(ServerSetup_1.ServerSetup));
    exports.ProjectTable = ProjectTable;
});
//# sourceMappingURL=ProjectTable.js.map