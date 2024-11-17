<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits();
const selectedFilters = ref<{ [key: string]: string }>({}); // Reactive state to keep track of selected filters

const filters: [string, string[]][] = [
    ['Status', ['Active', 'Suspended']],
    ['Territory', ['1', '2', '3']],
];

// Handle filter selection
const selectFilter = (filterName: string, filterOption: string) => {
    selectedFilters.value[filterName] = filterOption; // Update state
    emit('filterSelected', { filterName, filterOption });
};

// Clear all filters
const clearFilters = () => {
    selectedFilters.value = {}; // Reset selected filters
    emit('filterSelected', { filterName: '', filterOption: '' });
};

</script>

<template>
    <div class="flex text-black flex-col w-full p-5">
        <div class="grid grid-cols-5 gap-6">
            <div class="flex flex-col items-center">
                <div class="w-full relative">
                    <input type="range" min="0" max="10" step="1" class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer">  
                    <div class="absolute -top-2 left-0 right-0 flex justify-between text-xs text-gray-600"> 
                        <span>0 mi</span>
                        <span>10 mi</span>
                    </div>
                    <span class="text-sm">Distance</span>
                </div>
            </div>
            <div v-for="(filter, index) in filters" :key="index" class="filter-group mb-2">
                <h2 class="text-md font-semibold mb-2">{{ filter[0] }}</h2>
                <div class="flex flex-col space-y-2">
                    <label v-for="(option, optIndex) in filter[1]" :key="optIndex" class="flex items-center space-x-2">
                        <input type="radio" :name="filter[0]" :value="option" class="radio" v-model="selectedFilters[filter[0]]" @change="selectFilter(filter[0], option)"/>
                        <span class="text-sm">{{ option }}</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="flex justify-end">
            <button @click="clearFilters" class="bg-red-500 text-white px-2 py-1 rounded text-sm">
                Clear Filters
            </button>
        </div>
    </div>
</template>