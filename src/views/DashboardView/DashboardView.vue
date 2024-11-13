<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { GoogleMap } from '@/components';
import { SearchResult } from '@/types/interfaces';
import { CHECK_MARK, CROSS_MARK } from '@/types/styling';

import FilterView from './FilterView.vue';
import SearchView from './SearchView.vue';
import RecentView from './RecentView.vue';
import ClientInfoView from '../AccountView/ClientInfoView.vue';

const items = ref<SearchResult[]>([]);
const userRole = ref<string>('salesperson'); // change this to 'admin' or 'salesperson' to test
const selectedClient = ref<SearchResult | null>(null);  //New state for selected client

// styling
const visibleCount = ref<number>(2);
const isFilterVisible = ref(true);
const isRecentVisible = ref(false);


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

// open recent views
const openRecentViews = () => {
    isRecentVisible.value = true;
};

// close recent views
const closeRecentViews = () => {
    isRecentVisible.value = false;
};

//Open client view when clicked on a client
const openClientView = (client: SearchResult) =>{
    selectedClient.value = client;
};

//close client view
const closeClientView = () =>{
    selectedClient.value = null;
}

</script>

<template>
    
    <div class="bg-white rounded-lg shadow-lg p-5 w-3/4">

        <!-- Search view component--> 
        <SearchView @toggleFilter="handleFilterToggle" @recentViews="openRecentViews"/>        

        <!-- Filter view component-->
        <FilterView v-if="isFilterVisible"/>          

    </div>

    <div v-if="isRecentVisible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <!-- This component will later store recent customers user has viewed -->
        <RecentView :items="limitedItems" @closeRecentViews="closeRecentViews"  />
    </div>

    <ClientInfoView v-if="selectedClient" :client="selectedClient" @close="closeClientView"/>

    <div class="flex w-full min-h-screen mt-5 flex-col lg:flex-row">
        <div class="flex-1 p-3 lg:p-5">

            <!-- RESULTS COMPONENT -->
            <div class="bg-white rounded-lg shadow-lg mb-5 p-3 lg:p-5">
                <h2 class="font-bold mb-2 text-lg lg:text-xl">Search Results</h2>
                <div class="overflow-x-auto">
                <table class="min-w-full border-b border-gray-300">
                    <thead class="hidden lg:table-header-group">
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
                        <tr v-for="(result, index) in limitedItems" :key="index" class="border-b border-gray-300 lg:table-row flex flex-col lg:flex-row mb-4 lg:mb-0">
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Active</span>
                                <span v-if="result.status === 1" class="inline-block w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                                    {{ CHECK_MARK }}
                                </span>
                                <span v-else class="inline-block w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center">
                                    {{ CROSS_MARK }}
                                </span>
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Company Name</span>
                                <button @click="openClientView(result)" class="transition duration-300 transform hover:scale-105 hover:bg-gray-200 p-1 rounded">
                                    {{ result.name }}
                                </button>
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Address</span>
                                {{ result.address }}
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Distance </span>
                                {{ result.distance }}
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Phone Number </span>
                                {{ result.phoneNumber }}
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Email </span>
                                {{ result.email }}
                            </td>
                            <td class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Territory Number </span>
                                {{ result.territory_number }}
                            </td>
                            <td v-if="showAcountManagerColumn" class="px-4 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2">Account Manager</span>
                                {{ result.accountManager }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="flex justify-center mt-4">
                    <button v-if="limitedItems.length < items.length" @click="loadMoreItems" class="bg-black text-white py-2 px-4 rounded">
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