
<template>
	<main class="task">
		
		<section class="greeting">
            <h2 class="title">
                What's up,<input v-if="!isAuthenticated" type="text" id="name" placeholder="Name here" v-model="name" />
                <span v-if="isAuthenticated">{{ user.name }}</span>
            </h2>
            <h3 v-if="isAuthenticated">User profile: {{ user.email }}</h3>
        </section>

		<section class="create-todo">
			<h3>CREATE A TODO</h3>

			<form id="new-todo-form" @submit.prevent="addTodo">
				<h4>What's on your todo list?</h4>
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="e.g. make a video"
					v-model="input_content" />
				
				<h4>Pick a category</h4>
				<div class="options">

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category1" 
							value="business"
							v-model="input_category" />
						<span class="bubble business"></span>
						<div>Business</div>
					</label>

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category2" 
							value="personal"
							v-model="input_category" />
						<span class="bubble personal"></span>
						<div>Personal</div>
					</label>

				</div>

				<input type="submit" value="Add todo" />
			</form>
		</section>
		<section class="filter-sort-section">
    <label for="filter-status">Filter by Status:</label>
    <select v-model="filterStatus" id="filter-status">
      <option value="all">All</option>
      <option value="to-do">To Do</option>
      <option value="completed">Completed</option>
    </select>

    <label for="sort-by">Sort by:</label>
    <select v-model="sortBy" id="sort-by">
      <option value="earliest">Earliest</option>
      <option value="oldest">Oldest</option>
      <option value="business">Business</option>
      <option value="personal">Personal</option>
    </select>
  </section>

		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">
				

				<div
          v-for="todo in filteredAndSortedTodos"
          :key="todo.createdAt"
          :class="{ 'todo-item': true, 'done': todo.done }"
        >
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category == 'business' 
								? 'business' 
								: 'personal'
						}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

				</div>


		</section>

		<section class="task-history">
      <h3>TASK HISTORY</h3>
      <div v-for="todo in taskHistory" :key="todo.createdAt">
        <span>{{ todo.content }}</span>
        <span>
          {{ todo.status === 'completed' ? 'Completed' : 'Started' }}
          on: {{ new Date(todo.createdAt).toLocaleString() }}
        </span>
      </div>
    </section>
  </main>

</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const todos = ref([]);
    const name = ref('');

    const input_content = ref('');
    const input_category = ref(null);

	const { isAuthenticated, user } = useAuth0();

    const todos_asc = computed(() => {
    return [...todos.value].sort((a, b) => {
        const timeA = a.createdAt ? a.createdAt : 0;
        const timeB = b.createdAt ? b.createdAt : 0;
        return timeA - timeB;
    });
});

const filterStatus = ref("all");

    const sortBy = ref('earliest'); 

    const filteredTodos = computed(() => {
      switch (filterStatus.value) {
        case 'to-do':
          return todos.value.filter((t) => !t.done);
        case 'completed':
          return todos.value.filter((t) => t.done);
        default:
          return todos.value;
      }
    });

    const filteredAndSortedTodos = computed(() => {
      const sortedTodos = [...filteredTodos.value];
      if (sortBy.value === 'earliest') {
        sortedTodos.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      } else if (sortBy.value === 'oldest') {
        sortedTodos.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else if (sortBy.value === 'business') {
        sortedTodos.sort((a, b) =>
          a.category === 'business' ? -1 : b.category === 'business' ? 1 : 0
        );
      } else if (sortBy.value === 'personal') {
        sortedTodos.sort((a, b) =>
          a.category === 'personal' ? -1 : b.category === 'personal' ? 1 : 0
        );
      }
      return sortedTodos;
    });

    const completedTasks = computed(() => {
      return todos.value.filter((t) => t.done);
    });

    const taskHistory = computed(() => {
      return todos.value.map((todo) => {
        return {
          content: todo.content,
          status: todo.done ? 'completed' : 'started',
          createdAt: todo.createdAt,
        };
      });
    });




    watch(name, (newVal) => {
      localStorage.setItem('name', newVal);
    });

    watch(todos, (newVal) => {
      localStorage.setItem('todos', JSON.stringify(newVal));
    }, {
      deep: true
    });

    const addTodo = () => {
      if (input_content.value.trim() === '' || input_category.value === null) {
        return;
      }

      todos.value.push({
        content: input_content.value,
        category: input_category.value,
        done: false,
        editable: false,
        createdAt: new Date().getTime(),
      });
    };

    const removeTodo = (todo) => {
      todos.value = todos.value.filter((t) => t !== todo);
    };

    onMounted(() => {
      name.value = localStorage.getItem('name') || '';
      todos.value = JSON.parse(localStorage.getItem('todos')) || [];
    });

    return {
		isAuthenticated,
		user,
      todos,
      name,
      input_content,
      input_category,
      todos_asc,
      addTodo,
      removeTodo,
	filterStatus,
      sortBy,
      filteredAndSortedTodos,
      completedTasks,
      taskHistory,
    };
  },
};
</script>

<style scoped>
.title{
	gap: 5px;
}
.filter-sort-section select {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #FFF;
    background-color: royalblue;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: 100%;
  }

  .filter-sort-section label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--dark);
    font-size: 0.875rem;
    font-weight: 700;
    padding: 2px;
  }
.task-history span {
  padding-right: 6px;
}
</style>

