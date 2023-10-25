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
    exports.unter_kategorie_data = void 0;
    exports.unter_kategorie_data = [
        {
            "kategorie_id": 6,
            "kategoriename": "Acu",
            "unterkategorie": [
                {
                    "unterkategorie_id": 60,
                    "unterkategoriename": "Acu_Global",
                    "kategorie_id": 6,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 61,
                    "unterkategoriename": "ACU_Single",
                    "kategorie_id": 6,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 104,
            "kategoriename": "Elektrik",
            "unterkategorie": [
                {
                    "unterkategorie_id": 140,
                    "unterkategoriename": "Elektrik_Global",
                    "kategorie_id": 104,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 141,
                    "unterkategoriename": "Lichtquellen",
                    "kategorie_id": 104,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 142,
                    "unterkategoriename": "Elektrogeräte",
                    "kategorie_id": 104,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 143,
                    "unterkategoriename": "Sonstiges_Elektrik",
                    "kategorie_id": 104,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 4,
            "kategoriename": "Handy",
            "unterkategorie": [
                {
                    "unterkategorie_id": 40,
                    "unterkategoriename": "Handy_Global",
                    "kategorie_id": 4,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 41,
                    "unterkategoriename": "Handy_Single",
                    "kategorie_id": 4,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 103,
            "kategoriename": "Haushalt",
            "unterkategorie": [
                {
                    "unterkategorie_id": 130,
                    "unterkategoriename": "Haushalt_Global",
                    "kategorie_id": 103,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 131,
                    "unterkategoriename": "Reinigungsgeräte",
                    "kategorie_id": 103,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 132,
                    "unterkategoriename": "Haushaltsgeräte",
                    "kategorie_id": 103,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 133,
                    "unterkategoriename": "Sonstiges_Haushalt",
                    "kategorie_id": 103,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 102,
            "kategoriename": "Logistik",
            "unterkategorie": [
                {
                    "unterkategorie_id": 120,
                    "unterkategoriename": "Logistik_Global",
                    "kategorie_id": 102,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 121,
                    "unterkategoriename": "Transportmittel",
                    "kategorie_id": 102,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 122,
                    "unterkategoriename": "Lagerung",
                    "kategorie_id": 102,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 123,
                    "unterkategoriename": "Sonstiges_Logistik",
                    "kategorie_id": 102,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 3,
            "kategoriename": "Notebook",
            "unterkategorie": [
                {
                    "unterkategorie_id": 30,
                    "unterkategoriename": "Notebook_Global",
                    "kategorie_id": 3,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 31,
                    "unterkategoriename": "Notebook_Single",
                    "kategorie_id": 3,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 5,
            "kategoriename": "Router",
            "unterkategorie": [
                {
                    "unterkategorie_id": 50,
                    "unterkategoriename": "Router_Global",
                    "kategorie_id": 5,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 51,
                    "unterkategoriename": "Router_Single",
                    "kategorie_id": 5,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 101,
            "kategoriename": "Sicherheit",
            "unterkategorie": [
                {
                    "unterkategorie_id": 110,
                    "unterkategoriename": "Zugang_Global",
                    "kategorie_id": 101,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 111,
                    "unterkategoriename": "Drehkreuz",
                    "kategorie_id": 101,
                    "zeigt_alles_an": false
                },
                {
                    "unterkategorie_id": 112,
                    "unterkategoriename": "Schranke",
                    "kategorie_id": 101,
                    "zeigt_alles_an": false
                }
            ]
        },
        {
            "kategorie_id": 2,
            "kategoriename": "Simkarten",
            "unterkategorie": [
                {
                    "unterkategorie_id": 20,
                    "unterkategoriename": "Simkarten_Global",
                    "kategorie_id": 2,
                    "zeigt_alles_an": true
                },
                {
                    "unterkategorie_id": 21,
                    "unterkategoriename": "Simkarten_Single",
                    "kategorie_id": 2,
                    "zeigt_alles_an": false
                }
            ]
        }
    ];
});
//# sourceMappingURL=unter_kategorie_data.js.map