<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { GoogleMap } from '@/components';
import FilterView from './FilterView.vue';
import SearchView from './SearchView.vue';

const items = ref<SearchResult[]>([]);
const userRole = ref<string>('salesperson'); // change this to 'admin' or 'salesperson' to test

// styling
const CHECK_MARK = '\u2714'; // Unicode for ✔
const CROSS_MARK = '\u2716'; // Unicode for ✖
const visibleCount = ref<number>(2);
const isFilterVisible = ref(true);

interface SearchResult {
    name: string;
    status: number,
    address: string;
    distance: string;
    phoneNumber: string;
    email: string;
    territory_number: number;
    accountManager?: string; //  optional
}

// mock API call
onMounted(async () => {
    try {
        const response = await fetch('src/views/DashboardView/search_result_mockup.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        items.value = await response.json();
    } catch (error) {
        console.error('Error fetching search results:', error);
        items.value = [];
    }
});

// determine if the accountManager column should be displayed
const showAcountManagerColumn = computed(() => {
    return userRole.value === 'manager' || userRole.value === 'admin';
});

//  sorts result by closest distance
const parseDistance = (distance: string) => {
    return parseFloat(distance);
};

// limits amounts of results to be displayed
// TODO: fix styling break 
const limitedItems = computed(() => {
    return items.value
        .sort((a, b) => parseDistance(a.distance) - parseDistance(b.distance)) // Sort by distance
        .slice(0, visibleCount.value); // Limited results
});

// Method to load more items
const loadMoreItems = () => {
    visibleCount.value += 2; // Increase the visible count by 2
};

// toggle filters
const handleFilterToggle = () => {
    isFilterVisible.value = !isFilterVisible.value; 
};

</script>

<template>
    
    <div class="bg-white rounded-lg shadow-lg p-5 w-3/4">

        <!-- Search view component--> 
        <SearchView @toggleFilter="handleFilterToggle"/>        

        <!-- Filter view component-->
        <FilterView v-if="isFilterVisible"/>          

    </div>

    <div class="flex w-full h-screen mt-5">
        <div class="flex-1 p-5">

            <!-- RESULTS COMPONENT -->
            <div class="bg-white rounded-lg shadow-lg mb-5 p-5">
                <h2 class="font-bold mb-2">Search Results</h2>
                <table class="min-w-full border-b border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-left">Active</th>
                            <th class="px-4 py-2 text-left">Company Name</th>
                            <th class="px-4 py-2 text-left">Address</th>
                            <th class="px-4 py-2 text-left">Distance</th>
                            <th class="px-4 py-2 text-left">Phone Number</th>
                            <th class="px-4 py-2 text-left">Email</th>
                            <th class="px-4 py-2 text-left">Territory Number</th>
                            <th v-if="showAcountManagerColumn" class="px-4 py-2 text-left">Account Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result, index) in limitedItems" :key="index">
                            <td class="px-4 py-2 border-b border-gray-300">
                                <span v-if="result.status === 1" class="inline-block w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                                    {{ CHECK_MARK }}
                                </span>
                                <span v-else class="inline-block w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center">
                                    {{ CROSS_MARK }}
                                </span>
                            </td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.name }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.address }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.distance }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.phoneNumber }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.email }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ result.territory_number }}</td>
                            <td v-if="showAcountManagerColumn" class="px-4 py-2 border-b border-gray-300">{{ result.accountManager }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-center">
                    <button v-if="limitedItems.length < items.length"  @click="loadMoreItems" class="mt-4 bg-black text-white py-2 px-4 rounded">
                        See More
                    </button>
                </div>
            </div>

            <!-- MAP COMPONENT -->
            <div class="bg-white rounded-lg shadow-lg p-5">
                <h2 class="font-bold mb-2">Map</h2>
                <GoogleMap />
            </div>

        </div>
    </div>

</template>