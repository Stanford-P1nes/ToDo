<script setup>
    useHead({
        title: 'ToDo',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ],
    });
</script>

<template>
    <main>
        <ToDo class="main__toDo" />
    </main>
</template>

<style lang='scss' scoped>
    .main__toDo {
        margin: 0 auto;
    }
</style>