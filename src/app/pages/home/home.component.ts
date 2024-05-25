import { Component } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';
import { HomeService } from './home.service';
import { EquipmentFilterType } from 'src/app/types/equipment-filter.type';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public listaEquipamentos: EquipmentType[] = [];

  constructor(
    private _equipmentService: EquipmentService,
    private _router: Router
  ) {
    this.filtrarEquipamentosPorNome();
  }

  public filtrarEquipamentosPorNome(filtro?: EquipmentFilterType) {
    this._equipmentService.getListaEquipamento(filtro).subscribe({
      next: (resp) => {
        this.listaEquipamentos = resp;
        console.log('next');
      },
      error: (err) => {
        console.log(err);
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  public getDetalhesEquipamento(id: string) {
    this._router.navigate([`/details/${id}`]);
  }
}
