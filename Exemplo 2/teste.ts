import { cliente } from "./cliente";
import { notifica } from "./notifica";

function main(){
    var cicero = new cliente("cicero", 5586995381924, "cicero@mail.com");
    notifica(cicero.telefone);
}

main()