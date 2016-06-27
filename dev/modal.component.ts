import {Component, ElementRef ,AfterViewInit,Input,Output, EventEmitter} from '@angular/core';
import {MDL} from './materialDesignUpgradeElement';
@Component({
    selector: 'modal-edit',
    template: `
    <div id="modalBack" *ngIf="item==true"></div>
    <div class="modal-list" *ngIf="item==true">
      <h4 class="mdl-dialog__title">New List</h4>
      <div class="mdl-dialog__content">
        <form mdl action="#">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="tempName">
            <label class="mdl-textfield__label" for="sample3">Name...</label>
          </div>
        </form>
      </div>
      <div class="mdl-dialog__actions">
        <button type="button" class="mdl-button" (click)="onAddList()">Save</button>
        <button type="button" class="mdl-button close" (click)="onCancelModal()">Cancel</button>
      </div>
    </div>
    `,
    directives: [MDL]
})
export class modalComponent implements AfterViewInit  {
  @Input() item:string;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  public tempName = '';
    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        //componentHandler.upgradeAllRegistered();
    }

    onAddList(item:any){
      this.onSave.emit(this.tempName);
      this.tempName = '';
    }
    onCancelModal(item:any){
      item = false;
      this.tempName = '';
      this.onCancel.emit(item);
    }
}
