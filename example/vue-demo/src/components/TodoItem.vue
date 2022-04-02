<template>
<li :class="{completed: !!todo.done}" >
    <div class="view">
        <input
            autoFocus
            type="checkbox"
            class="toggle"
            :checked="todo.done"
            @change="toggleDone"
        />
        <label>
            {{todo.label}}
        </label>
        <button class="destroy" @click="del" />
    </div>
</li>
</template>
<script setup>
import { useTodos } from '../store';

const {done, delTodo} = useTodos();
const {todo} = defineProps({
    todo: {
        type: Object,
        default: {},
        required: true,
    }
});

const toggleDone = () => {
    done(todo.id)
}
const del = () => {
    delTodo(todo.id);
}
</script>