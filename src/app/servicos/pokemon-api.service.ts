import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  public listaPokemons(offset: Number, limit: Number = 10) {
    return this.http.get(`${this.url}?offset=${offset}&limit=${limit}`);
  }

  public buscaPorNumero(numero: Number) {
    return this.http.get(`${this.url}${numero}`);
  }
}
