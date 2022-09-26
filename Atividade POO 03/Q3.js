"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function main() {
    let nome = String(input("insira um seu nome aqui: "));
    let tratamento = String(input("insira o pronome de tratamento que quer que seja utilizado: "));
    if (tratamento == "" || tratamento == null) {
        console.log(chamamento(nome));
    }
    else {
        console.log(chamamento(nome, tratamento));
    }
    ;
}
;
main();
function chamamento(nome, tratamento = "Sr.") {
    return tratamento + " " + nome;
}
;
