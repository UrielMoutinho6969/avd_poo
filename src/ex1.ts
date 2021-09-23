//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 1

class Produtos {
  constructor(
  private _produto:string,
  private _preco:number,
  private _qtd:number
  ){}

  get produto ():string{
    return this._produto;
  }
  
  set produto(produto:string){
    if (produto == undefined || produto == ""){
      throw new Error ("nome invalido");
      
    }else{
      this._produto = produto;
    }
   
  }

  get preco (): number{
    return this._preco;
  }
  
  set preco (preco:number){
    if (preco == undefined || preco == 0){
      throw new Error ("preço invalido");
      
    }else{
      this._preco = preco;
    }
  }

  get qtd():number{
    return this._qtd;
  }
  
  set qtd(qtd:number) {
    if (qtd == undefined || qtd == 0){
      throw new Error ("quantidade invalida");
      
    }else{
      this._qtd = qtd;
    }

  }
  public descontos ():string {
    const total = this._qtd * this._preco;
    var valorpago = 0;
    if(this._qtd <= 10){
      const desconto = 0;
      valorpago = (total - desconto);
      return (`teve o valor de desconto de ${desconto} e o valor pago foi ${valorpago}`);
    }else if (this._qtd >= 11 && this._qtd <= 20){
      const desconto = (total) * 0.1;
      valorpago = (total - desconto);
      return (`teve o valor de desconto de ${desconto} e o valor pago foi ${valorpago}`);
    }else if (this._qtd >= 21 && this._qtd <= 50){
      const desconto = (total) * 0.2;
      valorpago = (total - desconto);
      return (`teve o valor de desconto de ${desconto} e o valor pago foi ${valorpago}`);
    }else{
      const desconto = (total) * 0.25;
      valorpago = (total - desconto);
      return (`teve o valor de desconto de ${desconto} e o valor pago foi ${valorpago}`);
    }

  }

}

  const PROD = new Produtos ("arroz",100,20);
  console.log(`o produto ${PROD.produto} de preço ${PROD.preco} quantidade de compra ${PROD.qtd} ${PROD.descontos()}`);

/*
  try {
    PROD.preco = 0;
  } catch (error:any) {
    console.log(error.message)
  } 
  */ 