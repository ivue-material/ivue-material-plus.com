<template>
    <div class="tables">
        <h1>Table 表格</h1>
        <p>用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作</p>
        <h2>基础表格</h2>
        <p>基础的表格展示用法</p>
        <p>
            <code>ivue-table</code>中添加
            <code>data</code> 对象数组后，
            <code>ivue-table-column</code>中用
            <code>prop</code>
            属性来对应对象中的键名即可填入数据，
            用
            <code>label</code>
            属性来定义表格的列名，
            还可以使用
            <code>width</code>
            属性来定义列宽
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>带斑马纹表格</h2>
        <p>使用带斑马纹的表格，可以更容易区分出不同行的数据</p>
        <p>
            设置
            <code>stripe</code>
            属性可以创建带斑马纹的表格
        </p>
        <doc-markdown :code="code.stripe">
            <template #demo>
                <stripe></stripe>
            </template>
        </doc-markdown>
        <h2>带边框表格</h2>
        <p>
            设置
            <code>border</code> 属性，可使表格带边框
        </p>
        <doc-markdown :code="code.border">
            <template #demo>
                <border></border>
            </template>
        </doc-markdown>
        <h2>带状态表格</h2>
        <p>
            通过指定
            <code>row-class-name</code>
            属性来为
            <code>Table</code> 中的某一行添加
            <code>class</code>， 自定义每一行的样式，
        </p>
        <p>
            <code>row-class-name</code>有
            <code>row(当前行数据)</code>和
            <code>rowIndex(当前行下标)</code>两个返回值
        </p>
        <doc-markdown :code="code.rowClassName">
            <template #demo>
                <row-class-name></row-class-name>
            </template>
        </doc-markdown>
        <h2>固定表头</h2>
        <p>纵向内容过多时，可选择固定表头</p>
        <p>
            只要在
            <code>ivue-table</code>
            中添加
            <code>height</code>
            属性，即可实现固定表头的表格，而不需要额外的代码
        </p>
        <doc-markdown :code="code.height">
            <template #demo>
                <height></height>
            </template>
        </doc-markdown>
        <h2>固定列</h2>
        <p>横向内容过多时，可选择固定列</p>
        <p>
            固定列
            <code>ivue-table-column</code>
            需要设置
            <code>fixed</code>
            属性， 列将被左侧固定. 它还接受传入字符串，
            <code>left</code> 或
            <code>right</code>，表示左边固定还是右边固定
        </p>
        <doc-markdown :code="code.fixed">
            <template #demo>
                <fixed></fixed>
            </template>
        </doc-markdown>
        <h2>固定列和表头</h2>
        <p>当您有大量数据块放入表中，您可以同时固定表头和列。</p>
        <doc-markdown :code="code.fixedHeight">
            <template #demo>
                <fixed-height></fixed-height>
            </template>
        </doc-markdown>
        <h2>流体高度</h2>
        <p>
            设置
            <code>max-height</code> 属性为
            <code>ivue-table</code> 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示滚动条
        </p>
        <doc-markdown :code="code.maxHeight">
            <template #demo>
                <max-height></max-height>
            </template>
        </doc-markdown>
        <h2>多级表头</h2>
        <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系，</p>
        <p>
            <code>ivue-table-column</code>可以相互嵌套，用于实现表头组
        </p>
        <doc-markdown :code="code.multistage">
            <template #demo>
                <multistage></multistage>
            </template>
        </doc-markdown>
        <h2>单选</h2>
        <p>
            通过设置
            <code>highlight-current-row</code>属性即可实现单选
        </p>
        <p>
            监听
            <code>on-current-change</code>
            事件，当表格的当前行发生变化的时候会触发，返回
            <code>(currentRow,oldCurrentRow)</code>两个值，如果需要显示索引，
            可以增加一列
            <code>ivue-table-column</code>，设置
            <code>type</code> 属性为
            <code>index</code> 即可显示从
            <code>1</code> 开始的索引号
        </p>
        <doc-markdown :code="code.highlightCurrentRow">
            <template #demo>
                <highlight-current-row></highlight-current-row>
            </template>
        </doc-markdown>
        <h2>多选</h2>
        <p>
            <code>ivue-table-column</code>
            设置
            <code>type</code>
            为
            <code>selection</code>
            即可显示多选框
        </p>
        <p>
            如果单元格内容过长，会占用多行显示，通过设置
            <code>show-overflow-tooltip</code>属性，内容会在
            <code>hover</code>
            时以
            <code>tooltip</code>
            的形式显示出来
        </p>
        <doc-markdown :code="code.selection">
            <template #demo>
                <selection></selection>
            </template>
        </doc-markdown>
        <h2>排序</h2>
        <p>对表格进行排序，可快速查找或对比数据</p>
        <p>
            <code>ivue-table-column</code>
            中添加
            <code>sortable</code>属性可实现以该列为基准的排序，
        </p>
        <p>
            通过设置
            <code>ivue-table</code>的
            <code>default-sort</code>属性设置默认的排序列和排序顺序
        </p>
        <p>
            可以使用
            <code>sort-method</code>
            或者
            <code>sort-by</code>自定义的排序规则
        </p>
        <p>
            如果需要后端排序，需将
            <code>sortable</code>
            设置为
            <code>custom</code>
            ，同时在
            <code>ivue-table</code>
            上监听
            <code>on-sort-change</code>
            事件，在事件回调中可以获取当前排序的字段名和排序顺序，
            会传入1个对象：
            <code>({column,prop,order})</code>
        </p>
        <p>
            还可以使用
            <code>formatter</code>
            属性，格式化指定列的值，接受一个
            <code>Function</code>
            会传入4个参数：
            <code>(row, column, value, $index)</code>， 可以根据自己的需求进行处理
        </p>
        <doc-markdown :code="code.sortable">
            <template #demo>
                <sortable></sortable>
            </template>
        </doc-markdown>
        <h2>筛选</h2>
        <p>对表格进行筛选，可快速查找到自己想看的数据</p>
        <p>
            <code>ivue-table-column</code>
            中设置
            <code>filters</code>
            和
            <code>filter-method</code>
            属性即可开启该列的筛选
        </p>
        <p>
            <code>filters</code>
            是一个数组，
            <code>filter-method</code>
            是一个方法，用于决定某些数据是否显示，传入三个参数：
            <code>value</code>，
            <code>row</code>，
            <code>column</code>
        </p>
        <p>
            另外还可以通过外部调用
            <code>clearFilter</code>方法，清除过滤，清除指定列前必须先设置
            <code>column-key</code>
        </p>
        <doc-markdown :code="code.filters">
            <template #demo>
                <filters></filters>
            </template>
        </doc-markdown>
        <h2>自定义列模板</h2>
        <p>自定义列的显示内容，可组合其他组件使用</p>
        <p>
            通过
            <code>slot</code> 可以获取到
            <code>row</code>,
            <code>column</code>,
            <code>$index</code> 和
            <code>store（table 内部的状态管理）</code>的数据，用法参考例子
        </p>
        <doc-markdown :code="code.slotsColumn">
            <template #demo>
                <slots-column></slots-column>
            </template>
        </doc-markdown>
        <h2>自定义表头</h2>
        <p>表头支持自定义</p>
        <p>
            通过设置
            <code>slot</code>
            <code>header</code>
            来自定义表头
        </p>
        <doc-markdown :code="code.slotsHeader">
            <template #demo>
                <slots-header></slots-header>
            </template>
        </doc-markdown>
        <h2>展开行</h2>
        <p>
            当行内容过多并且不想显示横向滚动条时，可以使用
            <code>ivue-table</code>
            展开行功能
        </p>
        <p>
            通过设置
            <code>ivue-table-column</code>
            的
            <code>type="expand"</code>和
            <code>slot</code>
            即可开启展开行功能
        </p>
        <doc-markdown :code="code.expand">
            <template #demo>
                <expand></expand>
            </template>
        </doc-markdown>
        <h2>树形数据与懒加载</h2>
        <p>支持树类型的数据的显示</p>
        <p>
            当
            <code>row</code>
            中包含
            <code>children</code>
            字段时，被视为树形数据，
            渲染嵌套数据需要设置
            <code>ivue-table</code>
            <code>prop</code>
            的
            <code>row-key</code>
        </p>
        <p>
            子行数据可以异步加载通过设置
            <code>ivue-table</code>
            的
            <code>lazy</code>
            属性为
            <code>true</code>
            与加载函数
            <code>load</code>
        </p>
        <p>
            通过添加
            <code>data</code>数据
            中的
            <code>hasChildren</code>
            字段来指定哪些行是包含子节点
        </p>
        <p>
            可以通过
            <code>tree-props</code>
            自定义渲染嵌套数据的配置选项，默认为
            <code>children</code>
            和
            <code>hasChildren</code>
        </p>
        <doc-markdown :code="code.tree">
            <template #demo>
                <tree></tree>
            </template>
        </doc-markdown>
        <h2>表尾合计行</h2>
        <p>表格展示的是各类数字，可以在表尾显示各列的合计</p>
        <p>
            设置
            <code>ivue-table</code>的
            <code>show-summary</code>
            为
            <code>true</code>
            在表格尾部展示合计行，默认情况下，对于合计行，第一列不进行数据求合操作，而是显示
            <code>「合计」</code>
            二字（可通过
            <code>sum-text</code>
            配置），其余列会将本列所有数值进行求合操作，并显示出来
        </p>
        <p>
            通过设置
            <code>summary-method</code>传入一个方法，自定义合计逻辑，该函数返回两个参数
            <code>(columns,data)</code>
            当前列数据 和 data数据，最后返回一个数组，这个数组中的各项就会显示在合计行的各列中
        </p>
        <doc-markdown :code="code.showSummary">
            <template #demo>
                <show-summary></show-summary>
            </template>
        </doc-markdown>
        <h2>合并行或列</h2>
        <p>多行或多列共用一个数据时，可以合并行或列</p>
        <p>
            给
            <code>ivue-table</code>
            传入
            <code>span-method</code>
            方法可以实现合并行或列，方法的参数是一个对象，
            里面包含当前行
            <code>row(当前列)</code> 、
            <code>column(当前列)</code>、
            <code>rowIndex(当前行号)</code>、
            <code>columnIndex(当前列号)</code> 四个属性
        </p>
        <p>
            该函数可以返回一个包含两个元素的数组，第一个元素代表
            <code>rowspan(合并多少行)</code>，第二个元素代表
            <code>colspan(合并多少列)</code>
            ，也可以返回一个键名为
            <code>rowspan(合并多少行)</code> 和
            <code>colspan(合并多少列)</code> 的对象。
        </p>
        <doc-markdown :code="code.spanMethod">
            <template #demo>
                <span-method></span-method>
            </template>
        </doc-markdown>
        <h2>自定义索引</h2>
        <p>
            给
            <code>ivue-table-column</code>
            设置
            <code>type=index</code>
            可以显示索引,
            当设置
            <code>index</code>
            属性时，可以自定义索引，该属性传入数字时，将作为索引的起始值，
            也可以传入一个方法，它提供当前行的行号（从
            <code>0</code> 开始）作为参数，返回值将作为索引展示
        </p>
        <doc-markdown :code="code.index">
            <template #demo>
                <index></index>
            </template>
        </doc-markdown>
        <h2>自定义样式</h2>
        <p>
            给
            <code>ivue-table</code>
            设置样式
        </p>
        <ul class="ul">
            <li class="li">
                <p>
                    设置
                    <code>row-style</code>
                    或者
                    <code>row-class-name</code>
                    属性可定义每行的样式，该函数引入一个对象
                    <code>{row(每行的数据), rowIndex(每行的索引)}</code>
                </p>
            </li>
            <li class="li">
                <p>
                    设置
                    <code>header-cell-style</code>或者
                    <code>header-cell-class-name</code>
                    属性可定义每列的样式，该函数引入一个对象
                    <code>{rowIndex(每行的索引), columnIndex(每列的索引),row(每行数据),column(每列数据)}</code>
                </p>
            </li>
            <li class="li">
                <p>
                    设置
                    <code>header-row-style</code>
                    或者
                    <code>header-row-class-name</code>
                    属性可定义每一个表头的样式，该函数引入一个对象
                    <code>{rowIndex(每行的索引)}</code>
                </p>
            </li>
            <li class="li">
                <p>
                    设置
                    <code>cell-style</code>
                    或者
                    <code>cell-class-name</code>
                    属性可定义每一个单元格的样式，该函数引入一个对象
                    <code>{rowIndex(每行的索引), columnIndex(每列的索引),row(每行数据),column(每列数据)}</code>
                </p>
            </li>
        </ul>
        <doc-markdown :code="code.styles">
            <template #demo>
                <styles></styles>
            </template>
        </doc-markdown>
        <h2>表格布局</h2>
        <p>
            设置
            <code>ivue-table</code>的
            <code>table-layout</code>
            属性可以指定表格中单元格、行和列的布局方式
        </p>
        <doc-markdown :code="code.tableLayout">
            <template #demo>
                <table-layout></table-layout>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Table Props</h3>
        <ivue-table :data="tablePropsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Table Events</h3>
        <ivue-table :data="tableEventsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Table Slots</h3>
        <ivue-table :data="tableSlotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="200"></ivue-table-column>
        </ivue-table>
        <h2>API</h2>
        <h3>Table Column Props</h3>
        <ivue-table :data="tableColumnPropsData" border>
            <ivue-table-column prop="name" label="名称" width="150"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明" min-width="300">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="250">
                <template #default="props">
                    <p v-html="props.row.value || '-'"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="150"></ivue-table-column>
        </ivue-table>
        <h3>Table Column Slots</h3>
        <ivue-table :data="tableColumnSlotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="200"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Code from '@/code/table';

import Default from '@/components/table/default.vue';
import Stripe from '@/components/table/stripe.vue';
import Border from '@/components/table/border.vue';
import RowClassName from '@/components/table/row-class-name.vue';
import Height from '@/components/table/height.vue';
import Fixed from '@/components/table/fixed.vue';
import FixedHeight from '@/components/table/fixed-height.vue';
import MaxHeight from '@/components/table/max-height.vue';
import Multistage from '@/components/table/multistage.vue';
import HighlightCurrentRow from '@/components/table/highlight-current-row.vue';
import Selection from '@/components/table/selection.vue';
import Sortable from '@/components/table/sortable.vue';
import Filters from '@/components/table/filters.vue';
import SlotsColumn from '@/components/table/slots-column.vue';
import SlotsHeader from '@/components/table/slots-header.vue';
import Expand from '@/components/table/expand.vue';
import Tree from '@/components/table/tree.vue';
import ShowSummary from '@/components/table/show-summary.vue';
import SpanMethod from '@/components/table/span-method.vue';
import Index from '@/components/table/index.vue';
import Styles from '@/components/table/styles.vue';
import TableLayout from '@/components/table/table-layout.vue';

const code = ref(Code);

// tablePropsData
const tablePropsData = ref([
    {
        name: 'data',
        illustrate: '显示的数据',
        type: 'Array',
        default: '-',
    },
    {
        name: 'tooltip-stop',
        illustrate: 'tooltip点击阻止当前事件在捕获和冒泡阶段的进一步传播',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'fit',
        illustrate: '列的宽度是否自撑开',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'border',
        illustrate: '是否带有纵向边框',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'height',
        illustrate:
            '<code>ivue-table</code> 的高度， 默认为自动高度。 如果 <code>height</code> 为 <code>number</code> 类型，则单位为 <code>px</code>，如果 <code>height</code> 为 <code>string</code> 类型，则这个高度会设置为 <code>ivue-table</code> 的 <code>style</code>，也可以自定义单位，如: <code>10rem</code>，<code>ivue-table</code> 的高度会受控于外部样式',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'max-height',
        illustrate:
            '<code>ivue-table</code> 的最大高度，如果 <code>height</code> 为 <code>number</code> 类型，则单位为 <code>px</code>，也可以自定义单位，如: <code>10rem</code>',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'show-header',
        illustrate: '是否显示表头',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'tree-props',
        illustrate: '渲染嵌套数据的配置选项',
        type: 'Object',
        default: '{ hasChildren: \'hasChildren\', children: \'children\' }',
    },
    {
        name: 'row-key',
        illustrate:
            '行数据的 <code>Key</code>，用来优化 <code>ivue-table</code> 的渲染，在使用 <code>reserve-selection</code> 功能与显示树形数据时，该属性是必填的，类型为 <code>String</code> 时，支持多层访问: <code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>',
        type: 'Function(row) | String',
        default: '-',
    },
    {
        name: 'default-expand-all',
        illustrate:
            '是否默认展开所有行，当 <code>ivue-table</code> 包含展开行存在或者为树形表格时有效',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'select-on-indeterminate',
        illustrate:
            '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为，若为 <code>true</code>，则选中所有行；若为 <code>false</code>，则取消选择所有行',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'indent',
        illustrate: '展示树形数据时，树节点的缩进间隔',
        type: 'Number',
        default: '16',
    },
    {
        name: 'lazy',
        illustrate: '是否懒加载子节点数据',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'show-summary',
        illustrate: '是否在表尾显示合计行',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'table-layout',
        illustrate: '设置表格单元、行和列的布局方式',
        type: 'String',
        value: '<code>fixed</code> | <code>auto</code>',
        default: 'fixed',
    },
    {
        name: 'default-sort',
        illustrate:
            '默认的排序列的 <code>prop</code> 和顺序。 它的 <code>prop</code> 属性指定默认的排序的列，<code>order</code> 指定默认排序的顺序',
        type: 'Object',
        value: '{prop: \'-\', order: \'ascending\' \'descending\'}',
        default: '如果 prop 已配置, 同时 order 未配置, 那么 order 默认为升序',
    },
    {
        name: 'placeholder',
        illustrate:
            '空数据时显示的文本内容， 也可以通过 <code>slots</code> 的 <code>#placeholder</code> 设置',
        type: 'String',
        default: 'No Data',
    },
    {
        name: 'scrollbar-always',
        illustrate: '总是显示滚动条',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'stripe',
        illustrate: '<code>ivue-table</code>是否为斑马纹',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'highlight-current-row',
        illustrate: '是否要高亮当前行',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'expand-row-keys',
        illustrate:
            '可以通过该属性设置 <code>ivue-table</code> 目前的展开行，需要设置 <code>row-key</code> 属性才能使用，该属性为展开行的 <code>keys</code> 数组',
        type: 'Array',
        default: '-',
    },
    {
        name: 'load',
        illustrate:
            '加载子节点数据的函数，<code>lazy</code> 为 <code>true</code> 时生效，函数第二个参数包含了节点的层级信息',
        type: 'Function(row, treeNode, resolve)',
        default: '-',
    },
    {
        name: 'sum-text',
        illustrate: '合计行第一列的文本',
        type: 'String',
        default: '合计',
    },
    {
        name: 'summary-method',
        illustrate: '自定义的合计计算方法',
        type: 'Function({ columns, data })',
        default: '-',
    },
    {
        name: 'span-method',
        illustrate: '合并行或列的计算方法',
        type: 'Function({ row, rowIndex, column, columnIndex })',
        default: '-',
    },
    {
        name: 'tooltip-theme',
        illustrate: 'tooltip主题颜色',
        type: 'String',
        value: 'dark | light',
        default: 'dark',
    },

    {
        name: 'row-class-name',
        illustrate:
            '行的 <code>className</code> 的回调方法，也可以使用字符串为所有行设置一个固定的 <code>className</code>',
        type: 'Function({ row, rowIndex }) | String',
        default: '-',
    },
    {
        name: 'row-Style',
        illustrate:
            '行的 <code>style</code> 的回调方法，也可以使用一个固定的 <code>Object</code> 为所有行设置一样的 <code>Style</code>',
        type: 'Function({ row, rowIndex }) | Object',
        default: '-',
    },
    {
        name: 'header-cell-style',
        illustrate:
            '表头单元格的 <code>style</code> 的回调方法，也可以使用一个固定的 <code>Object</code> 为所有表头单元格设置一样的 <code>Style</code>',
        type: 'Function({ row, rowIndex, column, columnIndex }) | Object',
        default: '-',
    },
    {
        name: 'header-cell-class-name',
        illustrate:
            '表头单元格的 <code>className</code> 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 <code>className</code>',
        type: 'Function({ row, rowIndex, column, columnIndex }) | String',
        default: '-',
    },
    {
        name: 'header-row-style',
        illustrate:
            '表头行的 <code>style</code> 的回调方法，也可以使用一个固定的 <code>Object</code> 为所有表头行设置一样的 <code>Style</code>',
        type: 'Function({ row, rowIndex }) | Object',
        default: '-',
    },
    {
        name: 'header-row-class-name',
        illustrate:
            '表头行的 <code>className</code> 的回调方法，也可以使用字符串为所有表头行设置一个固定的 <code>className</code>',
        type: 'Function({ row, rowIndex }) | String',
        default: '-',
    },
    {
        name: 'cell-style',
        illustrate:
            '单元格的 <code>style</code> 的回调方法，也可以使用一个固定的 <code>Object</code> 为所有单元格设置一样的 <code>Style</code>',
        type: 'Function({ row, rowIndex, column, columnIndex }) | Object',
        default: '-',
    },
    {
        name: 'cell-class-name',
        illustrate:
            '单元格的 <code>className</code> 的回调方法，也可以使用字符串为所有单元格设置一个固定的 <code>className</code>',
        type: 'Function({ row, rowIndex, column, columnIndex }) | String',
        default: '-',
    },
]);

// tableEventsData
const tableEventsData = ref([
    {
        name: 'on-cell-mouse-enter',
        illustrate: '当单元格 <code>hover</code> 进入时会触发该事件',
        value: 'row, column, cell, event',
    },
    {
        name: 'on-cell-mouse-leave',
        illustrate: '当单元格 <code>hover</code> 退出时会触发该事件',
        value: 'row, column, cell, event',
    },
    {
        name: 'on-selection-change',
        illustrate: '当选择项发生变化时会触发该事件',
        value: 'selection',
    },
    {
        name: 'on-select-all',
        illustrate: '当用户手动勾选全选 <code>checkbox</code> 时触发的事件',
        value: 'selection',
    },
    {
        name: 'on-select',
        illustrate: '当用户手动勾选数据行的 <code>checkbox</code> 时触发的事件',
        value: 'selection, row',
    },
    {
        name: 'on-current-change',
        illustrate:
            '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 <code>highlight-current-row</code> 属性',
        value: 'currentRow, oldCurrentRow',
    },
    {
        name: 'on-header-click',
        illustrate: '当某一列的表头被点击时会触发该事件',
        value: 'column, event',
    },
    {
        name: 'on-sort-change',
        illustrate: '当表格的排序条件发生变化的时候会触发该事件',
        value: '{ column, prop, order }',
    },
    {
        name: 'on-filter-change',
        illustrate:
            '<code>column</code> 的 <code>key</code>， 如果需要使用 <code>on-filter-change</code> 事件，则需要此属性标识是哪个 <code>column</code> 的筛选条件',
        value: 'filters',
    },
    {
        name: 'on-header-dragend',
        illustrate: '当拖动表头改变了列的宽度的时候会触发该事件',
        value: 'newWidth, oldWidth, column, event',
    },
    {
        name: 'on-expand-change',
        illustrate:
            '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 <code>expandedRows</code>，树形表格时第二参数为 <code>expanded</code>）',
        value: 'row, (expandedRows | expanded)',
    },
    {
        name: 'on-cell-click',
        illustrate: '当某个单元格被点击时会触发该事件',
        value: 'row, column, cell, event',
    },
    {
        name: 'on-row-click',
        illustrate: '当某一行被点击时会触发该事件',
        value: 'row, column, event',
    },
]);

// tableSlotsData
const tableSlotsData = ref([
    {
        name: 'default',
        illustrate: '自定义默认内容',
        value: 'ivue-table-column',
    },
    {
        name: 'placeholder',
        illustrate: '当数据为空时自定义的内容',
        value: '-',
    },
]);

// tableColumnPropsData
const tableColumnPropsData = ref([
    {
        name: 'type',
        illustrate:
            '对应列的类型。 如果设置了 <code>selection</code> 则显示多选框， 如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）， 如果设置了 <code>expand</code> 则显示为一个可展开的按钮',
        type: 'String',
        value: '<code>selection</code> | <code>index</code> | <code>expand</code>',
        default: '-',
    },
    {
        name: 'prop',
        illustrate:
            '字段名称对应列内容的字段名， 也可以使用 <code>property</code> 属性',
        type: 'String',
        default: '-',
    },
    {
        name: 'label',
        illustrate: '显示的标题',
        type: 'String',
        default: '-',
    },
    {
        name: 'width',
        illustrate: '对应列的宽度',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'min-width',
        illustrate:
            '对应列的最小宽度， 对应列的最小宽度， 与 <code>width</code> 的区别是 <code>width</code> 是固定的，<code>min-width</code> 会把剩余宽度按比例分配给设置了 <code>min-width</code> 的列',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'sortable',
        illustrate:
            '对应列是否可以排序， 如果设置为 <code>\'custom\'</code>，则代表用户希望远程排序，需要监听 <code>ivue-table</code> 的 <code>on-sort-change</code> 事件',
        type: 'String | Number',
        default: '-',
    },
    {
        name: 'property',
        illustrate: '字段名称对应列内容的字段名',
        type: 'String',
        default: '-',
    },
    {
        name: 'align',
        illustrate: '对齐方式',
        type: 'String',
        value: '<code>left</code> | <code>center</code> | <code>right</code>',
        default: 'left',
    },
    {
        name: 'header-align',
        illustrate: '表头对齐方式， 若不设置该项，则使用表格的对齐方式',
        type: 'String',
        value: '<code>left</code> | <code>center</code> | <code>right</code>',
        default: '-',
    },
    {
        name: 'show-overflow-tooltip',
        illustrate: '当内容过长被隐藏时显示 <code>tooltip</code>',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'filters',
        illustrate:
            '数据过滤的选项， 数组格式，数组中的元素需要有 <code>text</code> 和 <code>value</code> 属性。 数组中的每个元素都需要有 <code>text</code> 和 <code>value</code> 属性',
        type: 'Array<{text: string, value: string}>',
        default: '-',
    },
    {
        name: 'filter-method',
        illustrate:
            '数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示',
        type: 'Function(value, row, column)',
        default: '-',
    },
    {
        name: 'filter-placement',
        illustrate: '过滤弹出框的定位',
        type: 'String',
        value: '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code> | <code>left</code> | <code>left-start</code> | <code>left-end</code> | <code>right</code> | <code>right-start</code> | <code>right-end</code>',
        default: 'bottom-start',
    },
    {
        name: 'index',
        illustrate:
            '如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引',
        type: 'Number | Function(index)',
        default: '-',
    },
    {
        name: 'render-header',
        illustrate:
            '列标题 <code>Label</code> 区域渲染使用的 <code>Function</code>',
        type: 'Function({ column, $index })',
        default: '-',
    },
    {
        name: 'formatter',
        illustrate: '用来格式化内容',
        type: 'Function(row, column, cellValue, index)',
        default: '-',
    },
    {
        name: 'class-name',
        illustrate: '列的 <code>className</code>',
        type: 'String',
        default: '-',
    },
    {
        name: 'fixed',
        illustrate:
            '列是否固定在左侧或者右侧。 <code>true</code> 表示固定在左侧',
        type: 'String | Boolean',
        value: '<code>true</code> | <code>left</code> | <code>right</code>',
        default: '-',
    },
    {
        name: 'label-class-name',
        illustrate: '当前列标题的自定义类名',
        type: 'String',
        default: '-',
    },
    {
        name: 'resizable',
        illustrate:
            '对应列是否可以通过拖动改变宽度（需要在 <code>ivue-table</code> 上设置 <code>border</code> 属性为 true）',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'selectable',
        illustrate:
            '仅对 <code>type=selection</code> 的列有效，类型为 <code>Function</code>，<code>Function</code> 的返回值用来决定这一行的 <code>CheckBox</code> 是否可以勾选',
        type: 'Function(row, index)',
        default: '-',
    },
    {
        name: 'reserve-selection',
        illustrate:
            '保存数据更新前选中的值，仅对 <code>type=selection</code> 的列有效， 请注意， 需指定 <code>row-key</code> 来让这个功能生效',
        type: 'Boolean',
        default: 'false',
    },
    {
        name: 'sort-orders',
        illustrate:
            '数据在排序时所使用排序策略的轮转顺序，仅当 <code>sortable</code> 为 <code>true</code> 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
        type: 'Array',
        value: '数组中的元素需为以下三者之一： <code>ascending</code> 表示升序，<code>descending</code> 表示降序，<code>null</code> 表示还原为原始顺序',
        default: '[\'ascending\', \'descending\', null]',
    },
    {
        name: 'sort-by',
        illustrate:
            '指定数据按照哪个属性进行排序，仅当 <code>sortable</code> 设置为 <code>true</code> 且没有设置 <code>sort-method</code> 的时候有效。 如果 <code>sort-by</code> 为数组，则先按照第 <code>1</code> 个属性排序，如果第 <code>1</code> 个相等，再按照第 <code>2</code> 个排序，以此类推',
        type: 'Function(row, index) | String | Array',
        default: '-',
    },
    {
        name: 'sort-method',
        illustrate:
            '指定数据按照哪个属性进行排序，仅当 <code>sortable</code> 设置为 <code>true</code> 的时候有效。 应该如同 <code>Array.sort</code> 那样返回一个 <code>Number</code>',
        type: 'Function(a, b)',
        default: '-',
    },
    {
        name: 'column-key',
        illustrate:
            '<code>column</code> 的 <code>key</code>， <code>column</code> 的 <code>key</code>， 如果需要使用 <code>on-filter-change</code> 事件，则需要此属性标识是哪个 <code>column</code> 的筛选条件',
        type: 'String',
        default: '-',
    },
    {
        name: 'filter-multiple',
        illustrate: '数据过滤的选项是否多选',
        type: 'Boolean',
        default: 'true',
    },
    {
        name: 'filtered-value',
        illustrate:
            '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性',
        type: 'Array',
        default: '-',
    },
]);

// tableColumnSlotsData
const tableColumnSlotsData = ref([
    {
        name: 'default',
        illustrate: '自定义列的内容',
        value: '{row, column, $index, store}',
    },
    {
        name: 'header',
        illustrate: '自定义表头的内容',
        value: '{ column, $index }',
    },
]);
</script>

<style lang="scss" scoped>
.tables {
    .ul {
        padding-left: 25px;
    }

    .li {
        margin-bottom: 5px;
        line-height: 1.5;
        list-style: circle;
    }
}
</style>
