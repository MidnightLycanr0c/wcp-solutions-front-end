<script setup lang="ts">

import Navigation from './components/Navigation.vue';
import Login from './components/Login.vue';
import Account from './components/Account.vue';
</script>

<template>
    <Navigation>
        <main class="flex-grow flex flex-col items-center justify-center p-4">
            <Login />
        </main>
    </Navigation>
</template>

