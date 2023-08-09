import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.css'],
})

export class JoinTeamComponent {
  // Inicializando variáveis e método http
  response: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onConfirm() {
    // Converter a resposta para maiúsculas
    let normalizedResponse = this.response.toUpperCase();

    // Remover os acentos
    normalizedResponse = normalizedResponse
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    // Transformar para 'SIM' ou 'NAO'
    if (normalizedResponse === 'SIM') {
      normalizedResponse = 'SIM';
    } else {
      normalizedResponse = 'NAO';
    }

    // Chamada API
    this.http
      .post('https://convem-test-backend.onrender.com/confirm', {
        response: normalizedResponse,
      })
      .subscribe(
        (data: any) => {
          console.log(data.message);
          this.message = data.message;
        },
        (error) => {
          this.message = 'Erro';
        }
      );
  }
}
