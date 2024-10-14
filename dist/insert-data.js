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
function createRows() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, connection_1.getClient)();
        const query = `INSERT INTO users(email, password) VALUES ($1, $2) RETURNING *`;
        const values = ["basic@gmail.com", "123"];
        const res = yield client.query(query, values);
        console.log("res", res.rows);
        const todoQuery = `INSERT INTO todos(title, description, user_id, done) VALUES ($1, $2, $3, $4)`;
        const todoValues = [
            "todo basic title",
            "todo basic description",
            res.rows[0].id,
            false,
        ];
        yield client.query(todoQuery, todoValues);
        console.log("Data is inserted successfully");
    });
}
createRows();
