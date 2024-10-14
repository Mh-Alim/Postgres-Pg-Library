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
const connection_1 = require("./connection");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const query = `SELECT * FROM users`;
        const res = yield client.query(query);
        console.log("All Users: ");
        for (let user of res.rows) {
            console.log(`Id: ${user.id}, Email: ${user.email}, password: ${user.password}`);
        }
    });
}
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const query = `SELECT * FROM users WHERE email=$1`;
        const value = [email];
        const res = yield client.query(query, value);
        console.log("Get User By Email");
        console.log(`Id: ${res.rows[0].id}, email: ${res.rows[0].email}, pass: ${res.rows[0].password}`);
    });
}
function getTodosForUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const query = `SELECT * FROM todos WHERE user_id=$1`;
        const value = [userId];
        const res = yield client.query(query, value);
        console.log(`Todos of userId: ${userId}`);
        for (let todo of res.rows) {
            console.log(`title: ${todo.title}, description: ${todo.description}, userId: ${todo.user_id}, done: ${todo.done}`);
        }
    });
}
getUsers();
getUserByEmail("alim@gmail.com");
getTodosForUser(3);
