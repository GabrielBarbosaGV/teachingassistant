export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  metas: Map<string,string>;
  metasP: Map<string, string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = new Map<string,string>();
    this.metasP = new Map<string, string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.metas = new Map<string,string>();
    aluno.metasP = new Map<string, string>();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.copyMetasFrom(from.metas);
    this.copyMetasPFrom(from.metasP);
  }

  copyMetasFrom(from: Map<string,string>): void {
    this.metas = new Map<string,string>();
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }

  copyMetasPFrom(from: Map<string, string>): void {
    this.metasP = new Map<string, string>();
    for (let key in from) {
      this.metasP[key] = from[key];
    }
  }
}
