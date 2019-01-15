import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'plugin-a-component',
  templateUrl: './plugin-a.component.html'
})
export class PluginAComponent {
  public myForm: NgForm;
  @Input() activityConf: any;
  @Output() cancelWfl = new EventEmitter<string>();

  constructor( private el: ElementRef) { }

  public activityConfObject(): any {
    return this.activityConf;
  }

  public cancelWorkflow() {
    this.cancelWfl.emit("cancel workflow (EventEmmitter)");
  }
}
