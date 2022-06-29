import { Router } from '@angular/router';
import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})

export class AlunoNovoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    this.alunoService.createAluno(this.aluno)
    .subscribe(
      dado => {
        console.log(dado)
        this.alunoService.openSnackBar('Aluno criado com sucesso !');
        this.router.navigate(['/alunos']);
      }
    )
  }

  cancelar() {
this.router.navigate(['/alunos']);
  }

}
