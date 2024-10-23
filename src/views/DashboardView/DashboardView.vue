<script setup lang="ts">
import { ref, computed } from 'vue';

// MOCKUP
interface SearchResult {
    name: string;
    address: string;
    distance: string;
    phoneNumber: string;
    email: string;
    territory_number: number;
    accountManager?: string; //  optional
}

const userRole = ref<string>('admin'); // change this to 'admin' or 'salesperson' to test

const searchResults = ref<SearchResult[]>([
    {
        name: 'John Doe',
        address: '123 Elm St, Springfield',
        distance: '5 miles',
        phoneNumber: '+1(234)567-8901',
        email: 'johndoe@example.com',
        territory_number: 5,
        accountManager: 'Alice Johnson',
    },
    {
        name: 'Jane Smith',
        address: '456 Oak St, Springfield',
        distance: '3 miles',
        phoneNumber: '+1(345)678-9012',
        email: 'janesmith@example.com',
        territory_number: 2,
        accountManager: 'Bob Brown',
    },
]);

// determine if the accountManager column should be displayed
const showAcountManagerColumn = computed(() => {
    return userRole.value === 'manager' || userRole.value === 'admin';
});

</script>

<template>
    <div class="bg-white rounded-lg shadow-lg p-5 w-3/4">
        <div class = "flex items-center justify-between">
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
                stroke="currentColor"
                class="w-10 h-10 text-black"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 18.364A9 9 0 1112 21a9 9 0 01-6.879-2.636zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </RouterLink>

        </div>

    </div>

    <div class="flex w-full h-screen mt-5">
        <div class="bg-white rounded-lg shadow-lg p-5 w-1/4">
            <!-- Filter Placeholder -->
        </div>

        <div class="flex-1 p-5">
            <div class="bg-white rounded-lg shadow-lg mb-5 p-5">
                <h2 class="font-bold mb-2">Search Results</h2>
                <table class="min-w-full border-b border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-left">Name</th>
                            <th class="px-4 py-2 text-left">Address</th>
                            <th class="px-4 py-2 text-left">Distance</th>
                            <th class="px-4 py-2 text-left">Phone Number</th>
                            <th class="px-4 py-2 text-left">Email</th>
                            <th class="px-4 py-2 text-left">Territory Number</th>
                            <th v-if="showAcountManagerColumn" class="px-4 py-2 text-left">Account Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result, index) in searchResults" :key="index">
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
            </div>
        </div>
    </div>
</template>