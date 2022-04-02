<template>
<header class="header">
    <h1>Todos</h1>
    <input class="new-todo" placeholder="请输入" @keypress="handleEnter">
</header>
</template>
<script setup>
import { useTodos } from '../store';
const {addTodo} = useTodos();
const handleEnter = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (!event.target.value.trim()) return;
        addTodo(event.target.value);
        event.target.value = '';
    }
}
</script>