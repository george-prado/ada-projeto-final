import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  @Input() equipamento!: EquipmentType;
  @Output() verDetalhes = new EventEmitter<string>();

  public clickHandler() {
    this.verDetalhes.emit(this.equipamento.id);
  }
}
