import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(
        private _http: HttpClient
    ) { }

    getDepartamentos(): Observable<any> {
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.get(url);
    }

    //  VOY A RECIBIR DIRECTAMETNE EL OBJETO EN EL METODO DE INSERTAR
    // insertarDepartamento(departamento: Departamento): Observable<any>{
    //     //  ESTO ES COMO JQUERY, CONVERTIR UN OBJETO A JSON
    //     let json = JSON.stringify(departamento);
    //     //  DEBEMOS INDICAR EN LA PETICION TIPO DE FORMATO TIENE EL OBJETO A ENVIAR
    //     let header = new HttpHeaders();
    //     header = header.set("Content-type", "application/json");
    //     let request = "api/departamentos";
    //     let url = environment.urlApiDepartamentos + request;
    //     return this._http.post(url, json, {headers : header})
    // }

    insertDepartamento(departamento: Departamento): Observable<any> {
        //ESTO ES COMO JQUERY CONVERTIR UN OBJETO A JSON
        let json = JSON.stringify(departamento);
        //DEBEMOS INDICAR EN LA PETICION QUE TIPO DE FORMATO TIENE EL OBJETO A ENVIAR
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, { headers: header });
    }

    findDepartamento(idDepartamento: string): Observable<any>{
        let request = "api/departamentos/"+ idDepartamento;
        let url = environment.urlApiDepartamentos + request;
        return this._http.get(url);
    }

    updateDepartamento(departamento: Departamento):Observable<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("Content-type","application/json");
        let request = "api/departamentos"
        let url = environment.urlApiDepartamentos + request;
        return this._http.put(url, json, {headers: header})

    }

    deleteDepartamento(idDepartamento: string):Observable<any>{
        let request ="api/departamentos/"+idDepartamento;
        let url = environment.urlApiDepartamentos+request;
        return this._http.delete(url)
    }
}