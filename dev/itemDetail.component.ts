import {Component, ElementRef ,AfterViewInit,Input,Output, EventEmitter} from '@angular/core';

declare var componentHandler: any;

@Component({
    selector: 'item-detail',
    template: `
      <span>{{item}}</span>
      <button (click)='salvar(item)'></button>
    `
})
export class ItemDetail implements AfterViewInit  {
  @Input() item:string;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        //componentHandler.upgradeAllRegistered();
    }

    salvar(item:any){
      item = 'asdf'
      this.onSave.emit(item);
    }
}
