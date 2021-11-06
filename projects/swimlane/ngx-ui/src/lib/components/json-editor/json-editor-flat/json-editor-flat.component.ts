import {
  Component,
  QueryList,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  SimpleChanges,
  ChangeDetectorRef,
  OnChanges,
  OnInit
} from '@angular/core';

import { SchemaValidatorService } from '../schema-validator.service';
import { JsonEditor } from '../json-editor';
import { JSONEditorSchema, JsonSchemaDataType, jsonSchemaDataFormats } from '../json-editor.helper';
import { DialogService } from '../../dialog/dialog.service';
import {
  PropertyConfigComponent,
  PropertyConfigOptions
} from './json-editor-node-flat/node-types/property-config/property-config.component';

@Component({
  selector: 'ngx-json-editor-flat',
  templateUrl: './json-editor-flat.component.html',
  styleUrls: ['./json-editor-flat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class JsonEditorFlatComponent extends JsonEditor implements OnInit, OnChanges {
  @Input() model: any;

  @Input() schema: JSONEditorSchema;

  @Input() typeCheckOverrides?: any;

  @Input() schemaBuilderMode?: boolean = false;

  @Input() formats?: string[] = [];

  @Input() compressed = false;

  @Input() hideRoot = false;

  @Input() showKnownProperties = false;

  @Input() passwordToggleEnabled = false;

  nodeElms: QueryList<JsonEditorNodeFlatComponent>;

  @ViewChild('propertyConfigTmpl') propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;

  schemaRef: JSONEditorSchema;

  customFormats: JsonSchemaDataType[] = [];

  constructor(
    private dialogService: DialogService,
    protected schemaValidatorService: SchemaValidatorService,
    protected cdr: ChangeDetectorRef
  ) {
    super(schemaValidatorService, cdr);
  }

  ngOnInit() {
    if (this.formats.length && this.schemaBuilderMode) {
      this.buildCustomFormats();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (changes.schema) {
      this.schemaRef = JSON.parse(JSON.stringify(this.schema));
    }
  }

  onPropertyConfig(): void {
    this.dialogService.create({
      template: this.propertyConfigTmpl,
      context: {
        property: this.schema,
        schema: this.schema,
        formats: this.customFormats
      },
      class: 'property-config-dialog'
    });
  }

  updateSchema(options: PropertyConfigOptions): void {
    const editedSchema = options.newProperty;

    if (editedSchema.title) {
      this.schema.title = editedSchema.title;
      this.schemaRef.title = editedSchema.title;
    } else {
      delete this.schema.title;
      delete this.schemaRef.title;
    }

    if (editedSchema.description) {
      this.schema.description = editedSchema.description;
      this.schemaRef.description = editedSchema.description;
    } else {
      delete this.schema.description;
      delete this.schemaRef.description;
    }

    this.schema = { ...this.schema };
    this.schemaRef = { ...this.schemaRef };

    this.schemaUpdate.emit(this.schemaRef);
  }

  private buildCustomFormats(): void {
    this.formats.forEach(format => {
      const found = jsonSchemaDataFormats.find((dataFormat: JsonSchemaDataType) => {
        return dataFormat.schema.format === format;
      });

      if (found) {
        this.customFormats.push(found);
      } else {
        this.customFormats.push({
          name: format.charAt(0).toUpperCase() + format.slice(1),
          defaultValue: () => '',
          schema: {
            type: 'string',
            format
          },
          icon: 'field-text',
          matchType: (): boolean => {
            return false;
          }
        });
      }
    });
  }
}

import { EventEmitter, Output } from '@angular/core';
import { JsonEditorNode } from '../json-editor-node';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { requiredIndicatorIcon } from '../json-editor.helper';

@Component({
  selector: 'ngx-json-editor-node-flat',
  templateUrl: './json-editor-node-flat/json-editor-node-flat.component.html',
  styleUrls: ['./json-editor-node-flat/json-editor-node-flat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorNodeFlatComponent extends JsonEditorNode implements OnInit, OnChanges {
  @Input() model: any;

  @Input() schema: JSONEditorSchema;

  @Input() typeCheckOverrides?: any;

  @Input() errors: any[];

  @Input() label: string;

  @Input() level: number;

  @Input() schemaBuilderMode?: boolean;

  @Input() schemaRef?: JSONEditorSchema;

  @Input() formats: JsonSchemaDataType[];

  @Input() arrayItem = false;

  @Input() hideRoot = false;

  @Input() arrayName = '';

  @Input() compressed: boolean;

  @Input() indentationArray: number[];

  @Input() showKnownProperties = false;

  @Input() isDuplicated = false;

  @Input() passwordToggleEnabled = false;

  @Output() updatePropertyNameEvent = new EventEmitter<{ id: string | number; name: string }>();

  requiredIndicator: SafeHtml;

  nextLevel = 0;

  constructor(public dialogMngr: DialogService, private domSanitizer: DomSanitizer) {
    super(dialogMngr);
    this.requiredIndicator = this.domSanitizer.bypassSecurityTrustHtml(requiredIndicatorIcon);
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if ('level' in changes || 'hideRoot' in changes) {
      this.nextLevel = this.level === undefined ? (this.hideRoot ? -1 : 0) : this.level + 1;
    }
  }

  updatePropertyName(id: string | number, name: string): void {
    this.updatePropertyNameEvent.emit({ id, name });
  }
}
