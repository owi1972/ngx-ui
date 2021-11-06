import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeComponent, TreeNodeComponent } from './tree.component';

@NgModule({
  declarations: [TreeComponent, TreeNodeComponent],
  exports: [TreeComponent, TreeNodeComponent],
  imports: [CommonModule, FormsModule]
})
export class TreeModule {}
