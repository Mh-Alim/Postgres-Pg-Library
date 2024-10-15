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
// Get all the todos for a given user
// This needs to ensure that every user comes atleast once
function getSingleUserAndTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const joinQuery = `SELECT users.*, todos.title, todos.description 
                        FROM users LEFT JOIN todos 
                        ON users.id = todos.user_id 
                        WHERE users.id = $1 `;
        const value = [userId];
        const res = yield client.query(joinQuery, value);
        console.log(`User Id: ${userId} Details and all todos list: `, res.rows[0]);
    });
}
getSingleUserAndTodos(1);
