<template>
    <div>
        <h1>Elevation 海拔</h1>
        <p>
            阴影提供有关物体深度和方向运动的重要视觉线索。它们是唯一的视觉提示，表明表面之间的分离量。
            <code>Elevation</code> 确定其阴影的外观。
            <code>Elevation</code>值在
            <code>“Z-空间”</code>和范围映射出
            <code>0</code>到
            <code>24</code>的深度。你可以在
            <code>class</code> 里面引入
            <code>ivue-elevation-[size]</code> 设置显示的深度。
        </p>
        <h2>首先引入CSS</h2>
        <pre-code>{{ code.import }}</pre-code>
        <h2>基本用法</h2>
        <p>基本用法，最简单的显示。</p>
        <doc-markdown :code="code.default">
            <template #demo>
                <default></default>
            </template>
        </doc-markdown>
        <h2>API</h2>
        <h3>Class</h3>
        <ivue-table :data="propsData" border>
            <ivue-table-column prop="name" label="名称"></ivue-table-column>
            <ivue-table-column prop="illustrate" label="说明">
                <template #default="props">
                    <p v-html="props.row.illustrate"></p>
                </template>
            </ivue-table-column>
        </ivue-table>
    </div>
</template>

<script>
import Code from '@/code/elevation';
import Default from '@/components/elevation/default';

export default {
    data() {
        return {
            code: Code,
            propsData: [
                {
                    name: 'ivue-elevation-[size]',
                    illustrate:
                        '向目标元素添加深度 ,大小可以是<code>0</code>到<code>24</code>.例如: <code>ivue-elevation-4</code>',
                },
            ],
        };
    },
    components: {
        Default,
    },
};
</script>

<style lang="scss" scoped>
</style>
