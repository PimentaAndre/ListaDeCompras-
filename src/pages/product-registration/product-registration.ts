import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-product-registration',
  templateUrl: 'product-registration.html',
})
export class ProductRegistrationPage {

  product = {
    name: "",
    price: "",
    category: "",
    supermarkets: [],
    id: new Date().getTime()
  }
  place = ""

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storageProvider: StorageProvider
  ) {
    if (this.navParams.get('produtos')) {
      this.product = this.navParams.get('produtos')
    }
  }


  saveSuperMarket() {

    this.product.supermarkets.push({ id: new Date().getTime(), place: this.place });

    //   (product) => {
    //     let index = this.products.supermarkets(product.local);
    //     this.products[index] = this.products;
    //  }

  }

  saveProduct() {

    this.storageProvider.save(this.product);

  }

  deletePlace(product) {


    let index = this.product.supermarkets.findIndex(productItem => {
      return productItem.id === product.id
    });
    

    this.product.supermarkets.splice(index, 1)
  }

  editPlace(place) {

    let index = this.product.supermarkets.findIndex(supermarket => {
      return supermarket === place
    });

    // console.log('antes da atribuição,', this.products.supermarkets[index]);
    // console.log('place', this.place)

    // {id:'', "supermercado"} = place = " "
    this.product.supermarkets[index].place = this.place

    // console.log('depois da atribuição,', this.products.supermarkets[index]);

    // console.log(index)

  }

  editProduct() {

    this.storageProvider.editProduct(this.product);


  }

  // deleteProduct() {
  //   this.storageProvider.deletarProduto(this.product)
  // }

  fillFields() {

    const indiceAleatorio = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const nomes = ["Arroz", "Ervilha", 'Amaciante', 'Desifetante', "Pão de Forma", "Requeijão"]

    this.product.name = nomes[indiceAleatorio(0, nomes.length - 1)]

    const preco = ["4,30", "4,50", "13,60", "1,70", "2,99"]

    this.product.price = preco[indiceAleatorio(0, preco.length - 1)]

    const categoria = ["Café da manhã/Padaria", "Mercearia em geral e enlatados", "Produtos de limpeza/Utilidades"]

    this.product.category = categoria[indiceAleatorio(0, categoria.length - 1)]

    const local = ["Açaí", "São Francisco", "Pão de Açucar", "Êxito", "Povo"]

    this.place = local[indiceAleatorio(0, local.length - 1)]
  }

}

