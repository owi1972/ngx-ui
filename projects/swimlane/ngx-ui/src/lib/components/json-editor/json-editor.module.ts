import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { PipesModule } from '../../pipes/pipes.module';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { CodeEditorModule } from '../code-editor/code-editor.module';
import { IconModule } from '../icon/icon.module';
import { TabsModule } from '../tabs/tabs.module';
import { ToggleModule } from '../toggle/toggle.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { SelectModule } from '../select/select.module';

import {
  JsonEditorComponent,
  JsonEditorNodeComponent,
  ObjectNodeComponent,
  ArrayNodeComponent
} from './json-editor/json-editor.component';

import {
  JsonEditorFlatComponent,
  JsonEditorNodeFlatComponent,
  ArrayNodeFlatComponent,
  ObjectNodeFlatComponent,
  JsonEditorNodeInfoComponent
} from './json-editor-flat/json-editor-flat.component';
import { PropertyConfigComponent } from './json-editor-flat/json-editor-node-flat/node-types/property-config/property-config.component';
import { OrderableInputsListComponent } from './json-editor-flat/orderable-inputs-list/orderable-inputs-list.component';
import { ObjectValuesPipe } from './object-values.pipe';

@NgModule({
  declarations: [
    JsonEditorComponent,
    JsonEditorNodeComponent,
    ObjectNodeComponent,
    ArrayNodeComponent,
    JsonEditorFlatComponent,
    JsonEditorNodeFlatComponent,
    JsonEditorNodeInfoComponent,
    ArrayNodeFlatComponent,
    ObjectNodeFlatComponent,
    PropertyConfigComponent,
    OrderableInputsListComponent,
    ObjectValuesPipe
  ],
  exports: [
    JsonEditorComponent,
    JsonEditorNodeComponent,
    ObjectNodeComponent,
    ArrayNodeComponent,
    JsonEditorFlatComponent,
    JsonEditorNodeFlatComponent,
    JsonEditorNodeInfoComponent,
    ArrayNodeFlatComponent,
    ObjectNodeFlatComponent,
    PropertyConfigComponent
  ],
  imports: [
    CheckboxModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    PipesModule,
    InputModule,
    ButtonModule,
    CodeEditorModule,
    TooltipModule,
    DropdownModule,
    IconModule,
    ToggleModule,
    SelectModule,
    TabsModule
  ]
})
export class JsonEditorModule {}
