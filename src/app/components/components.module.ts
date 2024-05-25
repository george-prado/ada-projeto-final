import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    EquipmentComponent,
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    DialogComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
