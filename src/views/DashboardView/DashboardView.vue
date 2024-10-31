<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { GoogleMap } from '@/components';
import FilterView from './FilterView.vue';


const items = ref<SearchResult[]>([]);
const userRole = ref<string>('salesperson'); // change this to 'admin' or 'salesperson' to test

// styling
const CHECK_MARK = '\u2714'; // Unicode for ✔
const CROSS_MARK = '\u2716'; // Unicode for ✖

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
const parseDistance = (distance: string): number => {
    const match = distance.match(/(\d+)\s*(miles?|km)/);
    if (match) {
        const value = parseFloat(match[1]);
        return value
    }
    return Infinity; 
};

// limits amounts of results to be displayed
// TODO: len(result) -> limit, add "see more" button
// TODO: fix styling break when there are more than 2 results
const limitedItems = computed(() => {
    return items.value
        .sort((a, b) => parseDistance(a.distance) - parseDistance(b.distance)) // Sort by distance
        .slice(0, 2); // Limit to 2 results
});

</script>

<template>
    <div class="bg-white rounded-lg shadow-lg p-5 w-3/4">
        <div class = "flex items-center justify-between">
            
        <!-- Filter icon for search bar -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
        <form class="flex search-form w-3/4">
            <input type="text" placeholder="Search customers by name or keyword" name="search" class="flex-1 p-2 border border-gray-300 rounded-l-md"/>
            <button type="submit" class="bg-black text-white border border-black px-4 py-2 rounded-r-md">
                Search
            </button>
        </form>
        
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

        <!-- Inserting logout icon using Heroicons-->
        <!-- TODO: WE PROBABLY WANT TO MOVE THIS ICON TO THE HEADER-->
        <RouterLink to="/" class="ml-4">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#de1a34" 
                class="w-10 h-10 text-black">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" 
                />
            </svg>
        </RouterLink>
        </div>

    </div>

    <div class="flex w-full h-screen mt-5">
        <div class="bg-white rounded-lg shadow-lg p-5 w-1/4">
            <FilterView/>
        </div>

        <div class="flex-1 p-5">
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
            </div>

            <div class="bg-white rounded-lg shadow-lg p-5">
                <h2 class="font-bold mb-2">Map</h2>
                <GoogleMap />
            </div>
        </div>
    </div>
</template>