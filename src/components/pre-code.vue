<template>
    <pre class="pre">
      <code><slot></slot></code>
    </pre>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pre {
    display: flex;
    width: 100%;

    code {
        width: 100%;
        margin: 0;
        border: none;
        padding: 0;
        font-size: 85%;
        background: hsla(0, 0%, 58.8%, 0.1);
        border-radius: 3px;
        font-size: initial;
        background-color: #f3f5f6;
    }
}
</style>
