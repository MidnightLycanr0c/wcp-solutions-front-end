<template>
    <section class="font-sans max-w-6xl mx-auto p-10 mt-12">
        <div class="bg-white rounded-lg shadow-lg">

            <!-- Close Button -->
            <button @click="close" class="ml-4 text-gray-500 hover:text-black flex items-center justify-end">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    class="w-10 h-10">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" d="M6 18L18 6M6 6l12 12" 
                    />
                </svg>
            </button>

            <!-- Header with Client Initials -->
            <div class="flex items-center mb-8 flex items-center justify-center">
                <div class="flex-shrink-0 w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center">
                    <span class="text-4xl font-bold text-gray-700">
                        {{ clientInitials }}
                    </span> 
                </div>
                <div class="ml-6">
                    <h1 class="text-3xl font-bold text-gray-900">
                        {{ client?.name }}
                    </h1>
                    <p class="text-lg text-gray-500">Client Information</p>
                </div>
            </div>

            <!-- Client Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-10">
                <!-- Address -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">place</span>
                    <div>
                        <p class="text-gray-500 text-base">Address</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.address }}</p>
                    </div>
                </div>

                <!-- Distance -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">map</span>
                    <div>
                        <p class="text-gray-500 text-base">Distance</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.distance }}</p>
                    </div>
                </div>

                <!-- Phone Number -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">phone</span>
                    <div>
                        <p class="text-gray-500 text-base">Phone Number</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.phoneNumber }}</p>
                    </div>
                </div>

                <!-- Email Address -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">email</span>
                    <div>
                        <p class="text-gray-500 text-base">Email Address</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.email }}</p>
                    </div>
                </div>

                <!-- Territory Number -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">domain</span>
                    <div>
                        <p class="text-gray-500 text-base">Territory Number</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.territory_number }}</p>
                    </div>
                </div>

                <!-- Account Manager -->
                <div v-if="client?.accountManager" class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <span class="material-icons text-gray-500 mr-4">person</span>
                    <div>
                        <p class="text-gray-500 text-base">Account Manager</p>
                        <p class="text-xl font-semibold text-gray-700">{{ client?.accountManager }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { SearchResult } from '@/types/interfaces';

const props = defineProps<{
    client: SearchResult | null;
}>();

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

// Compute initials for the client's name
const clientInitials = computed(() => {
    if (props.client) {
        const names = props.client.name.split(" ");
        return names.map(name => name[0]).join("").toUpperCase();
    }
    return "";
});
</script>
