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
                            <NuxtLink class="navLink" to="/resume">Резюме</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import './_header.scss';
</style>