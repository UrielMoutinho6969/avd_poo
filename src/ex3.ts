//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 3


class Funcionarios {
  constructor(
    private _nome: string,
    private _salariohoras: number,
    private _diastrab: number,
    private _totalfalta: number
  ) {}

  get nome() {
    return this._nome;
  }
  get salariohoras() {
    return this._salariohoras;
  }
  get diastrab() {
    return this._diastrab;
  }
  get totalfalta() {
    return this._totalfalta;
  }
  set nome(nome: string) {
    if (!nome) {
      throw new Error("Nome vazio!");
    }
    this._nome = nome;
  }

  set salariohoras(salariohoras: number) {
    if (salariohoras <= 0) {
      throw new Error("Salário inválido!");
    }
    this._salariohoras = salariohoras;
  }
  set diastrab(diastrab: number) {
    this._diastrab = diastrab;
  }
  set totalfalta(totalfalta: number) {
    this._totalfalta = totalfalta;
  }
  public salbruto(): number {
    let bruto = this.salariohoras * this.diastrab;
    return bruto;
  }
  public PLR(): number {
    if (this.totalfalta <= 0) {
      let bruto = this.salbruto();
      return bruto;
    } else if (this.totalfalta == 1) {
      let bruto1 = this.salbruto() * 0.94;
      return bruto1;
    } else if (this.totalfalta == 2) {
      let bruto2 = this.salbruto() * 0.92;
      return bruto2;
    } else if (this.totalfalta == 3) {
      let bruto3 = this.salbruto() * 0.9;
      return bruto3;
    } else if (this.totalfalta == 4) {
      let bruto4 = this.salbruto() * 0.88;
      return bruto4;
    } else {
      return 0;
    }
  }
  public desconto(): number {
    return ((this.salbruto() * 0.05));
  }
  public salliquido(): number {
    return this.salbruto() - this.desconto() + this.PLR();
  }
}
const funcionario = new Funcionarios("ABREU", 100, 24, 3);

console.log(`O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.salbruto()}, teve ${funcionario.totalfalta} falta(s) e sua PLR foi de ${funcionario.PLR()}`);

console.log(`O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.salbruto()},  o desconto de  ${funcionario.desconto()}  e sua PLR foide ${funcionario.PLR()} e o salário líquido de ${funcionario.salliquido()}`);