<template>
    <ivue-upload v-model="fileList" disabled></ivue-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    url: 'https://pica.zhimg.com/80/v2-af54c81674d7580b47988bc6cfae896c_720w.webp',
                },
                {
                    url: 'https://picx.zhimg.com/80/v2-9b27fcc905788bf1a86dc52cc6dc04df_720w.webp',
                },
                {
                    url: 'https://pic1.zhimg.com/80/v2-210691412707bfd60afd05c18aa99c12_720w.webp',
                },
            ],
        };
    },
};
</script>
