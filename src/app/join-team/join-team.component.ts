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

  async onConfirm() {
    console.log('Request before normalization: ' + this.response)

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

    console.log('Request after normalization: ' + normalizedResponse);

    // Chamada API
    await this.http
      .post('http://localhost:3333/confirm', {
        response: normalizedResponse,
      })
      .subscribe(
        (data: any) => {
          console.log('Request: ' + normalizedResponse);
          console.log('Response: ' + data.message);
          this.message = data.message;
        },
        (error) => {
          this.message = 'Erro';
        }
      );
  }
}
