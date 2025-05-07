import { ref } from 'vue'

// хранилище
const todos = ref([
	{
		id: 1,
		text: 'Устроиться в Djigit',
		done: false,
		createdAt: '03.05.2025 - 18:00:00',
		isEditing: false,
	},
	{
		id: 2,
		text: 'Сделать адаптивный сайт',
		done: true,
		createdAt: '01.05.2025 - 06:01:00',
		isEditing: false,
	},
	{
		id: 3,
		text: 'Сделать todo приложение',
		done: true,
		createdAt: '29.04.2025 - 19:24:00',
		isEditing: false,
	},
	{
		id: 4,
		text: 'Стать миллионером',
		done: false,
		createdAt: '27.04.2025 - 20:05:00',
		isEditing: false,
	},
])

// Выводим локальное хранилище
function initStore() {
	if (typeof window !== 'undefined') {
		const saved = JSON.parse(localStorage.getItem('todos'))
		todos.value = saved
	}
} initStore()

// Сохраняем локальное хранилище
function saveToTodoStore() {
	if (typeof window !== 'undefined') {
		localStorage.setItem('todos', JSON.stringify(todos.value))
	}
}

// Добавляем новую задачу
function addTodo(text) {
    const now = new Date()
    const formattedDate = now.toLocaleDateString('ru-RU')
    const formattedTime = now.toLocaleTimeString('ru-RU')
   	todos.value.push({
        id: Date.now(),
        text,
        done: false,
        createdAt: `${formattedDate} - ${formattedTime}`,
        isEditing: false,
    })
	saveToTodoStore()
}

// Отмечаем задачу
function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
        todo.done = !todo.done
    }
	saveToTodoStore()
}

// Удаляем задачу
function removeTodo(id) {
	todos.value = todos.value.filter(todo => todo.id !== id)
	saveToTodoStore()
}

// Эеспортируем всё
export function useTodoStore() {
	return {
		todos,
		addTodo,
		toggleTodo,
		removeTodo,
	}
}