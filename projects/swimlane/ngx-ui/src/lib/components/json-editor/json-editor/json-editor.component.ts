import {
  Component,
  ViewEncapsulation,
  QueryList,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { JsonEditor } from '../json-editor';

import { JSONEditorSchema } from '../json-editor.helper';

@Component({
  selector: 'ngx-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorComponent extends JsonEditor {
  @Input() model: any;

  @Input() schema: JSONEditorSchema;

  @Input() typeCheckOverrides?: any;

  @Input() passwordToggleEnabled = false;

  nodeElms: QueryList<JsonEditorNodeComponent>;

  constructor(protected schemaValidatorService: SchemaValidatorService, protected cdr: ChangeDetectorRef) {
    super(schemaValidatorService, cdr);
  }
}

import { OnInit } from '@angular/core';
import { JsonEditorNode } from '../json-editor-node';

import { DialogService } from '../../dialog/dialog.service';
import { SchemaValidatorService } from '../schema-validator.service';

@Component({
  selector: 'ngx-json-editor-node',
  templateUrl: './json-editor-node/json-editor-node.component.html',
  styleUrls: ['./json-editor-node/json-editor-node.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorNodeComponent extends JsonEditorNode implements OnInit {
  @Input() model: any;

  @Input() schema: JSONEditorSchema;

  @Input() typeCheckOverrides?: any;

  @Input() errors: any[];

  @Input() showKnownProperties = false;

  @Input() isDuplicated = false;

  @Input() passwordToggleEnabled = false;

  placeholder = '';

  constructor(public dialogMngr: DialogService) {
    super(dialogMngr);
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.schema.examples && Array.isArray(this.schema.examples)) {
      this.placeholder = this.schema.examples.join(', ');
    }
  }
}

import { ObjectNode } from '../node-types/object-node.component';

@Component({
  selector: 'ngx-json-object-node',
  templateUrl: './json-editor-node/node-types/object-node/object-node.component.html',
  styleUrls: ['./json-editor-node/node-types/object-node/object-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectNodeComponent extends ObjectNode {
  @Input() isDuplicated = false;

  @Input() passwordToggleEnabled = false;

  constructor(protected cdr: ChangeDetectorRef) {
    super(cdr);
  }
}
