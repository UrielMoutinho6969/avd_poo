//Uriel Souza Reis Moutinho
//Matricula: 202010651
//Exercício numero 2

class Conversao {
  public static minutosegundo(tempo:number):string {
    const conversao = tempo * 60;
    return (`${tempo} minuto(s) = ${conversao} segundos`);
  }
  public static horaminuto(tempo:number):string {
    const conversao = tempo * 60;
    return (`${tempo} hora(s) = ${conversao} minutos`);
  }
  public static diahora(tempo:number):string {
    const conversao = tempo * 24;
    return (`${tempo} dia(s) = ${conversao} horas`);
  }
  public static semanadia(tempo:number):string {
    const conversao = tempo * 7;
    return (`${tempo} semana(s) = ${conversao} dias`);
  }
  public static mesdia(tempo:number):string {
    const conversao = tempo * 30;
    return (`${tempo} mês = ${conversao} dias`);
  }
  public static anodia(tempo:number):string {
    const conversao = tempo * 365.25;
    return (`${tempo} ano = ${conversao} dias`);
  }
}

console.log(`
${Conversao.minutosegundo(2)}
${Conversao.horaminuto(2)}
${Conversao.diahora(2)}
${Conversao.semanadia(2)}
${Conversao.mesdia(2)}
${Conversao.anodia(2)}
`);