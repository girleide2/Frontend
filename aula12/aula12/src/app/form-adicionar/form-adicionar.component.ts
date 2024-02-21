import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BancoServiceService } from '../banco-service.service';


@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrl: './form-adicionar.component.css'
})
export class FormAdicionarComponent{
  constructor(private servicoBanco: BancoServiceService ){

  }
  submitForm(form: NgForm){
    let{modelo, marca, ano, valor, cor, foto} = form.value;
    console.log(modelo, marca, ano, valor, cor, foto);
    let carro = {modelo, marca, ano, valor, cor, foto};
    this.servicoBanco.adicionaCarro(carro);
  }
}
