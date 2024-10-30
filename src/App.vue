<script setup lang="ts">
import { Navigation } from '@/components';
import { RouterView } from 'vue-router';
</script>

<template>
    <Navigation>
        <main class="flex-grow flex flex-col items-center justify-center p-4">
            <RouterView />
        </main>
    </Navigation>
</template>
