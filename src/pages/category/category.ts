import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { StorageProvider } from './../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category = {
    name: "",
    id: new Date().getTime()
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storageProvider: StorageProvider
  ) { }


  saveCategory() {
    this.storageProvider.save(this.category)

  }

  editCategory() {

  }

  deleteCategory() {

  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  fillFields() {
    const indiceAleatorio = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const categoria = ["Café da manhã/Padaria", "Mercearia em geral e enlatados", "Produtos de limpeza/Utilidades"]
    this.category.name = categoria[indiceAleatorio(0, categoria.length - 1)]
  }
}

