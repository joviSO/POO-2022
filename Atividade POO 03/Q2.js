"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function main() {
    let numero = Number(input("insira um numero aqui: "));
    console.log(ehPrimo(numero));
}
;
main();
function ehPrimo(num) {
    for (let i = 2; i < num; i++)
        if (num % i == 0) {
            return false;
        }
    ;
    return num > 1;
}
;
