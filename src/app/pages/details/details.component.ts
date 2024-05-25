import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public equipamento: EquipmentType | null = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _equipmentService: EquipmentService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this._equipmentService.getEquipamento(id).subscribe({
        next: (res) => (this.equipamento = res),
        error: (_) => this._router.navigate(['']),
      });
    }
  }
}
