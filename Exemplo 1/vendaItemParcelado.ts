import { vendaItemI } from "./vendaItemI";

export class vendaItemParcelado extends vendaItemI{
    _parcelas: number;
    constructor(codigo: number, valor: number, parcelas: number){
        super(codigo, valor);
        this._parcelas = parcelas;
    }
}