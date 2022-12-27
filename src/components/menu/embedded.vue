<template>
    <ivue-menu :open-names="['源静香','野比大雄']">
        <ivue-menu-item name="哆啦A梦">哆啦A梦</ivue-menu-item>
        <ivue-submenu name="源静香">
            <template #title>源静香</template>
            <ivue-menu-group title="技能">
                <ivue-menu-item name="小提琴">小提琴</ivue-menu-item>
                <ivue-menu-item name="钢琴">钢琴</ivue-menu-item>

                <ivue-submenu name="野比大雄">
                    <template #title>野比大雄</template>
                    <ivue-menu-group title="技能">
                        <ivue-menu-item name="射击">射击</ivue-menu-item>
                        <ivue-menu-item name="翻花绳">翻花绳</ivue-menu-item>
                        <ivue-menu-item name="快速入睡">快速入睡</ivue-menu-item>
                    </ivue-menu-group>
                </ivue-submenu>
            </ivue-menu-group>
        </ivue-submenu>
    </ivue-menu>
</template>
