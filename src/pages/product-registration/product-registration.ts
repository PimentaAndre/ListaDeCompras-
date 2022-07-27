import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-product-registration',
  templateUrl: 'product-registration.html',
})
export class ProductRegistrationPage {

  products = {
    name: "",
    price: ""
  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storageProvider: StorageProvider
  ) {
  }

  saveProduct() {
    this.storageProvider.save(this.products);
  }

  fillFields() {

    const gerarNome = Math.round(Math.random() * 5)

    if (gerarNome == 1) {

      this.products.name = "Arroz"

    } else if (gerarNome == 2) {

      this.products.name = "Feijão"


    } else if (gerarNome == 3) {

      this.products.name = "Macarrão"


    } else if (gerarNome == 4) {

      this.products.name = "Pepino"


    } else {

      this.products.name = "Tempero completo"


    }

    const gerarPreco = Math.round(Math.random() * 3)

    if (gerarPreco == 1) {

      this.products.price = "1,90"

    } else if (gerarPreco == 2) {

      this.products.price = "4,50"


    } else {

      this.products.price = "5,60"

    }
  }
}
