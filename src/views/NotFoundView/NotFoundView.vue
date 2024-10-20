<script setup lang="ts">
import { NotFound } from '@/assets';
</script>


<template>
    <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <div class="max-w-sm mx-auto mb-8">
            <img
            class="w-full h-auto rounded-md"
            :src="NotFound"
            alt="HTTP 404 | Not Found"
            />
        </div>
        <h1 class="text-center text-gray-700 font-bold text-2xl sm:text-3xl mb-2">404 | Not Found</h1>
        <p class="mb-8">Sorry, this page does not exist. It may have been removed, had its name changed, or is temporarily unavailable.</p>
        <div class="text-center">
            <RouterLink
                to="/"
                class="inline-block bg-slate-600 text-white py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition duration-200 ease-in-out"
            >
                Back Home
            </RouterLink>
        </div>
    </div>
</template>