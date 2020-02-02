//extending the application i nthe futuer.


export class BudgetItem{
    /*
    description: string;
    amount: number; //neagtive = expense, income = positive

    constructor(description, amount){
        this.amount = amount;
        this.description = description;
    }*/
    //is the same as

    constructor(public description:string, public amount:number){

    }
}