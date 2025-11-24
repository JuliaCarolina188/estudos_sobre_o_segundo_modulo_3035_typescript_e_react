"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = 'Julia';
let age = 17;
let isAdult = false;
let birthDate;
let documents = { name: 'Julia', };
let list = [];
let list2 = [];
let list3 = [];
function Calc(preco = 0) {
    if (preco <= 1) {
        return preco * 1.2;
    }
    else {
        return preco * 1.4;
    }
}
console.log(Calc(1));
//# sourceMappingURL=index.js.map