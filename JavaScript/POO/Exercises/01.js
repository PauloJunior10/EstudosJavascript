// Exercicio 01
// crie uma classe que simula uma conta no banco (utilize a forma que preferir);
// Deve conter a propriedade saldo e os metodos deposito e saque

class BankAccount{
    constructor(balance){
        this.balance = balance
    }

    get getbalance(){
        return this.balance
    }

    set setDeposit(obj){
        return this.balance += obj
    }
    
    set setBankDraft(obj){
        return this.balance -= obj
    }
}

let user1 = new BankAccount(6000)

user1.setDeposit = 1000
user1.setBankDraft = 3000

console.log(user1.getbalance)
