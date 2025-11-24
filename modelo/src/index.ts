let firstName: string = 'Julia'
let age: number = 17
let isAdult: boolean = false
let birthDate: Date
let documents: object = {name: 'Julia', }
let list: number[] = []
let list2: string[] = []
let list3: [] = []

function taxa(preco:number = 0, minTaxNumber: number = 1.2, maxTaxNumber:number = 1.4):number {
    if (preco <= 1) {
        return preco * minTaxNumber
    } else {
        return preco * maxTaxNumber
    }
}

console.log(taxa(1, 1.2, 1.4))