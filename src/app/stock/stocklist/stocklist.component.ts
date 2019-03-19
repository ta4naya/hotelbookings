import { Component, OnInit,Input,EventEmitter,Output,OnChanges} from '@angular/core';


@Component({
  selector: 'bwm-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {
@Input() stockid : number;
@Input() stock :number;
@Output() updateStock: EventEmitter<any> =
new EventEmitter<any>();
color = '';
updatedstockvalue: number;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges():void {
    if (this.stock > 10){
      this.color  = 'green';
    } else {
      this.color = 'red';
    }
       
  }
  stockValueChanged(){ 
  this.updateStock.emit({ id: this.stockid, updatedstockvalue: this.updatedstockvalue });
  this.updatedstockvalue = null;
}
}
