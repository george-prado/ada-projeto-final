import { Component, EventEmitter, Output } from '@angular/core';
import { EquipmentFilterType } from 'src/app/types/equipment-filter.type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public filtro: string = '';
  public sortOrder: string = 'DESC';
  public isAvailable: string = '';

  @Output() filtroEmitter: EventEmitter<EquipmentFilterType> =
    new EventEmitter<EquipmentFilterType>();

  public buscarEquipamentoPorNome() {
    const filtroEquipamento: EquipmentFilterType = {
      search: this.filtro,
      sort: this.sortOrder,
    };

    if (this.isAvailable.trim().length > 0) {
      filtroEquipamento.isAvailable = this.isAvailable === 'true';
    }

    this.filtroEmitter.emit(filtroEquipamento);
  }

  public limparFiltro() {
    // this.filtro = '';
    // this.filtroEmitter.emit(this.filtro);
  }
}
