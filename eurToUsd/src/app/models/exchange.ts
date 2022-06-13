export interface Rates{
    [key:string]:number;
}

export interface Exchange{
    amount:number;
    base: string;
    rates:Rates;
}