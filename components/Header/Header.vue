<template>
    <header class="header">
        <div class="container">
            <div class="headerInner">
                <nav aria-label="Главная навигация">
                    <ul>
                        <li>
                            <NuxtLink class="navLink" to="/">ToDo</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="navLink" to="/about">Кто я?</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    @import './_header.scss';
</style>