import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

interface Holding {
  crypto: string,
  currency: string,
  amount: number,
  value?: number
}

@IonicPage()
@Component({
  selector: 'page-edit-holding',
  templateUrl: 'edit-holding.html',
})
export class EditHoldingPage {

  private holding: Holding;

  constructor(public navCtrl: NavController, public navParams: NavParams, private holdingsProvider: HoldingsProvider) {
    this.holding = navParams.get('param1');
  }

  saveEdits() {
    this.holdingsProvider.editHolding(this.holding);
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditHoldingPage');
  }

}
