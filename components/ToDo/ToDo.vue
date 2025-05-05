<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useToDoStore } from '../../stores/useToDoStrore';

    const toDoStore = useToDoStore(); // Ссылка на хранилище
    const newTask = ref(''); // Новая задача
    // Добавление задач
    function addTask() {
        if (newTask.value.trim()) {
            toDoStore.addToDo(newTask.value)
            newTask.value = ''
        }
    }

    // Тот про фильтрацию и сортировку
    const sort = ref(true) // true - по возрастанию, false - по убыванию
    const searchQuery = ref(''); // Тут про поисковую выдачу
    const filterModes = ['All', 'Done', 'Note ready']; // Массив состояний
    const currentFilterIndex = ref(0); // Индекс массива состояний
    const filterText = ref('All') // Текущее состояние и такст для кнопки
    function checkStateFilter() {
        currentFilterIndex.value = (currentFilterIndex.value + 1) % filterModes.length
        filterText.value = filterModes[currentFilterIndex.value]
    }
    const filtredAndSortedToDo = computed(() => {
        return [...toDoStore.todos]
        .sort((a, b) => sort.value ? a.id - b.id : b.id - a.id)
        .filter(todo => {
            if (filterText.value === 'Done') {
                return todo.done
            }
            if (filterText.value === 'Note ready') {
                return !todo.done
            }
            return true
        })
        .filter(todoText => todoText.text.toLowerCase().includes(searchQuery.value.toLowerCase()))
    });

    // Тут сохраненные картинки
    import penImg from '~/public/icons/pen-svgrepo-com.svg';
    import trashImg from '~/public/icons/trash-svgrepo-com.svg';
    import searchImg from '~/public/icons/search-alt-2-svgrepo-com.svg';
</script>

<template>
    <div class="toDo">
        <div class='toDoItem'>
            <input class="inputTodo" v-model="newTask" type="text" placeholder="Что на сегодня..." autocomplete="off" @keyup.enter='addTask'>
            <button class="button btnAdd" type="button" @click='addTask'>Добавить</button>
        </div>
        <div class="toDoItem">
            <button class='button btnSort' type="button" @click='sort = !sort'>Sort {{ sort ? '↑' : '↓' }}</button>
            <button class='button btnFilter' type="button" @click='checkStateFilter'>{{ filterText }}</button>
            <div class="searchForm">
                <button class="button btnSearch" type="button">
                    <img :src="searchImg" alt="Иконка лупы для поисковой выдачи">
                </button>
                <input v-model='searchQuery' class="inputSeatch" type="text" placeholder="Найти...">
            </div>
        </div>
        <div class="toDoItem toDoItem__info">
            <template v-if='toDoStore.todos && toDoStore.todos.length'>
                <div class="taskToDo" v-for="toDo in filtredAndSortedToDo" :key='toDo.id'> <!-- Это сама оболочка задачки -->
                    <!-- "Это чекбокс, кнопка выполнено/не выполнено" -->
                    <div class="btnCheckboxWrapper">
                        <input class="button btnCheckbox" type="checkbox" v-model="toDo.done">
                    </div>
                    <!-- Текст задачки -->
                    <template v-if='toDo.isEditing'>
                        <input class="taskData" type="text" v-model='toDo.text' @blur='toDo.isEditing = false' @keyup.enter='toDo.isEditing = false' autofocus>
                    </template>
                    <template v-else>
                        <span class="taskData" :class='{done: toDo.done}'>
                            {{ toDo.text }}
                            <div class="taskDate">
                                {{ toDo.createdAt }}
                            </div>
                        </span>
                    </template>
                    <!-- Кнопка - изменить задачу -->
                     <template v-if="toDo.isEditing">
                        <button class="button btnRename" type="button" @click='toDo.isEditing = false'>
                            ✔
                        </button>
                     </template>
                    <template v-else>
                        <button class="button btnRename" type="button" @click='toDo.isEditing = true'>
                            <img :src="penImg" alt="Иконка карандаша">
                        </button>
                    </template>
                    <!-- Кнопка - удалить задачу -->
                    <button class="button btnRemove" type="button" @click='toDoStore.deleteToDo(toDo.id)'>
                        <img :src="trashImg" alt="Иконка мусорного бака">
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="noTaskBlock">
                    У вас пока нет задач
                </div>
            </template>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    @import './_toDo.scss';
</style>