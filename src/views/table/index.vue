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
            '<code>ivue-table</code> 的高度， 默认为自动高度。 如果 <code>height</code> 为 <code>number</code> 类型，则单位为 <code>px</code>；如果 <code>height</code> 为 <code>string</code> 类型，则这个高度会设置为 <code>ivue-table</code> 的 <code>style</code>，也可以自定义单位，如: <code>10rem</code>，<code>ivue-table</code> 的高度会受控于外部样式',
        type: 'Boolean',
        default: 'false',
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
