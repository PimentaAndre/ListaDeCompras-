import { CategoryPage } from './../category/category';
import { StorageProvider } from './../../providers/storage/storage';

import { ProductRegistrationPage } from './../product-registration/product-registration';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaCompras = []



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
  }

  async adicionarProduto() {

    await this.storageProvider.save({ name: 'Arroz', price: '4,30', category: 'Comida', id: 1, supermarkets: [{ id: 1, place: 'Povo' }] })

    await this.storageProvider.save({ name: 'Atum', price: '5,90', category: 'Enlatado', id: 2, supermarkets: [{ id: 2, place: 'GBarbosa' }] })

  }

  async ionViewDidEnter() {

    if(this.listaCompras.length === 0 ){
    await this.adicionarProduto();
  }
  
    this.listaCompras = await this.storageProvider.getCompra()

  }

  enterInProductPage(produtos) {
    this.navCtrl.push(ProductRegistrationPage, {
      'produtos': produtos
    });
  }

  enterInCategoryPage() {
    this.navCtrl.push(CategoryPage)
  }

  somandoProdutos() {

    let totalProdutos = 0;

    this.listaCompras.forEach((product) => {
      totalProdutos = Number(product.price.replace(',', '.')) + totalProdutos

      // console.log('total', total);

    });

    return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalProdutos);
  }

  totalDeItens() {
    return this.listaCompras.length
  }

  async deleteProduct(listaCompras) {
    await this.storageProvider.deletarProduto(listaCompras)

    this.ionViewDidEnter()

  }


}

