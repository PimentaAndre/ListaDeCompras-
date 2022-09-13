import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {



  constructor(public storage: Storage) {

  }

  async getCompra() {

    const database = await this.storage.get('produtos');
    return database ? database : []

    // if(database) {
    //   return database
    // }

    // return []

    // return await this.storage.get('chave');
    // return []


  }


  async save(object) {
    let getSaved = await this.getCompra();
    getSaved.push(object);
    this.storage.set('produtos', getSaved);
  }

  set(key, listadecompras) {
    this.storage.set(key, listadecompras);
  }

  async editProduct(product) {

    let chamaArray = await this.getCompra()
    let index = chamaArray.findIndex(productItem => {
      return productItem.id === product.id
    });

    // console.log(index)
    // console.log(product)

    chamaArray.splice(index, 1, product);
    this.set('produtos', chamaArray);

  }

  async deletarProduto(product) {

    let chamaArray = await this.getCompra()

    let index = chamaArray.findIndex(productItem => {
      return productItem.id === product.id
    });

    chamaArray.splice(index, 1)

    this.set('produtos', chamaArray)
  }
}
