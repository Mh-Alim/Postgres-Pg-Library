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
function getUserDetailsAndTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const userDetailsQuery = `SELECT * FROM users WHERE id=$1`;
        const values = [userId];
        const userRes = yield client.query(userDetailsQuery, values);
        const todosQuery = `SELECT * FROM todos WHERE user_id=$1`;
        const todoValues = [userId];
        const todoRes = yield client.query(todosQuery, todoValues);
        const userDetails = userRes.rows[0];
        const todos = todoRes.rows[0];
        console.log("User Details: ", userDetails);
        console.log("Todos: ", todos);
    });
}
getUserDetailsAndTodos(1);
