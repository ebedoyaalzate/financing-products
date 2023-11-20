import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() text: string = '';
  @Input() name: string = '';
  @Input() open: boolean = false;

  @Output() closeAction = new EventEmitter();
  @Output() confirmAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.open = false;
    this.closeAction.emit(false);
  }

  confirm() {
    this.confirmAction.emit(true);
  }
}
