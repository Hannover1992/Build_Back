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
        define(["require", "exports", "../server/ServerSetup", "bcrypt", "jsonwebtoken", "speakeasy", "qrcode"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.User = void 0;
    var ServerSetup_1 = require("../server/ServerSetup");
    var bcrypt = __importStar(require("bcrypt"));
    var jwt = __importStar(require("jsonwebtoken"));
    var speakeasy = __importStar(require("speakeasy"));
    var qrcode = __importStar(require("qrcode"));
    var User = (function (_super) {
        __extends(User, _super);
        function User() {
            var _this = _super.call(this) || this;
            _this.secretKey = _this.generateSecretKey();
            _this._speakeasy = speakeasy;
            _this.login();
            _this.create();
            _this.read();
            _this.update();
            _this.deletee();
            _this.readUsers();
            _this.updateStatus();
            _this.verifyOTP();
            return _this;
        }
        Object.defineProperty(User.prototype, "speakeasy", {
            get: function () {
                return this._speakeasy;
            },
            set: function (value) {
                this._speakeasy = value;
            },
            enumerable: false,
            configurable: true
        });
        User.prototype.generateSecretKey = function () {
            return process.env.JWT_SECRET || require('crypto').randomBytes(64).toString('hex');
        };
        User.prototype.create = function () {
            var _this = this;
            this.app.post('/user', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, name_1, email, password, existingUser, hashedPassword, createdUser, token, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                            return [4, this.prisma.user.findUnique({ where: { email: email } })];
                        case 1:
                            existingUser = _b.sent();
                            if (existingUser) {
                                res.status(400).json({ error: "User with this email already exists" });
                                return [2];
                            }
                            return [4, bcrypt.hash(password, 10)];
                        case 2:
                            hashedPassword = _b.sent();
                            return [4, this.prisma.user.create({
                                    data: {
                                        name: name_1,
                                        email: email,
                                        password: hashedPassword,
                                    },
                                })];
                        case 3:
                            createdUser = _b.sent();
                            token = this.generateToken(createdUser.id);
                            res.status(201).json({ user: createdUser, token: token });
                            return [3, 5];
                        case 4:
                            error_1 = _b.sent();
                            console.error("Error creating user:", error_1);
                            res.status(500).json({ error: "Failed to create user" });
                            return [3, 5];
                        case 5: return [2];
                    }
                });
            }); });
        };
        User.prototype.readUsers = function () {
            var _this = this;
            this.app.get('/allusers', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var users, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, this.prisma.user.findMany({
                                    select: {
                                        id: true,
                                        name: true,
                                        email: true,
                                        role: true,
                                        isActive: true
                                    }
                                })];
                        case 1:
                            users = _a.sent();
                            res.status(200).json(users);
                            return [3, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error retrieving users:', error_2);
                            res.status(500).json({ error: 'Failed to retrieve users' });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        User.prototype.read = function () {
            var _this = this;
            this.app.get('/user/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var userId, user, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            userId = req.params.id;
                            return [4, this.prisma.user.findUnique({
                                    where: { id: userId },
                                    select: {
                                        id: true,
                                        name: true,
                                        email: true,
                                        role: true,
                                        isActive: true
                                    },
                                })];
                        case 1:
                            user = _a.sent();
                            if (user) {
                                res.status(200).json(user);
                            }
                            else {
                                res.status(404).json({ error: "User not found" });
                            }
                            return [3, 3];
                        case 2:
                            error_3 = _a.sent();
                            console.error("Error retrieving user:", error_3);
                            res.status(500).json({ error: "Failed to retrieve user" });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        User.prototype.update = function () {
            var _this = this;
            this.app.put('/user/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var userId, userData, updatedUser, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            userId = req.params.id;
                            userData = req.body;
                            return [4, this.prisma.user.update({
                                    where: { id: userId },
                                    data: userData,
                                })];
                        case 1:
                            updatedUser = _a.sent();
                            res.status(200).json(updatedUser);
                            return [3, 3];
                        case 2:
                            error_4 = _a.sent();
                            console.error("Error updating user:", error_4);
                            res.status(500).json({ error: "Failed to update user" });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        User.prototype.updateStatus = function () {
            var _this = this;
            this.app.put('/updateStatus/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var userId, _a, role, isActive, loginAttempts, updatedUser, error_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            userId = req.params.id;
                            _a = req.body, role = _a.role, isActive = _a.isActive;
                            loginAttempts = 0;
                            return [4, this.prisma.user.update({
                                    where: { id: userId },
                                    data: { loginAttempts: loginAttempts, role: role, isActive: isActive },
                                })];
                        case 1:
                            updatedUser = _b.sent();
                            res.status(200).json(updatedUser);
                            return [3, 3];
                        case 2:
                            error_5 = _b.sent();
                            console.error("Error updating user:", error_5);
                            res.status(500).json({ error: "Failed to update user" });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        User.prototype.deletee = function () {
            var _this = this;
            this.app.delete('/user/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var userId, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            userId = req.params.id;
                            return [4, this.prisma.user.delete({
                                    where: { id: userId },
                                })];
                        case 1:
                            _a.sent();
                            res.status(204).send();
                            return [3, 3];
                        case 2:
                            error_6 = _a.sent();
                            console.error("Error deleting user:", error_6);
                            res.status(500).json({ error: "Failed to delete user" });
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        User.prototype.login = function () {
            var _this = this;
            this.app.post('/login', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var _a, email, password, user, passwordMatches, pre2FAToken, _b, otpAuthUrl, qrCodeData, error_7;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.allow_communikation_from_all_ip_adress(res);
                            _a = req.body, email = _a.email, password = _a.password;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 10, , 11]);
                            return [4, this.prisma.user.findUnique({ where: { email: email } })];
                        case 2:
                            user = _c.sent();
                            if (!user) {
                                return [2, res.status(400).json({ success: false, message: "invalid username or password" })];
                            }
                            if (!user.isActive) {
                                return [2, res.status(401).json({ success: false, message: "User is not activated. Please contact the admin." })];
                            }
                            return [4, bcrypt.compare(password, user.password)];
                        case 3:
                            passwordMatches = _c.sent();
                            if (!!passwordMatches) return [3, 5];
                            user.loginAttempts += 1;
                            if (user.loginAttempts >= 8) {
                                user.isActive = false;
                            }
                            return [4, this.prisma.user.update({
                                    where: { id: user.id },
                                    data: { loginAttempts: user.loginAttempts, isActive: user.isActive },
                                })];
                        case 4:
                            _c.sent();
                            return [2, res.status(401).json({ success: false, message: "invalid username or password" })];
                        case 5:
                            user.loginAttempts = 0;
                            return [4, this.prisma.user.update({
                                    where: { id: user.id },
                                    data: { loginAttempts: user.loginAttempts },
                                })];
                        case 6:
                            _c.sent();
                            pre2FAToken = jwt.sign({ id: user.id, role: user.role, pre2FA: true }, this.secretKey, { expiresIn: '3m' });
                            if (!user.twoFactorSecret) return [3, 7];
                            return [2, res.status(200).json({ success: true, message: "OTP required for 2FA verification", pre2FAToken: pre2FAToken })];
                        case 7: return [4, this.enableTwoFactorAuth(user)];
                        case 8:
                            _b = _c.sent(), otpAuthUrl = _b.otpAuthUrl, qrCodeData = _b.qrCodeData;
                            return [2, res.status(200).json({ success: true, message: "Two-factor auth enabled", otpAuthUrl: otpAuthUrl, qrCodeData: qrCodeData, pre2FAToken: pre2FAToken })];
                        case 9: return [2, res.status(200).json({ success: true, message: "Login successful", pre2FAToken: pre2FAToken })];
                        case 10:
                            error_7 = _c.sent();
                            console.error("Error logging in user:", error_7);
                            return [2, res.status(500).json({ success: false, message: "Something went wrong. Please try later" })];
                        case 11: return [2];
                    }
                });
            }); });
        };
        User.prototype.enableTwoFactorAuth = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                var secret, qrCodeData, updatedUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            secret = this.generateSecret();
                            return [4, this.generateQRCode(secret)];
                        case 1:
                            qrCodeData = _a.sent();
                            return [4, this.updateUserSecret(user, secret)];
                        case 2:
                            _a.sent();
                            return [4, this.getUser(user.id)];
                        case 3:
                            updatedUser = _a.sent();
                            return [2, { otpAuthUrl: this.createOTPAuthURL(secret), qrCodeData: qrCodeData }];
                    }
                });
            });
        };
        User.prototype.generateSecret = function () {
            var secret = speakeasy.generateSecret({ length: 20 });
            return secret;
        };
        User.prototype.generateQRCode = function (secret) {
            return __awaiter(this, void 0, void 0, function () {
                var otpAuthUrl, qrCodeData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            otpAuthUrl = this.createOTPAuthURL(secret);
                            return [4, qrcode.toDataURL(otpAuthUrl)];
                        case 1:
                            qrCodeData = _a.sent();
                            return [2, qrCodeData];
                    }
                });
            });
        };
        User.prototype.createOTPAuthURL = function (secret) {
            return "otpauth://totp/backend_22?secret=".concat(secret.base32, "&issuer=backend_22");
        };
        User.prototype.updateUserSecret = function (user, secret) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.prisma.user.update({
                                where: { id: user.id },
                                data: { twoFactorSecret: secret.base32 },
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        User.prototype.getUser = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.prisma.user.findUnique({ where: { id: id } })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        User.prototype.verifyOTP = function () {
            var _this = this;
            this.app.post('/verify-otp', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var otp, authHeader, token;
                var _this = this;
                return __generator(this, function (_a) {
                    this.allow_communikation_from_all_ip_adress(res);
                    otp = req.body.otp;
                    authHeader = req.headers['authorization'];
                    token = authHeader && authHeader.split(' ')[1];
                    if (!token) {
                        return [2, res.status(401).json({ message: "No token provided" })];
                    }
                    jwt.verify(token, this.secretKey, function (err, decoded) { return __awaiter(_this, void 0, void 0, function () {
                        var user, verified, response, fullAccessToken;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        console.error("Error verifying token:", err);
                                        return [2, res.status(401).json({ message: "Failed to authenticate token" })];
                                    }
                                    return [4, this.prisma.user.findUnique({ where: { id: decoded.id } })];
                                case 1:
                                    user = _a.sent();
                                    if (!user) {
                                        return [2, res.status(400).json({ message: "User not found" })];
                                    }
                                    if (!user.twoFactorSecret) {
                                        return [2, res.status(400).json({ message: "Two-factor authentication is not enabled for this user" })];
                                    }
                                    verified = this._speakeasy.totp.verify({
                                        secret: user.twoFactorSecret,
                                        encoding: 'base32',
                                        token: otp,
                                    });
                                    if (!verified) {
                                        return [2, res.status(401).json({ message: "Incorrect OTP" })];
                                    }
                                    response = { id: user.id, role: user.role };
                                    fullAccessToken = jwt.sign(response, this.secretKey, { expiresIn: '4h' });
                                    return [2, res.status(200).json({ fullAccessToken: fullAccessToken })];
                            }
                        });
                    }); });
                    return [2];
                });
            }); });
        };
        User.prototype.generateToken = function (userId) {
            var payload = { userId: userId };
            var options = { expiresIn: '1h' };
            return jwt.sign(payload, this.secretKey, options);
        };
        User.prototype.authenticateToken = function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var authHeader, token;
                var _this = this;
                return __generator(this, function (_a) {
                    authHeader = req.headers['authorization'];
                    token = authHeader && authHeader.split(' ')[1];
                    if (token == null) {
                        res.sendStatus(401);
                        return [2];
                    }
                    jwt.verify(token, this.secretKey, function (err, user) { return __awaiter(_this, void 0, void 0, function () {
                        var dbUser;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        res.sendStatus(403);
                                        return [2];
                                    }
                                    return [4, this.prisma.user.findUnique({ where: { id: user.id } })];
                                case 1:
                                    dbUser = _a.sent();
                                    if (!dbUser) {
                                        res.status(404).json({ error: "User not found" });
                                        return [2];
                                    }
                                    req.user = dbUser;
                                    next();
                                    return [2];
                            }
                        });
                    }); });
                    return [2];
                });
            });
        };
        return User;
    }(ServerSetup_1.ServerSetup));
    exports.User = User;
});
//# sourceMappingURL=User.js.map