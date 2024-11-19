<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { GoogleMap } from '@/components';
import { SearchResult } from '@/types/interfaces';
import { CHECK_MARK, CROSS_MARK } from '@/types/styling';

import FilterView from './FilterView.vue';
import SearchView from './SearchView.vue';
import RecentView from './RecentView.vue';

const items = ref<SearchResult[]>([]);
const userRole = ref<string>('admin'); // change this to 'admin' or 'salesperson' to test
const searchTerm = ref<string>('');

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
    return filteredItems.value
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

// filter items
const filteredItems = computed(() => {
    const lowerSearchTerm = searchTerm.value.toLowerCase();
    return items.value.filter(item => 
        item.name.toLowerCase().includes(lowerSearchTerm) || 
        item.email.toLowerCase().includes(lowerSearchTerm)
    );
});

// handle search
const handleSearch = (search: string) => {
    searchTerm.value = search;
};

</script>

<template>
    
    <div class="bg-white rounded-lg shadow-lg p-5 w-3/4">

        <!-- Search view component--> 
        <SearchView @toggleFilter="handleFilterToggle" @recentViews="openRecentViews" @search="handleSearch"/>        

        <!-- Filter view component-->
        <FilterView v-if="isFilterVisible"/>          

    </div>

    <div v-if="isRecentVisible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <!-- This component will later store recent customers user has viewed -->
        <RecentView :items="limitedItems" @closeRecentViews="closeRecentViews"  />
    </div>

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
                            <th class="px-4 py-2 text-left"></th>
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
                                {{ result.name }}
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
                            <td class="px-2 py-2 lg:border-none flex lg:table-cell">
                                <span class="block font-semibold lg:hidden mr-2"></span>
                                <a href="/dashboard" class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                    <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
                                    </svg>
                                    View Client
                                </a>
                                <!-- If we decide to use latitude & longitude replace with :href="'https://maps.google.com/maps?q=${result.latitude},${result.longitude}'"-->
                                <a :href="result.address ? `https://maps.google.com/maps?q=${encodeURIComponent(result.address)}` : '#'" target="_blank" rel="noopener noreferrer" class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                    <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clip-rule="evenodd" />
                                    </svg>
                                    Directions
                                </a>
                                <a href="/dashboard" class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                                    <svg class="w-3.5 h-3.5 me-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
                                    </svg>
                                    Call
                                </a>
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
                    <button v-if="limitedItems.length < filteredItems.length" @click="loadMoreItems" class="bg-black text-white py-2 px-4 rounded">
                      See More
                    </button>
                </div>
            </div>
            
            <!-- MAP COMPONENT -->
            <div class="bg-white rounded-lg shadow-lg p-5">
                <h2 class="font-bold mb-2">Map</h2>
                <GoogleMap :items="filteredItems" />
            </div>

        </div>
    </div>

</template>