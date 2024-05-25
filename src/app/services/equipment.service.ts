import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentType } from '../types/equipment.type';
import { EquipmentFilterType } from '../types/equipment-filter.type';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private _URL = 'https://mandalorian-store.netlify.app/api';

  constructor(private _http: HttpClient) {}

  public getListaEquipamento(
    filtroEquipamento?: EquipmentFilterType
  ): Observable<EquipmentType[]> {
    let params = new HttpParams();
    if (filtroEquipamento) {
      Object.entries(filtroEquipamento).map(([key, value]) => {
        if (String(value).trim().length === 0) {
          return;
        }
        params = params.set(String(key), value);
      });
    }

    return this._http.get<EquipmentType[]>(`${this._URL}/equipments`, {
      params,
    });
  }

  public getEquipamento(id: string): Observable<EquipmentType> {
    return this._http.get<EquipmentType>(`${this._URL}/equipments/${id}`);
  }
}
