import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categorias: any = [{ "codigo": 0, "texto": "Todas"},{ "codigo": 1, "texto": "Técnología"},{ "codigo": 2, "texto": "Salud"},{ "codigo": 3, "texto": "Vinos"}];

  temporal: any;

  noticias: any = [{
    "categoria": {
      "codigo": 1,
      "texto": "Técnología"
    },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  },
  {
    "categoria": {
      "codigo": 2,
      "texto": "Salud"
  },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  },
  {
    "categoria": {
      "codigo": 1,
      "texto": "Técnología"
  },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  },
  {
    "categoria": {
      "codigo": 2,
      "texto": "Salud"
  },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  },
  {
    "categoria": {
      "codigo": 3,
      "texto": "Vinos"
  },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  },
  {
    "categoria": {
      "codigo": 3,
      "texto": "Vinos"
  },
    "titulo": "Presenta Xiaomi nuevos Redmi Note 9",
    "texto": "Se trata del Redmi Note 9 Pro y el Redmi Note 9. El primero sería la joya de la serie con un sistema de cuatro cámaras traseras en la que la principal sería de 64 MP, mientras que lo complementan un lente ultra gran angular de 8 MP, un macro de 5 MP y un sensor de profundidad de 2MP. Además, el Redmi Note 9 Pro obtiene su poder del nuevo procesador de Qualcomm el Snapdragon 720G con hasta 2.3GHz, el cual le daría también sus capacidades de rendimiento de eficiencia energética.",
    "imagen": "https://assets.mibolsillo.com/export/sites/debate/img/2020/05/28/presenta_xiaomi_nuevos_redmi_n_1109981.jpg_687045543.jpg"
  }];

  constructor() { 

    this.temporal = this.noticias;

  }

  ngOnInit(): void {
  }

  eventoControl(evento){
    if (evento.target.value == 0){
      this.noticias = this.temporal;
    }else{
      this.noticias = this.temporal.filter( (item) => {
          return item.categoria.codigo == evento.target.value;
      });
    }
  }

}
