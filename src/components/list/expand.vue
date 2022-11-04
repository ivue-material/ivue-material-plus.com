<template>
    <div>
        <ivue-list ivue-expand-single>
            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>

            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>

            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>
        </ivue-list>
    </div>
</template>
