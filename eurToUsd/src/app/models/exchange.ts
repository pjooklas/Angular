export interface Rates{
    USD:number;
}

export interface Exchange{
    amount:number;
    base: string;
    rates:Rates;
}