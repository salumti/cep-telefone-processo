import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Endereco } from "../model/endereco";
import { Telefone } from "../model/telefone";

@Injectable()
export class TelefoneService {
    constructor(private http: HttpClient){}

    getTelefones() : Observable<Telefone[]>{
        return this.http.get<Telefone[]>(
            'https://dadosabertosapi.ufca.edu.br/service/recurso/telefones.json');
    }
}