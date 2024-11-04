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
