import { Aluno } from '../aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-discrepancias',
  templateUrl: './discrepancias.component.html',
  styleUrls: ['../metas.component.css']
})
export class DiscrepanciasComponent implements OnInit {
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAlunos()
      .then(alunos => {
        this.alunos = alunos;
      });
  }

  atualizarAluno(aluno: Aluno): Aluno {
    let alunoStatus: Aluno = null;
    this.alunoService.atualizar(aluno)
      .then(a => {
        alunoStatus = a;
      })
      .catch(e => {
        alert(e);
      });
    return alunoStatus;
  }
}
