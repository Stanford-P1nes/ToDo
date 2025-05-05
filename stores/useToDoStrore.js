import { ref } from "vue";
import { defineStore } from "pinia";
export const useToDoStore = defineStore('todo', {
	state: () => ({
		todos: ref([
			{
				id: 1,
				text: 'Устроиться в Djigit',
				done: false,
				createdAt: '30.04.2025 - 18:38:00',
			},
			{
				id: 2,
				text: 'Сделать адаптивный сайт',
				done: true,
				createdAt: '30.04.2025 - 18:38:00',
			},
			{
				id: 3,
				text: 'Сделать todo приложение',
				done: true,
				createdAt: '30.04.2025 - 18:38:00',
			},
			{
				id: 4,
				text: 'Стать миллионером',
				done: false,
				createdAt: '30.04.2025 - 18:38:00',
			},
		]),
	}),
	actions: {
		addToDo(text) {
			const now = new Date()
			const formattedDate = now.toLocaleDateString('ru-RU')
			const formattedTime = now.toLocaleTimeString('ru-RU')
			this.todos.push({
				id: Date.now(),
				text,
				done: false,
				createdAt: `${formattedDate} - ${formattedTime}`,
				isEditing: false,
			})
		},
		toggleToDo(id) {
			const todo = this.todos.find(todo => todo.id === id)
			if (todo) {
				todo.done = !todo.done
			}
		},
		deleteToDo(id) {
			this.todos = this.todos.filter(todo => todo.id !== id)
		},
	},
})