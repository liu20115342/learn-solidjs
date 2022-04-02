<template>
<section class="main">
    <ul class="todo-list">
        <todo-item
            v-for="todo of state.todos"
            :key="todo?.id"
            :todo="todo"
        />
    </ul>
</section>
</template>
<script setup>
import { useTodos } from '../store';
import TodoItem from './TodoItem.vue';
const {state} = useTodos();
</script>