import { Component } from '@angular/core';
import { NavController, IonicPage, ItemSliding } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    constructor(private navCtrl: NavController, private holdingsProvider: HoldingsProvider) {
 
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
 
    goToCryptonator(): void {
        window.open('https://www.cryptonator.com/api', '_system');
    }
 
    refreshPrices(refresher): void {
        this.holdingsProvider.fetchPrices(refresher);
    }
 
}
