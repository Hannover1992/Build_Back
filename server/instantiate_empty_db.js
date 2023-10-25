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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.instantiateOptimized = void 0;
    var kategorien_data = [
        { "kategorie_id": 6, "kategoriename": "Acu" },
        { "kategorie_id": 1, "kategoriename": "Asset" },
        { "kategorie_id": 4, "kategoriename": "Handy" },
        { "kategorie_id": 3, "kategoriename": "Notebook" },
        { "kategorie_id": 5, "kategoriename": "Router" },
        { "kategorie_id": 2, "kategoriename": "Simkarten" }
    ];
    var unterkategorien_data = [
        { "unterkategorie_id": 1, "unterkategoriename": "Asset-All", "kategorie_id": 1, "zeigt_alles_an": true },
        { "unterkategorie_id": 2, "unterkategoriename": "Simkarten-All", "kategorie_id": 2, "zeigt_alles_an": true },
        { "unterkategorie_id": 3, "unterkategoriename": "Notebook-All", "kategorie_id": 3, "zeigt_alles_an": true },
        { "unterkategorie_id": 4, "unterkategoriename": "Handy-All", "kategorie_id": 4, "zeigt_alles_an": true },
        { "unterkategorie_id": 5, "unterkategoriename": "Router-All", "kategorie_id": 5, "zeigt_alles_an": true },
        { "unterkategorie_id": 6, "unterkategoriename": "Acu-All", "kategorie_id": 6, "zeigt_alles_an": true },
        { "unterkategorie_id": 7, "unterkategoriename": "Simkarten", "kategorie_id": 2, "zeigt_alles_an": false },
        { "unterkategorie_id": 8, "unterkategoriename": "Notebook", "kategorie_id": 3, "zeigt_alles_an": false },
        { "unterkategorie_id": 9, "unterkategoriename": "Handy", "kategorie_id": 4, "zeigt_alles_an": false },
        { "unterkategorie_id": 10, "unterkategoriename": "Router", "kategorie_id": 5, "zeigt_alles_an": false },
        { "unterkategorie_id": 11, "unterkategoriename": "Acu", "kategorie_id": 6, "zeigt_alles_an": false },
        { "unterkategorie_id": 12, "unterkategoriename": "Zuko Equipment", "kategorie_id": 1, "zeigt_alles_an": false },
        { "unterkategorie_id": 13, "unterkategoriename": "Medienversorgung", "kategorie_id": 1, "zeigt_alles_an": false },
        { "unterkategorie_id": 14, "unterkategoriename": "Haushaltsgroßgeräte", "kategorie_id": 1, "zeigt_alles_an": false },
        { "unterkategorie_id": 15, "unterkategoriename": "Kleinmaterial", "kategorie_id": 1, "zeigt_alles_an": false }
    ];
    function instantiateOptimized(prisma) {
        return __awaiter(this, void 0, void 0, function () {
            var existingKategorien, _i, kategorien_data_1, kategorie, existingUnterkategorien, _a, unterkategorien_data_1, unterkategorie, projekte, artikels, projekt_artikels;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, prisma.kategorien.findMany()];
                    case 1:
                        existingKategorien = _b.sent();
                        if (!(existingKategorien.length === 0)) return [3, 5];
                        _i = 0, kategorien_data_1 = kategorien_data;
                        _b.label = 2;
                    case 2:
                        if (!(_i < kategorien_data_1.length)) return [3, 5];
                        kategorie = kategorien_data_1[_i];
                        return [4, prisma.kategorien.create({ data: kategorie })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [4, prisma.unterkategorie.findMany()];
                    case 6:
                        existingUnterkategorien = _b.sent();
                        if (!(existingUnterkategorien.length === 0)) return [3, 10];
                        _a = 0, unterkategorien_data_1 = unterkategorien_data;
                        _b.label = 7;
                    case 7:
                        if (!(_a < unterkategorien_data_1.length)) return [3, 10];
                        unterkategorie = unterkategorien_data_1[_a];
                        return [4, prisma.unterkategorie.create({ data: unterkategorie })];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3, 7];
                    case 10: return [4, prisma.tblprojekte.findMany()];
                    case 11:
                        projekte = _b.sent();
                        if (!(projekte.length === 0)) return [3, 13];
                        return [4, prisma.tblprojekte.create({ data: { ID: 802007, Standort: "Lager Hannover" } })];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13: return [4, prisma.artikel.findMany()];
                    case 14:
                        artikels = _b.sent();
                        if (!(artikels.length === 0)) return [3, 16];
                        return [4, prisma.artikel.create({
                                data: {
                                    artikelname: "other Kabel last over REST API",
                                    unterkategorie: { connect: { unterkategorie_id: 1 } },
                                    einkaufs_datum: new Date(),
                                    edit_date: new Date()
                                }
                            })];
                    case 15:
                        artikels = [_b.sent()];
                        _b.label = 16;
                    case 16: return [4, prisma.projekt_artikel.findMany()];
                    case 17:
                        projekt_artikels = _b.sent();
                        if (!(projekt_artikels.length === 0)) return [3, 19];
                        return [4, prisma.projekt_artikel.create({
                                data: {
                                    projekt_id: 802007,
                                    menge: 6,
                                    artikel_id: artikels[0].artikel_id
                                }
                            })];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [2];
                }
            });
        });
    }
    exports.instantiateOptimized = instantiateOptimized;
});
//# sourceMappingURL=instantiate_empty_db.js.map