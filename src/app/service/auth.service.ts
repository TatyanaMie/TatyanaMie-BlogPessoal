import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessoaltatyana.herokuapp.com/usuarios/logar',usuarioLogin)

  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoaltatyana.herokuapp.com/usuarios/cadastrar',usuario)

  }
}
