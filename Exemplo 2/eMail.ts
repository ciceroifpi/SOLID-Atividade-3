import { contato } from "./contato";

export class eMail implements contato{
    _contatonotificar: string;
    constructor(email: string){
        this._contatonotificar = email;
    }
}
