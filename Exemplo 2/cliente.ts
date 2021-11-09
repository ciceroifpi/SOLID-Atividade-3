import { nTelefone } from "./nTelefone";
import { eMail } from "./eMail";

export class cliente{
    _nome: string;
    _telefone: nTelefone;
    _email: eMail;

    constructor(nome: string, telefone: number, email: string){
        this._nome = nome;
        this._email = new eMail(email);
        this._telefone = new nTelefone(telefone);
    }

    get nome(){
        return this._nome;
    }

    get telefone(){
        return this._telefone;
    }

    get email(){
        return this._email;
    }

}