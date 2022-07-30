import { StorageProvider } from './../../providers/storage/storage';

import { ProductRegistrationPage } from './../product-registration/product-registration';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaCompras = []



  constructor(public navCtrl: NavController, public storageProvider: StorageProvider) {
  }

  async ionViewDidEnter() {

    this.listaCompras = await this.storageProvider.getCompra()

  }

  enterInProductPage() {
    this.navCtrl.push(ProductRegistrationPage);
  }

   somandoProdutos() {

    let totalProdutos = 0;

    this.listaCompras.forEach((product) => {
      totalProdutos = Number(product.price.replace(',', '.')) + totalProdutos

      // console.log('total', total);

    });

     return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalProdutos);



    // let test = console.log('aaaaa')
    
     
    


    // let totalNum = this.listaCompras

    //   .map(l => parseFloat(l.area.replace(/\./g, '').replace(',', '.')));
    //   .reduce((price, value) => price + value);
    // console.log(Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalNum));


  }
}
