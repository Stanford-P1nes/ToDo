<script setup>
    import { ref, computed } from 'vue';
    import { useTodoStore } from '@/stores/useTodoStore'
    const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

    const newTask = ref(''); // Новая задача

    // Добавление задач
    function addTask() {
        if (newTask.value.trim()) {
            addTodo(newTask.value)
            newTask.value = ''
        }
    }

    // Тот про фильтрацию и сортировку
    const sort = ref(true) // true - по возрастанию, false - по убыванию
    const searchQuery = ref(''); // Тут про поисковую выдачу
    const filterModes = ['All', 'Done', 'Note ready']; // Массив состояний
    const currentFilterIndex = ref(0); // Индекс массива состояний
    const filterText = ref('All') // Текущее состояние и такст для кнопки

    // Ограничитель
    function checkStateFilter() {
        currentFilterIndex.value = (currentFilterIndex.value + 1) % filterModes.length
        filterText.value = filterModes[currentFilterIndex.value]
    }

    // Отфильтрованное хранилище
    const filtredAndSortedTodo = computed(() => {
        return [...todos.value]
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
            <input class="input toDoItem__input" v-model="newTask" type="text" placeholder="Что на сегодня..." autocomplete="off" @keyup.enter='addTask' autofocus tabindex="1" title='Написать задачу'>
            <button class="button btnAdd button_active" type="button" @click='addTask' title="Добавить задачу">Добавить</button>
        </div>
        <div class="toDoItem">
            <div class="searchForm">
                <button class='button btnSort button_active' type="button" @click='sort = !sort' title='Отсортировать задачи'>Sort {{ sort ? '↓' : '↑' }}</button>
                <button class='button btnFilter button_active' type="button" @click='checkStateFilter' title='Отфильтровать задачи'>{{ filterText }}</button>
                <button class="button btnSearch btnSearch_hide button_active" type="button" title='Бесполезная кнопка'>
                    <img :src="searchImg" alt="Иконка лупы для поисковой выдачи">
                </button>
                <input :disabled='!todos.length' v-model='searchQuery' class="input searchForm__input input_disabled" type="text" placeholder="Найти..." tabindex="2" title='Поисковая выдача'>
            </div>
        </div>
        <div class="toDoItem toDoItem__bottom">
            <template v-if='todos && todos.length'>
                <div class="taskToDo" v-for="todo in filtredAndSortedTodo" :key='todo.id'> <!-- Это сама оболочка задачки -->
                    <!-- "Это чекбокс, кнопка выполнено/не выполнено" -->
                    <div class="btnCheckboxWrapper btnCheckboxWrapper_active">
                        <input class="button btnCheckbox btnCheckbox_active" type="checkbox" v-model="todo.done" @click='toggleTodo(todo.id)' title='Отметить'>
                    </div>
                    <!-- Текст задачки -->
                    <template v-if='todo.isEditing'>
                        <input class="taskData taskToDo__data" type="text" v-model='todo.text' @blur='todo.isEditing = false' @keyup.enter='todo.isEditing = false' autofocus tabindex="3" title='Изменить'>
                    </template>
                    <template v-else>
                        <span class="taskData taskToDo__data" :class='{done: todo.done}'>
                            {{ todo.text }}
                            <div class="taskDate taskData__date">
                                {{ todo.createdAt }}
                            </div>
                        </span>
                    </template>
                    <!-- Кнопка - изменить задачу -->
                    <div class="editButtonsBlock taskToDo__editButtonsBlock">
                    <template v-if="todo.isEditing">
                        <button class="button btnRename editButtonsBlock__button button_active" type="button" @click='todo.isEditing = false' title='Подтвердить изменение'>
                            ✔
                        </button>
                    </template>
                    <template v-else>
                        <button class="button btnRename editButtonsBlock__button button_active" type="button" @click='todo.isEditing = true' title='Изменить задачу'>
                            <img :src="penImg" alt="Иконка карандаша">
                        </button>
                    </template>
                    <!-- Кнопка - удалить задачу -->
                    <button class="button btnRemove editButtonsBlock__button button_active" type="button" @click='removeTodo(todo.id)' title='Удалить задачу'>
                        <img :src="trashImg" alt="Иконка мусорного бака">
                    </button>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="noTaskBlock noTaskBlock__toDoItem">
                    У вас пока нет задач
                </div>
            </template>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    @import './_toDo.scss';
</style>