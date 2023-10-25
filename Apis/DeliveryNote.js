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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../server/ServerSetup"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeliveryNote = void 0;
    var ServerSetup_1 = require("../server/ServerSetup");
    var DeliveryNote = (function (_super) {
        __extends(DeliveryNote, _super);
        function DeliveryNote() {
            var _this = _super.call(this) || this;
            _this.getArticlesByProject();
            _this.transferArticles();
            return _this;
        }
        DeliveryNote.prototype.create = function () {
        };
        DeliveryNote.prototype.update = function () {
        };
        DeliveryNote.prototype.read = function () {
        };
        DeliveryNote.prototype.deletee = function () {
        };
        DeliveryNote.prototype.getArticlesByProject = function () {
            var _this = this;
            this.app.get('/project/:id/articles', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var projectId, articles, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            projectId = req.params.id;
                            return [4, this.prisma.projekt_artikel.findMany({
                                    where: {
                                        projekt_id: parseInt(projectId)
                                    },
                                    include: {
                                        artikel: true
                                    }
                                })];
                        case 1:
                            articles = _a.sent();
                            if (!articles) {
                                return [2, res.status(404).json({ error: "No articles found for this project" })];
                            }
                            res.status(200).json(articles);
                            return [3, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error("Error retrieving articles:", error_1);
                            res.status(500).json({ error: "Failed to retrieve articles" });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        DeliveryNote.prototype.transferArticles = function () {
            var _this = this;
            this.app.post('/transfsrArticles', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        console.log("Recived daata", req.body);
                    }
                    catch (error) {
                        console.error("Error transferring articles:", error);
                        res.status(500).json({ error: "Failed to transfer articles" });
                    }
                    return [2];
                });
            }); });
        };
        return DeliveryNote;
    }(ServerSetup_1.ServerSetup));
    exports.DeliveryNote = DeliveryNote;
});
//# sourceMappingURL=DeliveryNote.js.map