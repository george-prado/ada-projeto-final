import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit, OnChanges {
  @Input() listaEquipamentos: EquipmentType[] = [];
  @Output() verDetalhesEquipamento = new EventEmitter<string>();

  equipamentosPaginados: EquipmentType[] = [];
  itensPorPagina: number = 10; // 5 cards por linha * 2 linhas
  paginaAtual: number = 1;
  totalPaginas: number = 1;

  ngOnInit(): void {
    this.atualizarEquipamentosPaginados();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listaEquipamentos']) {
      this.totalPaginas = Math.ceil(this.listaEquipamentos.length / this.itensPorPagina);
      this.paginaAtual = 1; // Resetar para a primeira página
      this.atualizarEquipamentosPaginados();
    }
  }

  public verDetalhes(id: string) {
    this.verDetalhesEquipamento.emit(id);
  }

  atualizarEquipamentosPaginados(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.equipamentosPaginados = this.listaEquipamentos.slice(inicio, fim);
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.atualizarEquipamentosPaginados();
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarEquipamentosPaginados();
    }
  }
}
