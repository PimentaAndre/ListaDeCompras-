import { listaDeCompras } from './../../Model/interface';
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
    this.storage.set(key, listadecompras)
  }

}
