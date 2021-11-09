export class novoItem{
    _codigo: number;
    _nome: String;
    _preco: number;
    constructor(codigo: number, nome: String, preco: number){
        this._codigo = codigo
        this._nome = nome
        this._preco = preco
    }

    get codigo(){
        return this._codigo
    }

    get nome(){
        return this._nome
    }

    get preco(){
        return this._preco
    }
    
}