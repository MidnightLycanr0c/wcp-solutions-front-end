<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits();

const toggleFilter = () => {
    emit('toggleFilter');
};

const recentViews = () => {
    emit('recentViews');
};

</script>

<template>
    <div>
        <div class="flex items-center justify-between">
            <!-- Filter icon for search bar -->
            <svg @click="toggleFilter" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <form class="flex search-form w-3/4">
                <input type="text" @input="" placeholder="Search customers by name or keyword" name="search" class="flex-1 p-2 border border-gray-300 rounded-l-md"/>
                <button type="submit" @submit="" class="bg-black text-white border border-black px-4 py-2 rounded-r-md">
                    Search
                </button>
            </form>
            
            <div class="flex items-center justify-end">
                <!-- Icon for recent customers viewed -->
                <svg
                    @click="recentViews"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10 text-black"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3A9 9 0 1 1 3 12 9 9 0 0 1 21 12z"
                    />
                </svg>
                
                <!-- Inserting user account icon using Heroicons-->
                <RouterLink to="/account" class="ml-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-black"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </RouterLink>

            
            </div>
        </div>
    </div>
</template>
