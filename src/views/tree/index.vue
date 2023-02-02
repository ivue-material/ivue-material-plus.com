<template>
  <div>
    <h1>Tree 树形控件</h1>
    <p>使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能</p>
    <h2>基础用法</h2>
    <p>最简单的用法，展示可选中，展开功能</p>
    <doc-markdown :code="code.default">
      <template #demo>
        <default></default>
      </template>
    </doc-markdown>
    <h2>可勾选</h2>
    <p>
      设置属性
      <code>show-checkbox</code>
      可以对节点进行勾选
    </p>
    <p>
      也可以通过
      <code>disabled</code>
      设置禁用勾选框
    </p>
    <doc-markdown :code="code.checkbox">
      <template #demo>
        <checkbox></checkbox>
      </template>
    </doc-markdown>
    <h2>异步加载子节点</h2>
    <p>
      默认情况下
      <code>ivue-tree</code>
      无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，
      如果节点没有下层数据，则点击后下拉按钮会消失，
      同时，你也可以提前告知某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。
    </p>
    <p>
      添加
      <code>lazy</code>
      属性，设置为懒加载子节点
    </p>
    <p>
      添加
      <code>load</code>
      属性，设置加载子树数据的方法
    </p>
    <doc-markdown :code="code.lazy">
      <template #demo>
        <lazy></lazy>
      </template>
    </doc-markdown>
    <h2>默认展开和默认选中的节点</h2>
    <p>
      分别通过
      <code>default-expanded-keys</code>
      和
      <code>default-checked-keys</code>
      设置默认展开和默认选中的节点。 需要注意的是，此时必须设置
      <code>node-key</code>
      ， 其值为节点数据中的一个字段名，该字段在整棵树中是唯一的
    </p>
    <doc-markdown :code="code.expandedAndChecked">
      <template #demo>
        <expanded-and-checked></expanded-and-checked>
      </template>
    </doc-markdown>
    <h2>树节点的选择</h2>
    <p>
      展示所有主动调用的方法， 如果需要通过
      <code>key</code> 来获取或设置，则必须设置
      <code>node-key</code>
    </p>
    <doc-markdown :code="code.function">
      <template #demo>
        <function></function>
      </template>
    </doc-markdown>
    <h2>自定义节点内容</h2>
    <p>
      可通过两种方法进行树节点内容的自定义
      <code>render-content</code>
      属性添加或者通过
      <code>scoped slot</code>
      插槽添加
    </p>
    <p>
      <code>render-content</code>
      指定渲染函数，改函数返回需要的节点区域的内容
    </p>
    <p>
      <code>scoped slot</code>
      会指定两个参数
      <code>node</code>
      和
      <code>data</code>
      分别表示当前节点的
      <code>Node</code>
      对象和
      <code>data</code>
      当前节点数据
    </p>
    <p>
      也可以通过
      <code>props.class</code>
      自定义节点的类名
    </p>
    <doc-markdown :code="code.slot">
      <template #demo>
        <slots></slots>
      </template>
    </doc-markdown>
    <h2>树节点过滤</h2>
    <p>
      调用
      <code>ivue-tree</code>
      实例对象的
      <code>filter</code>
      方法来过滤树节点，方法参数为过滤关键字，此时需要设置
      <code>filter-node-method</code>
      属性，其值为过滤函数，返回
      <code>false</code>
      则表示这个节点会被隐藏
    </p>
    <doc-markdown :code="code.filters">
      <template #demo>
        <filters></filters>
      </template>
    </doc-markdown>
    <h2>手风琴模式</h2>
    <p>
      设置
      <code>accordion</code>
      属性可对于同一级的节点，每次只能展开一个
    </p>
    <doc-markdown :code="code.accordion">
      <template #demo>
        <accordion></accordion>
      </template>
    </doc-markdown>
    <h2>可拖动节点</h2>
    <p>
      设置
      <code>draggable</code>
      属性即可开启拖动节点
    </p>
    <p>
      设置
      <code>allow-drop</code>
      属性可设置拖拽时判定目标节点能否成为拖动目标位置
    </p>
    <p>
      设置
      <code>allow-drag</code>
      属性可设置节点能否被拖拽
    </p>
    <doc-markdown :code="code.draggable">
      <template #demo>
        <draggable></draggable>
      </template>
    </doc-markdown>
    <h2>API</h2>
    <h3>Props</h3>
    <ivue-table :data="propsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="200"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="type" label="类型" width="200">
        <template #default="props">
          <p v-html="props.row.type"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column
        prop="default"
        label="默认"
        width="150"
      ></ivue-table-column>
    </ivue-table>
    <h3>Props 属性</h3>
    <ivue-table :data="props" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="100"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="type" label="类型" width="250">
        <template #default="props">
          <p v-html="props.row.type"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h3>Methods</h3>
    <ivue-table :data="methodsData" border>
      <ivue-table-column
        prop="name"
        label="名称"
        width="200"
      ></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
        <template #default="props">
          <p v-html="props.row.illustrate"></p>
        </template>
      </ivue-table-column>
      <ivue-table-column prop="value" label="参数">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h3>Events</h3>
    <ivue-table :data="eventsData" border>
      <ivue-table-column
        prop="name"
        label="事件名"
        width="200"
      ></ivue-table-column>
      <ivue-table-column
        prop="illustrate"
        label="说明"
        min-width="300"
      ></ivue-table-column>
      <ivue-table-column prop="value" label="返回值" min-width="300">
        <template #default="props">
          <p v-html="props.row.value"></p>
        </template>
      </ivue-table-column>
    </ivue-table>
    <h3>Slots</h3>
    <ivue-table :data="slotsData" border>
      <ivue-table-column prop="name" label="事件名"></ivue-table-column>
      <ivue-table-column prop="illustrate" label="说明" min-width="300">
      </ivue-table-column>
      <ivue-table-column
        prop="value"
        label="参数"
        width="300"
      ></ivue-table-column>
    </ivue-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/tree';

import Default from '@/components/tree/default.vue';
import Checkbox from '@/components/tree/checkbox.vue';
import Lazy from '@/components/tree/lazy.vue';
import ExpandedAndChecked from '@/components/tree/expanded-and-checked.vue';
import Function from '@/components/tree/function.vue';
import Slots from '@/components/tree/slots.vue';
import Filters from '@/components/tree/filters.vue';
import Accordion from '@/components/tree/accordion.vue';
import Draggable from '@/components/tree/draggable.vue';

const code = ref(Code);

// propsData
const propsData = [
  {
    name: 'data',
    illustrate: '展示数据',
    type: 'Array',
    default: '-',
  },
  {
    name: 'lazy',
    illustrate: '是否懒加载子节点，需与 load 方法结合使用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'props',
    illustrate: '配置选项，具体看下表',
    type: 'Object',
    default: '{ children: \'children\', label: \'label\', disabled: \'disabled\', }',
  },
  {
    name: 'empty-text',
    illustrate: '数据为空的时候展示的文本',
    type: 'String',
    default: '暂无数据',
  },
  {
    name: 'node-key',
    illustrate: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
    type: 'String',
    default: '-',
  },
  {
    name: 'indent',
    illustrate: '相邻级节点间的水平缩进，单位为像素',
    type: 'Number',
    default: '18',
  },
  {
    name: 'icon',
    illustrate: '自定义树节点扩展图标',
    type: 'String | Component',
    default: 'arrow_right',
  },
  {
    name: 'render-content',
    illustrate: '树节点的内容区的渲染方法',
    type: 'Function(h, { node, data, store })',
    default: '-',
  },
  {
    name: 'expand-on-click-node',
    illustrate:
      '是否在点击节点的时候展开或者收缩节点，默认值为 <code>true</code>，如果为 <code>false</code>，则只有点箭头图标的时候才会展开或者收缩节点',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'accordion',
    illustrate: '是否每次只打开一个同级树节点展开',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'show-checkbox',
    illustrate: '节点是否可被选择',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'check-box-strictly',
    illustrate: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'load',
    illustrate:
      '加载子树数据的方法，仅当 <code>lazy</code> 属性为 <code>true</code> 时生效',
    type: 'Function(node, resolve)，<code>node</code>为当前点击的节点，<code>resolve</code>为数据加载完成的回调(必须调用)',
    default: '-',
  },
  {
    name: 'default-checked-keys',
    illustrate: '默认勾选的节点的 <code>key</code> 的数组',
    type: 'Array',
    default: '-',
  },
  {
    name: 'default-expanded-keys',
    illustrate: '默认展开的节点的 <code>key</code> 的数组',
    type: 'Array',
    default: '-',
  },
  {
    name: 'auto-expand-parent',
    illustrate: '展开子节点的时候是否自动展开父节点',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'default-expand-all',
    illustrate: '是否默认展开所有节点',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'render-after-expand',
    illustrate: '是否在第一次展开某个树节点后才渲染其子节点',
    type: 'Boolean',
    default: 'true',
  },
  {
    name: 'highlight-current',
    illustrate: '是否高亮当前选中节点',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'current-node-key',
    illustrate: '设置当前选中的节点',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'filter-node-method',
    illustrate:
      '对树节点进行筛选时执行的方法, 返回 <code>false</code> 则表示这个节点会被隐藏',
    type: 'Function(value, data, node)',
    default: '-',
  },
  {
    name: 'check-on-click-node',
    illustrate: '是否在点击节点的时候选中节点，只有在点击复选框时才会选中节点',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'draggable',
    illustrate: '是否开启拖动节点功能',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'allow-drag',
    illustrate:
      '判断节点能否被拖拽 如果返回 <code>false</code> ，节点不能被拖动',
    type: 'Function(node)',
    default: '-',
  },
  {
    name: 'allow-drop',
    illustrate:
      '拖拽时判定目标节点能否成为拖动目标位置。如果返回 <code>false</code> ，拖动节点不能被拖放到目标节点。 <code>type</code> 参数有三种情况：<code>prev(放置在目标节点前)</code>、<code>inner(插入至目标节点中)</code> 和 <code>next(放置在目标节点后)</code>',
    type: 'Function(draggingNode, dropNode, type)',
    default: '-',
  },
];

// props
const props = [
  {
    name: 'label',
    illustrate: '指定节点标签为节点对象的某个属性值',
    type: 'String | Function(data, node)',
  },
  {
    name: 'children',
    illustrate: '指定子树为节点对象的某个属性值',
    type: 'String',
  },
  {
    name: 'disabled',
    illustrate: '设置节点复选框是否禁用为节点对象的某个属性值',
    type: 'String | Function(data, node)',
  },
  {
    name: 'isLeaf',
    illustrate:
      '指定节点是否为叶子节点，仅在指定了 <code>lazy</code> 属性的情况下生效',
    type: 'String | Function(data, node)',
  },
  {
    name: 'class',
    illustrate: '自定义节点类名',
    type: 'String | Function(data, node)',
  },
];

// methodsData
const methodsData = [
  {
    name: 'filter',
    illustrate: '过滤所有树节点，过滤后的节点将被隐藏',
    value:
      '<code>(value:string)</code>，指定为 <code>filter-node-method</code> 属性的第一个参数',
  },
  {
    name: 'updateKeyChildren',
    illustrate:
      '为节点设置新数据，只有当设置 <code>node-key</code> 属性的时候才可用',
    value:
      '<code>(key:TreeKey, data: TreeData)</code> 接收两个参数: 1. 节点的 key 2. 需要设置的新数据',
  },
  {
    name: 'getCheckedNodes',
    illustrate:
      '<code>show-checkbox</code> 为 <code>true</code>时，节点被选中，将返回当前选中节点的数组',
    value:
      '<code>(leafOnly: boolean, includeHalfChecked: boolean) </code>，1. 为 <code>true</code> 时将返回当前选中节点的子节点 2.为 <code>true</code> 时返回值包含半选中节点数据',
  },
  {
    name: 'getCheckedKeys',
    illustrate:
      '<code>show-checkbox</code> 为 <code>true</code>时，节点被选中，将返回当前选中节点 <code>key</code> 的数组',
    value:
      '<code>(leafOnly: boolean) </code>，1.为 <code>true</code> 时将返回当前选中节点的子节点',
  },
  {
    name: 'setCheckedNodes',
    illustrate:
      '通过 <code>Node</code> 节点数据设置复选框勾选的节点，使用此方法必须提前设置 <code>node-key</code> 属性',
    value:
      '<code>(nodes: Node[], leafOnly?: boolean) </code>，1.要选中的节点构成的数组 2.<code>true</code>时只返回当前选择的子节点数组',
  },
  {
    name: 'setCheckedKeys',
    illustrate:
      '通过 <code>key</code> 数组设置复选框勾选的节点，使用此方法必须设置 <code>node-key</code> 属性',
    value:
      '<code>(keys: TreeKey[], leafOnly?: boolean)</code>，1. 一个需要被选中的多节点 <code>key</code> 的数组 2. <code>true</code>时只返回当前选择的子节点数组',
  },
  {
    name: 'setChecked',
    illustrate:
      '设置节点是否被选中, 使用此方法必须设置 <code>node-key</code> 属性',
    value:
      '<code>(key/data: TreeKey | TreeNodeData, checked: boolean, deep: boolean)</code> 1. 要选中的节点的 <code>key</code> 或者数据 2. 是否选中. 3. 是否递归选中子节点',
  },
  {
    name: 'getHalfCheckedNodes',
    illustrate:
      '<code>show-checkbox</code> 为 <code>true</code> 时返回当前半选中的节点组成的数组',
    value: 'TreeNodeData[]',
  },
  {
    name: 'getHalfCheckedKeys',
    illustrate:
      '<code>show-checkbox</code> 为 <code>true</code> 时返回当前半选中的节点的 <code>key</code> 所组成的数组',
    value: 'TreeNodeData[]',
  },
  {
    name: 'getCurrentKey',
    illustrate:
      '返回当前被选中节点的数据 <code>key</code>，没有数据则返回 <code>null</code>',
    value: '(number | string) || null',
  },
  {
    name: 'getCurrentNode',
    illustrate: '返回当前被选中节点的数据，没有数据则返回 <code>null</code>',
    value: 'Node || null',
  },
  {
    name: 'setCurrentKey',
    illustrate:
      '通过 <code>key</code> 设置某个节点当前复选框选中状态，使用此方法必须设置 <code>node-key</code> 属性',
    value:
      '<code>(key: TreeKey, shouldAutoExpandParent = true)</code> 1. 需要选中节点的 <code>key</code>， 为 <code>null</code> 则取消当前选中的节点 2. 是否自动展开父节点',
  },
  {
    name: 'setCurrentNode',
    illustrate:
      '设置某个节点当前复选框选中状态，使用此方法必须设置 <code>node-key</code> 属性',
    value:
      '<code>(node: Node, shouldAutoExpandParent = true)</code> 1. 需要选中的节点 则取消当前选中的节点 2. 是否自动展开父节点',
  },
  {
    name: 'getNode',
    illustrate:
      '根据 <code>data</code> 或者 <code>key</code> 获取 <code>ivue-tree</code> 中的 <code>node</code>',
    value:
      '<code>(data: TreeKey | TreeNodeData)</code> 节点的 <code>data</code> 或 <code>key</code>',
  },
  {
    name: 'remove',
    illustrate:
      '删除 <code>ivue-tree</code> 中的一个节点，使用此方法必须设置 <code>node-key</code> 属性',
    value:
      '<code>(data: TreeNodeData | Node)</code> 要删除的节点的 <code>data</code> 或者 <code>node</code> 对象',
  },
  {
    name: 'append',
    illustrate: '为 <code>ivue-tree</code> 中的一个节点追加一个子节点',
    value:
      '<code>(data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node)</code> 1. 要追加的子节点的 <code>data</code> 2. 父节点的 (<code>data</code> | <code>key</code> | <code>node</code>)',
  },
  {
    name: 'insertBefore',
    illustrate: '在给定节点前插入一个节点',
    value:
      '<code>(data: TreeNodeData, refNode: TreeKey | TreeNodeData)</code> 1. 要增加的节点的 <code>data</code> 2. 给定节点的 <code>(data | key)</code>',
  },
  {
    name: 'insertAfter',
    illustrate: '在给定节点后插入一个节点',
    value:
      '<code>(data: TreeNodeData, refNode: TreeKey | TreeNodeData)</code> 1. 要增加的节点的 <code>data</code> 2. 给定节点的 <code>(data | key)</code>',
  },
];

// eventsData
const eventsData = [
  {
    name: 'on-node-click',
    illustrate: '当节点被点击的时候触发',
    value:
      '<code>(node.data,node,instance,event)</code>，分别对应 1. 点击节点的数据对象 2. <code>TreeNode</code> 的 <code>node</code> 属性 3. 节点组件本身 4. <code>TreeNode</code> 和事件对象',
  },
  {
    name: 'on-current-change',
    illustrate: '当前选中节点变化时触发的事件',
    value:
      '<code>(data || null, currentNode)</code>，分别对应 (1. 当前节点的数据 2. 当前节点的 <code>Node</code> 对象)',
  },
  {
    name: 'on-node-collapse',
    illustrate: '节点被关闭时触发的事件',
    value:
      '<code>(data,node,instance)</code>，分别对应 (1. 传递给 <code>data</code> 属性的数组中该节点所对应的对象 2. 节点对应的 <code>Node</code> 3. 节点组件本身)',
  },
  {
    name: 'on-node-expand',
    illustrate: '节点被展开时触发的事件',
    value:
      '<code>(data,node,instance)</code>，分别对应 (1. 传递给 <code>data</code> 属性的数组中该节点所对应的对象 2. 节点对应的 <code>Node</code> 3. 节点组件本身)',
  },
  {
    name: 'on-check',
    illustrate: '点击复选框之后触发',
    value:
      '<code>(data,{checkedNodes,checkedKeys,halfCheckedNodes,halfCheckedKeys})</code>，分别对应 (1. 传递给 <code>data</code> 属性的数组中该节点所对应的对象 2. 目前的选中状态对象，包含 <code>checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys</code> 四个属性)',
  },
  {
    name: 'on-check-change',
    illustrate: '当复选框被点击的时候触发',
    value:
      '<code>(data,checked,indeterminate)</code>，分别对应 (1. 传递给 <code>data</code> 属性的数组中该节点所对应的对象 2. 节点本身是否被选中 3. 节点的子树中是否有半选中状态)',
  },
  {
    name: 'on-node-drag-start',
    illustrate: '节点开始拖拽时触发的事件',
    value:
      '<code>(node,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. <code>event</code>)',
  },
  {
    name: 'on-node-drag-leave',
    illustrate: '节点开始拖拽时触发的事件',
    value:
      '<code>(node,oldNode,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. 当前离开节点对应的 <code>Node</code> 3. <code>event</code>)',
  },
  {
    name: 'on-node-drag-enter',
    illustrate: '拖拽进入其他节点时触发的事件',
    value:
      '<code>(draggingStartNode,dropNode,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. 当前进入节点对应的 <code>Node</code> 3. <code>event</code>)',
  },
  {
    name: 'on-node-drag-over',
    illustrate: '在拖拽节点时触发的事件',
    value:
      '<code>(draggingStartNode,dropNode,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. 当前进入节点对应的 <code>Node</code> 3. <code>event</code>)',
  },
  {
    name: 'on-node-drag-end',
    illustrate: '拖拽结束时（可能未成功）触发的事件',
    value:
      '<code>(draggingStartNode,dropNode,dropType,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. 结束拖拽时最后进入的节点(可能为空) 3. 被拖拽节点的放置位置<code>(before、after、inner)</code> 4. <code>event</code>)',
  },
  {
    name: 'on-node-drop',
    illustrate: '拖拽成功完成时触发的事件',
    value:
      '<code>(draggingStartNode,dropNode,dropType,event)</code>，分别对应 (1. 被拖拽节点对应的 <code>Node</code> 2. 结束拖拽时最后进入的节点(可能为空) 3. 被拖拽节点的放置位置<code>(before、after、inner)</code> 4. <code>event</code>)',
  },
];

const slotsData = ref([
  {
    name: 'default',
    illustrate: '自定义树节点的内容',
    value: '{ node (当前节点), data (节点数据对象) }',
  },
]);
</script>

<style lang="scss" scoped></style>
