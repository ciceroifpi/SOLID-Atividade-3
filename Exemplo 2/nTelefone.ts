import { contato } from "./contato";

export class nTelefone implements contato{
    _contatonotificar: string;
    constructor(telefone: number){
        this._contatonotificar = "" + telefone;
    }
}