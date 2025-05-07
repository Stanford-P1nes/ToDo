<script setup>
    useHead({
        title: 'Resume',
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
        <div class="container">
            <Resume />
        </div>
    </main>
</template>