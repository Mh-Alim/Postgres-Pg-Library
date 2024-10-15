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
// Get all todos for a given user
// This should not return a row if no todos exist for the user.
function getUserAndTodosWithJoin(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const joinQuery = `SELECT users.*, todos.title, todos.description
                        FROM users INNER JOIN todos
                        ON users.id = todos.user_id
                        WHERE users.id = $1`;
        const value = [userId];
        const res = yield client.query(joinQuery, value);
        console.log("res: ", res.rows);
    });
}
getUserAndTodosWithJoin(1);
