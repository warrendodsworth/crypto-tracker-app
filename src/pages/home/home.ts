import { Component } from '@angular/core';
import { NavController, IonicPage, ItemSliding, AlertController } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    constructor(private navCtrl: NavController, private holdingsProvider: HoldingsProvider, private alertCtrl: AlertController) {
 
    }
 
    ionViewDidLoad(): void {
        this.holdingsProvider.loadHoldings();
    }
 
    addHolding(): void {
        this.navCtrl.push('AddHoldingPage');
    }

    editHolding(holding, slidingItem: ItemSliding): void {
        slidingItem.close();
        
        this.navCtrl.push('EditHoldingPage', {
            param1: holding
        });
    }

    removeHolding(holding, slidingItem: ItemSliding): void {
        console.log("About to remove holding");

        let alert = this.alertCtrl.create({
            title: 'Confirm removal',
            message: 'Do you want to remove this holding?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  slidingItem.close();
                }
              },
              {
                text: 'Remove',
                handler: () => {
                  this.holdingsProvider.removeHolding(holding);
                }
              }
            ]
          });
          alert.present();
    }
 
    goToCryptonator(): void {
        window.open('https://www.cryptonator.com/api', '_system');
    }
 
    refreshPrices(refresher): void {
        this.holdingsProvider.fetchPrices(refresher);
    }
 
}
