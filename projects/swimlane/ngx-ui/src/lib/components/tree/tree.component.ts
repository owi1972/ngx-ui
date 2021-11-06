import {
  Component,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  ViewEncapsulation,
  TemplateRef,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  AfterContentInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TreeNode } from './tree-node.model';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements AfterContentInit, OnDestroy {
  @Input() nodes: TreeNode[];

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('template')
  _templateInput: TemplateRef<any>;

  @Input() icons = {
    collapse: 'icon-tree-collapse',
    expand: 'icon-tree-expand'
  };

  @ContentChild(TemplateRef, { static: true })
  _templateQuery: TemplateRef<any>;

  readonly nodeElms: QueryList<TreeNodeComponent>;

  @Output() expand = new EventEmitter();
  @Output() collapse = new EventEmitter();
  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();
  @Output() selectNode = new EventEmitter();

  get hasOneLeaf(): boolean {
    return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
  }

  get template(): TemplateRef<any> {
    return this._templateInput || this._templateQuery;
  }

  private readonly _destroy$ = new Subject<void>();

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe(() => this._cdr.markForCheck());
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

import { OnChanges } from '@angular/core';

@Component({
  exportAs: 'ngxTreeNode',
  selector: 'ngx-tree-node',
  templateUrl: './tree-node.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent implements OnChanges {
  @Input() label: string;
  @Input() model: any;
  @Input() node: TreeNode;
  @Input() children: any[];
  @Input() disabled: boolean;
  @Input() expandable: boolean;
  @Input() expanded: boolean;
  @Input() selectable: boolean;
  @Input() template: TemplateRef<any>;
  @Input() icons = {
    collapse: 'icon-tree-collapse',
    expand: 'icon-tree-expand'
  };

  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();
  @Output() selectNode = new EventEmitter();
  // backwards compatibility. Use selectNode
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = this.selectNode;
  @Output() expand = new EventEmitter();
  @Output() collapse = new EventEmitter();

  data: any;

  ngOnChanges(): void {
    this.data = {
      $implicit: this.node,
      label: this.label,
      children: this.children,
      model: this.model
    };
  }

  onExpandClick(event: Event): void {
    if (this.disabled || !this.expandable) return;

    event.stopPropagation();

    this.expanded = !this.expanded;

    if (this.expanded) {
      this.expand.emit(this.data);
    } else {
      this.collapse.emit(this.data);
    }
  }

  onClick(): void {
    if (!this.selectable || this.disabled) return;
    this.selectNode.emit(this.data);
  }
}
