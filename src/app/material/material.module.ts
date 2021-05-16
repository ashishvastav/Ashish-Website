import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';





const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatTooltipModule
];
@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents]
})
export class MaterialModule { }
