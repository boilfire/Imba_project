import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '../models/form';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class FormService {

	constructor(private http: HttpClient){

	}

	createForm(projectName,projectD,skills,budget){
		return this.http.post('/api/proj_create/', {"project_name":projectName, "description":projectD, "skills_required":skills, "payment_method":budget }, httpOptions);
	}

	getAll() {
			return this.http.get('/api/form' );
	}
}
