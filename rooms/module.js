"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const es6_1 = require('ciscospark/es6');
function list(accessToken) {
    return __awaiter(this, void 0, Promise, function* () {
        const ciscospark2 = es6_1.default.init({
            credentials: { access_token: accessToken }
        });
        const rooms = yield ciscospark2.rooms.list();
        return rooms.items;
    });
}
exports.list = list;
function members(accessToken, roomId) {
    return __awaiter(this, void 0, Promise, function* () {
        const ciscospark2 = es6_1.default.init({
            credentials: { access_token: accessToken }
        });
        const memberships = yield ciscospark2.memberships.list({ roomId: roomId });
        return memberships.items;
    });
}
exports.members = members;
//# sourceMappingURL=module.js.map