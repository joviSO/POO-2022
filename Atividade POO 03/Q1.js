"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function main() {
    let numero = Number(input("insira um numero aqui: "));
    console.log(par(numero));
}
;
main();
function par(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
