export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  metas: Map<string,string>;
  autoMetas: Map<string, string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = new Map<string,string>();
    this.autoMetas = new Map<string, string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.metas = new Map<string, string>();
    aluno.autoMetas = new Map<string, string>();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.metas = this.copyMetasFrom(from.metas);
    this.autoMetas = this.copyMetasFrom(from.autoMetas);
  }

  copyMetasFrom(from: Map<string, string>): Map<string, string> {
    let metas = new Map<string,string>();
    for (let key in from) {
      metas[key] = from[key];
    }

    return metas;
  }
}
