<template>
    <section class="about">
        <div class="container">
            <div class="aboutInner">
                <h1>Кто я?</h1>
                <p>_Привет мир, салам алейкум, меня зовут Агаев Рамазан, мне 19 лет, я из города Махачкала. Занимаюсь программированием - созданием сайтов на html, css, javascript.</p>
                <p>_Пока я делал этот проект, я ещё паралельно работал в магазине гибермаркете электроники 05ру на Имама Шамиля 31г. Мерчендайзером. Именно от туда я и нашел такую компанию как Djigit.it от коллеги.</p>
                <p>_Я сразу написал им (Djigit) и оказалось что они пишут на nuxt, а я изучал react, ну я и начал изучать nuxt тоже.</p>
                <p>_Проработав месяц в 05 я параллельно учил Nuxt и в конце концов я еще раз обратился туда :) и мне дали шанс.</p>
                <p>_В качестве шанса мне дали ТЗ из 2 частей, первое я выполнил, было не сложно, а второе можно посмотреть здесь на этом сайте - это ToDo.</p>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 20px;
    }
    p {
        text-indent: each-line;
        color: orange;
        font-size: 1.5rem;
        line-height: 1.2;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }
    .aboutInner {
        max-width: 800px;
        margin: 0 auto;
    }
</style>