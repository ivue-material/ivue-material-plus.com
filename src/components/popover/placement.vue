<template>
    <div class="popover-wrapper">
        <div>
            <ivue-popover class="popover" content="Top Left text" placement="top-start">
                <ivue-button>Top Left</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Top Center text" placement="top">
                <ivue-button>Top Center</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Top Right text" placement="top-end">
                <ivue-button>Top Right</ivue-button>
            </ivue-popover>
        </div>

        <div class="popover-flex">
            <div class="popover-left">
                <ivue-popover class="popover" content="Left Right text" placement="left-start">
                    <ivue-button>Left Top</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Left Center text" placement="left">
                    <ivue-button>Left Center</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Left Bottom text" placement="left-end">
                    <ivue-button>Left Bottom</ivue-button>
                </ivue-popover>
            </div>

            <div class="popover-left">
                <ivue-popover class="popover" content="Right Top text" placement="right-start">
                    <ivue-button>Right Top</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Right Center text" placement="right">
                    <ivue-button>Right Center</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Right Bottom text" placement="right-end">
                    <ivue-button>Right Bottom</ivue-button>
                </ivue-popover>
            </div>
        </div>

        <div>
            <ivue-popover class="popover" content="Bottom Left text" placement="bottom-start">
                <ivue-button>Bottom Left</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Bottom Center text" placement="bottom">
                <ivue-button>Bottom Center</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Bottom Right text" placement="bottom-end">
                <ivue-button>Bottom Right</ivue-button>
            </ivue-popover>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.popover-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: auto;
}

.popover {
    margin: 10px;
}

.popover-left {
    display: flex;
    flex-direction: column;
}

.popover-flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
