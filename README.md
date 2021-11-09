# SOLID-Atividade-3
<h1> Sobre o Trabalho </h1>
<p>
    Em alguns repositórios que criei durante o estudo de POO com Typescript, verifiquei que poderia estar realizando melhorias em dois exemplos, descrevi os principios SOLID aplicados em algumas classes dentro dos projetos de estudo, alguns principios aplicados mesmo sem saber exatamente das definições definidas pelo S.O.L.I.D, espero que esteja legivel e compreensivel a atividade e a explicação no vídeo!  
</p>
<h2> Exemplo de um dos principios aplicados</h2>
<h3> Antes </h3>
<p>
    export class item{
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

    venderItem(numero: number) {
        //vende o item
        console.log(numero);
    }

    exibirItem(numero) {
        //exibir os detalhes do produto 
        console.log(numero);
    }

}
</p>
<h3> Depois </h3>
<p>
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
    
</p>

<h1> Considerações </h1>
<p>
   Houve solicitação de comparação de código, porém não consegui achar uma maneira harmonica no readme para comparar os códigos, então eu nomeei os códigos como Item para a versão antiga, novoItem para a versão nova além de ter todas as explicações em vídeo, qualquer dúvida entrar em contato!
</p>
<h1> Link Youtube </h1>
<p>
    https://youtu.be/VjctfiaWv0E
</p>
