<template>
    <section class="resume">
        <div class="resumeCol resumeCol__left">
            <div class="miniBlock miniBlock__titleBlock">
                <h3>Агаев Рамазан</h3>
                <strong title="Должность">Frontend-разработчки</strong>
            </div>
            <div class="miniBlock">
                <h4 title='опыт'>Опыт</h4>
                <p>Делал крутые сайты под ключ, которые включали в себя: красивый 
                дизайн, грамотную структуру и логику, плавную анимацию и т.д. 
                Заказчики оставались довольными. </p>
            </div>
            <div class="miniBlock">
                <h4 title='Образование'>Образование</h4>
                <strong>Frontend-разработка (самоучка)</strong>
                <span>Start 01.07.2023</span>
                <p>Прохожу Frontend Roadmap от самых базовых аспектов до сложных. 
                Узнаю про неизвестную мне технологию и начинаю разбираться.</p>
            </div>
            <div class="miniBlock miniBlock__project">
                <h4 title='Проекты'>Проекты</h4>
                <div>
                    <strong>Forest.Dev</strong>
                    <b>GitHub - <a target="_blank" href="https://github.com/Stanford-P1nes/Forest-Dev.git">ссылка на проект</a></b>
                    <p>Создание сайта под ключ за выбранный тариф пользователем. Сайт 
                    предоставляет помимо услуги ещё и информацию о нас и что мы делаем, 
                    о наших успешных проектах, о отзывах заказчиков, о наших тарифах и 
                    обратной связи.</p>
                </div>
                <div>
                    <strong>ToDo менеджер задач</strong>
                    <b>GitHub - <a target="_blank" href="https://github.com/Stanford-P1nes/ToDo.git">ссылка на проект</a></b>
                    <p>Проект на Nuxt 3, включает в себя: 2 страницы - главная и обо мне, 
                    добавление, удаление, редактирование задач, а также возможность 
                    поставить отметку, что задача выполнена, сортировку и фильтрацию 
                    и, самое крутое поисковую выдачу. Проект структурирован грамотно, 
                    что позволяет легко вносить изменения и сопровождать его.</p>
                </div>
            </div>
        </div>
        <div class="resumeCol miniBlock__right">
            <div class="miniBlock miniBlock__location">
                <strong>Дагестан, г. Махачкала</strong>
                <a href="tel:+79604090073">8(960)409-0073</a>
                <a href="mailto:pines10110@gmail.com">pines10110@gmail.com</a>
            </div>
            <div class="miniBlock miniBlock__skills">
                <h4 title='Навыки'>Навыки</h4>
                <span>HTML, CSS, JavaScript</span>    
                <span>Sass, Pinia</span>    
                <span>React, Jsx</span>    
                <span>Nuxt 3</span>    
                <span>Webpack, Vite</span>    
                <span>Figma, Photoshop</span>    
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import './_resume.scss';
</style>