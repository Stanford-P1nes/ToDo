import { ref, watch } from 'vue'

// хранилище
const todos = ref([])

// Наблюдаем за изменениями
watch(todos, () => {
	saveToTodoStore()
}, {deep: true})

// Выводим локальное хранилище
function initStore() {
	if (typeof window !== 'undefined') {
		const saved = JSON.parse(localStorage.getItem('todos'))
		if (saved && Array.isArray(saved)) {
			todos.value = saved
		}
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
}

// Изменить задачу
function editTodo(id) {
	const todo = todos.value.find(todo => todo.id === id)
	todo.isEditing = false
}

// Отмечаем задачу
function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
        todo.done = !todo.done
    }
}

// Удаляем задачу
function removeTodo(id) {
	todos.value = todos.value.filter(todo => todo.id !== id)
}

// Эеспортируем всё
export function useTodoStore() {
	return {
		todos,
		addTodo,
		editTodo,
		toggleTodo,
		removeTodo,
	}
}