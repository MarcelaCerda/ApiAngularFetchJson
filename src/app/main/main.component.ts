import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  datos={
    "nombre":"",
    "apellido":"",
    "email":"",
    "imagen":"",
    "celular":"",
    "ciudad":"",
    "pais":"",
    "experienciaLab":[
      {"empresa":"",
       "periodo":"",
       "tareasRealizada":""
       } 
   ]
  }
  get = (): void =>{
    let url:string = "../../assets/datos.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
         this.datos=data 
         console.log(data)   
         
         
      })
  }

  constructor() { 
    this.get()
  }

  ngOnInit(): void {
  }

}
