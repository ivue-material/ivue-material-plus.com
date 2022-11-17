<template>
    <div>
        <h1>Select 选择器</h1>
        <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
        <p>选择器支持单选、多选、搜索，以及键盘快捷操作</p>
        <h2>基础用法</h2>
        <p>
            基本用法。可以使用
            <code>v-model</code> 双向绑定数据。
            单选时,
            <code>value</code> 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据
            <code>ivue-option</code>的
            <code>value</code>来返回选中的数据。
            在展开选择器后，可以使用键盘的
            <code>up</code>和
            <code>down</code>快速上下选择，按下
            <code>Enter</code>选择，按下
            <code>Esc</code>收起选择器。
        </p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>禁用</h2>
        <p>
            通过给
            <code>ivue-select</code>设置属性
            <code>disabled</code>禁用整个选择器
        </p>
        <p>
            通过给
            <code>ivue-option</code>设置属性
            <code>disabled</code>可以禁用当前项
        </p>
        <doc-markdown :code="code.disabled">
            <template #demo>
                <disabled></disabled>
            </template>
        </doc-markdown>
        <h2>可清空</h2>
        <p>
            通过设置属性
            <code>clearable</code>可以清空已选项，仅适用于单选模式
        </p>
        <doc-markdown :code="code.clearable">
            <template #demo>
                <clearable></clearable>
            </template>
        </doc-markdown>
        <h2>分组</h2>
        <p>
            使用
            <code>ivue-option-group</code>可将选项进行分组
        </p>
        <doc-markdown :code="code.group">
            <template #demo>
                <group></group>
            </template>
        </doc-markdown>
        <h2>自定义模板</h2>
        <p>
            对选项内容可以进行自定义。注意在
            <code>ivue-option</code> 中使用
            <code>label</code>属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的
        </p>
        <p>
            对于选项显示内容的逻辑：优先显示
            <code>slot</code> 内容，如果没有定义
            <code>slot</code>，则显示
            <code>label</code>的值
        </p>
        <doc-markdown :code="code.custom">
            <template #demo>
                <custom></custom>
            </template>
        </doc-markdown>
        <h2>多选</h2>
        <p>
            通过设置属性
            <code>multiple</code>可以开启多选模式。多选模式下，
            <code>value</code> 接受数组类型的数据，所返回的也是数组
        </p>
        <doc-markdown :code="code.multiple">
            <template #demo>
                <multiple></multiple>
            </template>
        </doc-markdown>
        <h2>前缀图标</h2>
        <p>
            设置
            <code>prefix</code> 属性或
            <code>slot</code> 可以在
            <code>ivue-select</code> 内显示前缀图标
        </p>
        <doc-markdown :code="code.prefix">
            <template #demo>
                <prefix></prefix>
            </template>
        </doc-markdown>
        <h2>标签集合</h2>
        <p>
            设置属性
            <code>max-tag-count</code> 可指定最多显示的
            <code>tag</code> 数量，超出后折叠
        </p>
        <p>
            设置属性
            <code>max-tag-placeholder</code> 可以自定义
            <code>tag</code> 超出后折叠的显示内容
        </p>
        <doc-markdown :code="code.tag">
            <template #demo>
                <tag></tag>
            </template>
        </doc-markdown>
        <h2>可搜索</h2>
        <doc-markdown :code="code.filterable">
            <template #demo>
                <filterable></filterable>
            </template>
        </doc-markdown>
        <h2>远程搜索</h2>
        <p>
            远程搜索需同时设置
            <code>filterable</code>、
            <code>search-method</code>、
            <code>loading</code> 三个 props，其中
            <code>loading</code> 用于控制是否正在搜索中，
            <code>search-method</code>
            是远程搜索的方法。
        </p>
        <p>
            还可以通过设置
            <code>multiple-filterable-clear</code>
            开启多选过滤收起时清除输入
        </p>
        <p>
            注意：需要给
            <code>ivue-option</code> 设置
            <code>key</code>
        </p>
        <doc-markdown :code="code.search">
            <template #demo>
                <search></search>
            </template>
        </doc-markdown>
        <h2>远程搜索默认值</h2>
        <p>
            通过属性
            <code>default-label</code> 及事件
            <code>@on-set-default-options（仅用于 multiple 模式）</code>，可以为远程搜索设置默认的
            <code>label</code>
        </p>
        <doc-markdown :code="code.defaultLabel">
            <template #demo>
                <default-label></default-label>
            </template>
        </doc-markdown>
        <h2>创建条目</h2>
        <p>
            在
            <code>filterable</code> 模式下，开启属性
            <code>allow-create</code>可以通过在输入框中输入文字来创建新的条目
        </p>
        <p>
            输入新条目后，按下回车键即可新建条目。
            需配合
            <code>@on-create</code> 事件使用
        </p>
        <doc-markdown :code="code.allowCreate">
            <template #demo>
                <allow-create></allow-create>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Select Props</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="value" label="可选值" width="200">
                <template #default="props">
                    <p v-html="props.row.value"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Select Events</h3>
        <ivue-table :data="eventsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="返回值" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Select Methods</h3>
        <ivue-table :data="methodsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="value" label="参数" width="200"></ivue-table-column>
        </ivue-table>
        <h3>Select Slots</h3>
        <ivue-table :data="slotsData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明"></ivue-table-column>
        </ivue-table>
        <h3>Option Props</h3>
        <ivue-table :data="optionData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
        <h3>OptionGroup Props</h3>
        <ivue-table :data="optionGroupData" border>
            <ivue-table-column prop="name" label="名称" width="200"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
            <ivue-table-column prop="type" label="类型" width="200"></ivue-table-column>
            <ivue-table-column prop="default" label="默认" width="200"></ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/select';
import Default from '@/components/select/default.vue';
import Disabled from '@/components/select/disabled.vue';
import Clearable from '@/components/select/clearable.vue';
import Group from '@/components/select/group.vue';
import Custom from '@/components/select/custom.vue';
import Multiple from '@/components/select/multiple.vue';
import Prefix from '@/components/select/prefix.vue';
import Tag from '@/components/select/tag.vue';
import Filterable from '@/components/select/filterable.vue';
import Search from '@/components/select/search.vue';
import DefaultLabel from '@/components/select/default-label.vue';
import AllowCreate from '@/components/select/allow-create.vue';

export default {
    data() {
        return {
            code: Code,
            propsData: [
                {
                    name: 'model-value',
                    illustrate:
                        '指定选中项目的 <code>value</code> 值，可以使用 <code>v-model</code> 双向绑定数据。单选时只接受 <code>String</code> 或 <code>Number</code>，多选时只接受 <code>String | Number | Array</code>',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'placeholder',
                    illustrate: '选择框默认文字',
                    type: 'String',
                    value: '-',
                    default: '请选择',
                },
                {
                    name: 'clearable',
                    illustrate: '是否可以清空选项，只在单选时有效',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'reset-select-icon',
                    illustrate: '清除选择图标',
                    type: 'Boolean',
                    value: '-',
                    default: 'cancel',
                },
                {
                    name: 'multiple',
                    illustrate: '是否支持多选',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'multiple-filterable-clear',
                    illustrate: '是否开启多选过滤收起时清除输入',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'multiple-icon',
                    illustrate: '设置多选删除图标',
                    type: 'String',
                    value: '-',
                    default: 'cancel',
                },
                {
                    name: 'disabled',
                    illustrate: '是否禁用',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'filterable',
                    illustrate: '是否支持过滤',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'filter-query-prop',
                    illustrate:
                        '过滤输入预设值，注意需开启<code>filterable</code>',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'label-and-value',
                    illustrate:
                        '<code>@on-change</code>在返回选项时，是否将 <code>label</code> 和 <code>value</code> 一并返回，默认只返回 <code>value</code>',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'default-label',
                    illustrate:
                        '远程搜索时，显示默认 <code>label</code>，详见示例',
                    type: 'String | Number | Array',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'prefix',
                    illustrate: '在 <code>Select</code> 内显示图标',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'max-tag-count',
                    illustrate: '多选时最多显示多少个 <code>tag</code>',
                    type: 'Number',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'max-tag-placeholder',
                    illustrate:
                        '隐藏 <code>tag</code> 时显示的内容，参数是剩余项数量',
                    type: 'Function',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'allow-create',
                    illustrate:
                        '是否允许用户创建新条目，需开启 <code>filterable</code>',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'allow-create-icon',
                    illustrate: '创建新条目确认按钮图标',
                    type: 'String',
                    value: '-',
                    default: 'reply',
                },
                {
                    name: 'not-find-text',
                    illustrate: '没有找到数据时的提示',
                    type: 'String',
                    value: '-',
                    default: '无匹配数据',
                },
                {
                    name: 'search-method',
                    illustrate: '搜索方法',
                    type: 'Function',
                    value: '-',
                    default: '-',
                },
                {
                    name: 'selected-color',
                    illustrate: '选择选项时的颜色',
                    type: 'String | Array',
                    value: '-',
                    default: '#5B8EFF',
                },
                {
                    name: 'hover-color',
                    illustrate: '<code>hover</code> 选择选项时的颜色',
                    type: 'String | Array',
                    value: '-',
                    default: '#5B8EFF',
                },
                {
                    name: 'capture',
                    illustrate:
                        '是否开启 <code>capture</code> 模式，也可通过全局配置',
                    type: 'Boolean',
                    value: '-',
                    default: 'true',
                },
                {
                    name: 'arrow-down-icon',
                    illustrate: '下拉图标',
                    type: 'String',
                    value: '-',
                    default: 'keyboard_arrow_down',
                },
                {
                    name: 'filterable-hidden-group',
                    illustrate:
                        '开启搜索时，隐藏 <code>option-group</code> 组件头,开启<code>filterable</code>有效',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'loading',
                    illustrate: '开启加载中',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'loading-text',
                    illustrate: '加载中的文字提示',
                    type: 'String',
                    value: '-',
                    default: '加载中',
                },
                {
                    name: 'filter-by-label',
                    illustrate:
                        '在搜索时，是否只按照 label 进行搜索,注意:<code>option</code>必须设置了<code>label</code>选项',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'restore-input-option',
                    illustrate:
                        '是否开启失去焦点还原输入框内容（仅在单选而且开启了过滤时生效）',
                    type: 'Boolean',
                    value: '-',
                    default: 'true',
                },
                {
                    name: 'transfer',
                    illustrate:
                        '是否将弹层放置于 <code>body</code> 内，它将不受父级样式影响，从而达到更好的效果',
                    type: 'Boolean',
                    value: '-',
                    default: 'false',
                },
                {
                    name: 'placement',
                    illustrate: '弹窗的展开方向',
                    type: 'String',
                    value: '<code>top</code> | <code>top-start</code> | <code>top-end</code> | <code>bottom</code> | <code>bottom-start</code> | <code>bottom-end</code>',
                    default: 'bottom-start',
                },
                {
                    name: 'transfer-class-name',
                    illustrate:
                        '开启 <code>transfer</code> 时，给浮层添加额外的 <code>class</code> 名称',
                    type: 'String',
                    value: '-',
                    default: '-',
                },
            ],
            eventsData: [
                {
                    name: 'on-change',
                    illustrate:
                        '选中的 <code>Option</code> 变化时触发，默认返回 <code>value</code>，如需返回 <code>label</code>，详见 <code>label-and-value</code> 属性',
                    value: '当前选中项',
                },
                {
                    name: 'on-clear',
                    illustrate: '点击清空按钮时触发',
                    value: '-',
                },
                {
                    name: 'on-menu-open',
                    illustrate: '下拉框展开或收起时触发',
                    value: 'true/false',
                },
                {
                    name: 'on-filter-query-change',
                    illustrate: '过滤搜索改变时触发',
                    value: 'filterQuery',
                },
                {
                    name: 'on-set-default-options',
                    illustrate:
                        '远程搜索时，显示默认 <code>label</code>, 配合 <code>default-label</code> 使用，详见示例',
                    value: 'options',
                },
                {
                    name: 'on-create',
                    illustrate: '新建条目时触发',
                    value: 'query',
                },
                {
                    name: 'on-select',
                    illustrate: '选择项目时触发',
                    value: '当前选中项',
                },
            ],
            methodsData: [
                {
                    name: 'setQuery',
                    illustrate:
                        '设置搜索词，如果传空则清空，仅在 <code>filterable="true"</code>时有效',
                    value: 'query',
                },
                {
                    name: 'clearSingleSelect',
                    illustrate:
                        '清空单选项,设置<code>clearable</code>将清除所有状态，未设置只清除 <code>value</code>的值',
                    value: '-',
                },
                {
                    name: 'focus',
                    illustrate: '聚焦,开启<code>filterable</code>时有效',
                    value: '-',
                },
            ],
            slotsData: [
                {
                    name: 'prefix',
                    illustrate: '自定义 <code>Select</code> 内头部图标',
                },
            ],
            optionData: [
                {
                    name: 'ripple',
                    illustrate: '是否开启水波纹效果',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    name: 'disabled',
                    illustrate: '是否禁用选项',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    name: 'selected',
                    illustrate: '是否选择当前项',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    name: 'is-focused',
                    illustrate: '是否获取到焦点',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    name: 'label',
                    illustrate:
                        '选项显示的内容，默认会读取 <code>slot</code>，无 <code>slot</code> 时，优先读取该 <code>label</code> 值，无 <code>label</code> 时，读取 <code>value</code>。当选中时，选择器会显示 <code>label</code> 为已选文案。大部分情况不需要配置此项，直接写入 <code>slot</code> 即可，在自定义选项时，该属性非常有用。',
                    type: 'String | Number',
                    default: '-',
                },
                {
                    name: 'value',
                    illustrate: '选项值，默认根据此属性值进行筛选，必填',
                    type: 'String | Number',
                    default: '-',
                },
            ],
            optionGroupData: [
                {
                    name: 'label',
                    illustrate: '分组的组名',
                    type: 'String',
                    default: '-',
                },
                {
                    name: 'disabled',
                    illustrate: '是否禁用当前组',
                    type: 'Boolean',
                    default: 'false',
                },
            ],
        };
    },
    components: {
        Default,
        Disabled,
        Clearable,
        Group,
        Custom,
        Multiple,
        Prefix,
        Tag,
        Filterable,
        Search,
        DefaultLabel,
        AllowCreate,
    },
};
</script>

<style lang="scss" scoped>
</style>
