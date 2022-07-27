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

  somaProdutos() {

    let total = 0;

    this.listaCompras.forEach((produto) => {
      const comVirgula = Number(produto.price)
      let soma = total + comVirgula
      console.log(soma);
    })
    console.log('Mostrou');
    console.log(total)

  }


}
