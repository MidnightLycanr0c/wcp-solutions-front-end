<script setup lang="ts">
import { SearchResult } from '@/types/interfaces';
import { CHECK_MARK, CROSS_MARK } from '@/types/styling';

// Define props and emits
const { items } = defineProps<{
    items: SearchResult[];
}>();

const emit = defineEmits<{
    (e: 'closeRecentViews'): void;
}>();
</script>

<template>
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-3xl relative">

            <button @click="emit('closeRecentViews')" class="bg-black absolute top-3 right-3 px-2 py-1 rounded text-white">
                Close
            </button>

            <h2 class="text-2xl font-semibold mb-4">Recently Viewed</h2>

            <div class="grid grid-cols-1 gap-4">
                <div v-for="item in items" :key="item.name" class="border border-gray-300 p-4 rounded-lg shadow-sm">
                    <span class="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                        <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd" />
                        </svg>
                    5+ Years
                    </span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                        </svg>
                    Large Company
                    </span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                        <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clip-rule="evenodd" />
                        </svg>
                    $50K+
                    </span>
                    <div class="flex items-center justify-between"> 
                        <h3 class="text-lg font-medium">{{ item.name }}</h3>
                        <span v-if="item.status === 1" class="inline-block w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                            {{ CHECK_MARK }}
                        </span>
                        <span v-else class="inline-block w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center">
                            {{ CROSS_MARK }}
                        </span>
                    </div>
                    <p>{{ item.address }}</p>
                    <p>{{ item.distance }} away</p>
                    <p>Phone: {{ item.phoneNumber }}</p>
                    <p>Email: {{ item.email }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
