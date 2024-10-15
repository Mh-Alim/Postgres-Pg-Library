"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
// Get all todos and their user details
function getAllTodosWithUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const query = `SELECT users.*, todos.title, todos.description
                    FROM todos JOIN users
                    ON users.id = todos.user_id`;
        const res = yield client.query(query);
        console.log("All Todos with User Details: ", res.rows);
    });
}
getAllTodosWithUserDetails();
