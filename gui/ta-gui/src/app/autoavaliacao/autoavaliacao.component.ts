import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

import { Aluno } from '../aluno';

@Component({
  selector: 'app-autoavaliacao',
  templateUrl: './autoavaliacao.component.html',
  styleUrls: ['./autoavaliacao.component.css']
})
export class AutoavaliacaoComponent implements OnInit {
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAlunos().then((alunos) => {
      this.alunos = alunos;
    });
  }

   atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno)
         .catch(erro => alert(erro));
   }
}
