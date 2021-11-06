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

import { ArrayNode } from '../node-types/array-node.component';
import { jsonSchemaDataTypes } from '../json-editor.helper';

@Component({
  selector: 'ngx-json-array-node-flat',
  templateUrl: './json-editor-node-flat/node-types/array-node-flat/array-node-flat.component.html',
  styleUrls: ['./json-editor-node-flat/node-types/array-node-flat/array-node-flat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrayNodeFlatComponent extends ArrayNode implements OnInit, OnChanges {
  @ViewChild('propertyConfigTmpl', { static: false }) propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;

  @Input() level: number;

  @Input() schemaBuilderMode: boolean;

  @Input() formats: JsonSchemaDataType[];

  @Input() compressed: boolean;

  @Input() hideRoot = false;

  @Input() isDuplicated = false;

  @Input() passwordToggleEnabled = false;

  indentationArray: number[] = [];

  constructor(private dialogService: DialogService) {
    super();
  }

  ngOnInit() {
    if (this.schemaBuilderMode) {
      this.dataTypes = [...jsonSchemaDataTypes, ...this.formats];
    }

    if (this.schemaBuilderMode && !this.model.length && this.schemaRef.items && this.schemaRef.items.type) {
      this.model.push(this.schemaRef.items);
    }

    this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if ('level' in changes) {
      this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
    }
  }

  onPropertyConfig(item: JSONEditorSchema, index: number): void {
    this.dialogService.create({
      template: this.propertyConfigTmpl,
      context: {
        property: item,
        index,
        schema: this.schema,
        formats: this.formats
      },
      class: 'property-config-dialog'
    });
  }

  updateSchema(options: PropertyConfigOptions): void {
    this.schema.items = options.newProperty;
    this.schemaRef.items = options.newProperty;
    this.schemaUpdate.emit();
  }

  addArrayItem(dataType?: JsonSchemaDataType) {
    if (this.schemaBuilderMode && dataType) {
      this.addDefaultItemForSchemaBuilder(dataType);
    } else {
      super.addArrayItem(dataType);
    }
  }

  deleteArrayItem(index: number): void {
    if (this.schemaBuilderMode) {
      this.removeDefaultItemForSchemaBuilder();
    } else {
      super.deleteArrayItem(index);
    }
  }

  addDefaultItemForSchemaBuilder(dataType: JsonSchemaDataType): void {
    this.schema.items = dataType.schema as Record<string, any>;
    this.schemaRef.items = dataType.schema as Record<string, any>;

    this.model.push(this.schemaRef.items.type === 'array' ? [] : this.schemaRef.items);

    this.schemaUpdate.emit();
  }

  private removeDefaultItemForSchemaBuilder(): void {
    delete this.schema.items;
    delete this.schemaRef.items;

    this.model = [];

    this.schemaUpdate.emit();
  }
}

import { ObjectNode } from '../node-types/object-node.component';
import { createValueForSchema } from '../json-editor.helper';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-json-object-node-flat',
  templateUrl: './json-editor-node-flat/node-types/object-node-flat/object-node-flat.component.html',
  styleUrls: ['./json-editor-node-flat/node-types/object-node-flat/object-node-flat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectNodeFlatComponent extends ObjectNode implements OnInit, OnChanges {
  @ViewChild('propertyConfigTmpl', { static: false }) propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;

  @Input() level: number;

  @Input() schemaBuilderMode: boolean;

  @Input() formats: JsonSchemaDataType[] = [];

  @Input() compressed: boolean;

  @Input() hideRoot = false;

  @Input() isDuplicated = false;

  @Input() passwordToggleEnabled = false;

  indentationArray: number[] = [];

  duplicatedFields = new Map<string, string>();

  objectKeys = Object.keys;

  constructor(private dialogService: DialogService, protected cdr: ChangeDetectorRef) {
    super(cdr);
  }

  ngOnInit() {
    if (this.schemaBuilderMode) {
      this.dataTypes = [...jsonSchemaDataTypes, ...this.formats];
    }

    setTimeout(() => {
      this.initSchemaProperties(this.schema);
      this.initSchemaProperties(this.schemaRef);
    });

    this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if ('level' in changes) {
      this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
    }
  }

  onUpdatePropertyName(options: { id: string; name: string }): void {
    const existingSchemaProperty = this.schemaRef.properties[options.name];
    const existingPropertyValue = this.model[options.name];
    const oldName = this.propertyIndex[options.id].propertyName;

    this.duplicatedFields.delete(options.id);

    if (!existingSchemaProperty && existingPropertyValue === undefined) {
      const index = Object.keys(this.schemaRef.properties).findIndex(prop => prop === oldName);
      this.updateSchemaPropertyName(this.schemaRef, options.name, this.propertyIndex[options.id].propertyName);
      this.swapSchemaProperties(index);
      this.updatePropertyName(options.id, options.name);
      this.schemaUpdate.emit();
    } else if (oldName !== options.name) {
      this.duplicatedFields.set(options.id, options.name);
    }
  }

  onPropertyConfig(property: JSONEditorSchema, index: number): void {
    this.dialogService.create({
      template: this.propertyConfigTmpl,
      context: {
        property,
        index,
        schema: this.schema,
        formats: this.formats
      },
      class: 'property-config-dialog'
    });
  }

  updateSchema(options: PropertyConfigOptions): void {
    const oldProperty = options.oldProperty;
    const newProperty = options.newProperty;

    const oldName = oldProperty.propertyName;
    const newName = newProperty.propertyName;

    if (newName !== oldName) {
      if (oldName in this.schema.properties) {
        this.updateSchemaPropertyName(this.schema, newName, oldName);
      }

      this.updateSchemaPropertyName(this.schemaRef, newName, oldName);
      this.updatePropertyName(options.newProperty.id, newName);
    }

    this.toggleRequiredValue(options.required, newName);

    this.schema.properties[newName] = newProperty;
    this.propertyIndex[options.newProperty.id] = newProperty;
    this.updateSchemaRefProperty(newProperty);

    if (newName !== oldName) {
      this.swapSchemaProperties(options.index);
    }

    if (oldProperty.type !== newProperty.type) {
      const value: any = createValueForSchema(newProperty);
      this.model[newProperty.propertyName] = value;
    }

    this.propertyIndex = { ...this.propertyIndex };
    this.schemaUpdate.emit();
  }

  addProperty(dataType: JsonSchemaDataType): void {
    super.addProperty(dataType);

    this.updateSchemaRefProperty(this.propertyIndex[this.propertyId - 1]);
    this.schemaUpdate.emit();
  }

  deleteProperty(propName: string): void {
    if (this.schemaBuilderMode) {
      delete this.schema.properties[propName];
      delete this.schemaRef.properties[propName];
      this.toggleRequiredValue(false, propName);
    } else if (!this.schema.required.includes(propName) && !(propName in this.schema.properties)) {
      delete this.schemaRef.properties[propName];
    }

    this.schemaUpdate.emit();
    super.deleteProperty(propName);
  }

  drop(event: CdkDragDrop<string[]>): void {
    const propertyIndexValues = Object.values(this.propertyIndex);

    moveItemInArray(propertyIndexValues, event.previousIndex, event.currentIndex);

    let index = 0;
    for (const prop in this.propertyIndex) {
      this.propertyIndex[prop] = propertyIndexValues[index];
      this.propertyIndex[prop].id = parseInt(prop, 10);
      index += 1;
    }

    this.propertyIndex = { ...this.propertyIndex };

    this.swapSchemaProperties(event.currentIndex, event.previousIndex);
  }

  private swapSchemaProperties(currentIndex: number, previousIndex?: number): void {
    const propertiesIds = Object.keys(this.schemaRef.properties);

    if (previousIndex === undefined) {
      previousIndex = propertiesIds.length - 1;
    }

    moveItemInArray(propertiesIds, previousIndex, currentIndex);

    this.schemaRef.properties = propertiesIds.reduce((result, prop) => {
      result[prop] = this.schemaRef.properties[prop];
      return result;
    }, {});

    this.schemaUpdate.emit();
  }

  private initSchemaProperties(schema: JSONEditorSchema): void {
    if (schema) {
      schema.required = schema.required || [];
      schema.properties = schema.properties || {};
    }
  }

  private updateSchemaRefProperty(prop: any): void {
    this.schemaRef.properties[prop.propertyName] = {
      type: prop.type,
      ...(prop.format && { format: prop.format }),
      ...(prop.examples && { examples: prop.examples }),
      ...(prop.title && { title: prop.title }),
      ...(prop.items && { items: prop.items }),
      ...(prop.required && { required: prop.required }),
      ...(prop.properties && { properties: prop.properties }),
      ...(prop.enum && { enum: prop.enum }),
      ...(prop.default && { default: prop.default }),
      ...(prop.description && { description: prop.description }),
      ...(prop.nameEditable && { nameEditable: prop.nameEditable }),
      ...(prop.minimum && { minimum: prop.minimum }),
      ...(prop.maximum && { maximum: prop.maximum }),
      ...(prop.minLength && { minLength: prop.minLength }),
      ...(prop.maxLength && { maxLength: prop.maxLength }),
      ...(prop.minItems && { minItems: prop.minItems }),
      ...(prop.maxItems && { maxItems: prop.maxItems }),
      ...(prop.pattern && { pattern: prop.pattern })
    };
  }

  private updateSchemaPropertyName(schema: JSONEditorSchema, newName: string, oldName: string): void {
    this.updateRequiredProperties(schema, newName, oldName);
    schema.properties[newName] = schema.properties[oldName];
    delete schema.properties[oldName];
  }

  private toggleRequiredValue(required: boolean, propertyName: string): void {
    const requiredIndex = this.schema.required.indexOf(propertyName);
    if (requiredIndex >= 0 && !required) {
      this.schema.required.splice(requiredIndex, 1);
    } else if (requiredIndex < 0 && required) {
      this.schema.required.push(propertyName);
    }

    this.schemaRef.required = [...this.schema.required];
    this.updateRequiredCache();
  }

  private updateRequiredProperties(schema: JSONEditorSchema, newName: string, oldName: string): void {
    const requiredIndex = schema.required.indexOf(oldName);
    if (requiredIndex >= 0) {
      schema.required[requiredIndex] = newName;
    }
  }
}

@Component({
  selector: 'ngx-json-editor-node-info',
  templateUrl: './json-editor-node-flat/node-types/node-info/node-info.component.html',
  styleUrls: ['./json-editor-node-flat/node-types/node-info/node-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JsonEditorNodeInfoComponent {
  @Input()
  nameEditable = false;

  @Input()
  title: string;

  @Input()
  propertyName: string;

  @Input()
  description: string;

  @Input()
  type: string;

  @Input()
  examples: string[];

  @Input()
  compressed = false;

  @Output() propertyNameChange = new EventEmitter<string>();

  updatePropertyName(name: string) {
    this.propertyNameChange.emit(name);
  }
}
