import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(usuario: string, password: string): boolean {
    if (usuario === "Kapustin" && password === "12345") {
      sessionStorage.setItem("usuario", usuario);
      sessionStorage.setItem("isLogged", "true");
      return true;
    }
    return false;
  }

  logout():void{
    sessionStorage.clear()
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem("isLogged") === "true";
  }


}
