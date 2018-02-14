import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/form';

@Injectable()
export class FormService {

	constructor(private http: HttpClient){

	}

	createForm(form : Form){
		return this.http.post('/api/form', form);
	}

	getAll() {
			return this.http.get('/api/form' );
	}
}
