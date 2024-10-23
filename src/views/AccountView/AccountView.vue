<script setup lang="ts">
import { ref, computed } from 'vue';
import { Account } from './account.interface';
import { useRouter } from 'vue-router';

// TODO(eugene): Add Fetch User Information Functionality
const account = ref<Account>({
    name: {
        first: 'Test',
        last:  'User',
    },
    contact: {
        email:        'testuser@gmail.com',
        phone_number: '+1(123)456-7890'
    },
    role:         'Account Manager',
    department:   'Sales',
    date_of_hire: 'March 15, 2021',
    accounts:     []
});

const full_name = computed(() => `${account.value.name.first} ${account.value.name.last}`)

const router = useRouter();

const closeAccountView = () => {
    router.push('/dashboard');
};
</script>


<template>
    <section class="font-sans max-w-6xl mx-auto p-10 mt-12">
        <div class="bg-white rounded-lg shadow-lg p-10">
            
            <!-- Header -->
            <div class="flex items-center mb-8">
                <div class="flex-shrink-0 w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center">
                    <span class="text-4xl font-bold text-gray-700">TU</span> 
                </div>
                <div class="ml-6">
                    <h1 class="text-3xl font-bold text-gray-900">
                        {{ full_name }}
                    </h1>
                    <p class="text-lg text-gray-500">{{ account.role }}</p>
                </div>
            </div>

             <!--Close Button-->
             <button @click="closeAccountView" class="text-gray-500 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            <!-- Account Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- Full Name -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <UserIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Full Name</p>
                        <p class="text-xl font-semibold text-gray-700">{{ full_name }}</p>
                    </div>
                </div>

                <!-- Department -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <BuildingOfficeIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Department</p>
                        <p class="text-xl font-semibold text-gray-700">{{ account.department }}</p>
                    </div>
                </div>

                <!-- Date of Employment -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <CalendarIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Date of Hire</p>
                        <p class="text-xl font-semibold text-gray-700">{{ account.date_of_hire }}</p>
                    </div>
                </div>

                <!-- Number of Accounts -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <UsersIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Number of Accounts</p>
                        <p class="text-xl font-semibold text-gray-700">{{ account.accounts.length }}</p>
                    </div>
                </div>

                <!-- Email Address -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <EnvelopeIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Email Address</p>
                        <!-- TODO(eugene): Add `<a>` with Email Link to Email Address -->
                        <p class="text-xl font-semibold text-gray-700">{{ account.contact.email }}</p>
                    </div>
                </div>

                <!-- Phone Number -->
                <div class="flex items-center bg-gray-100 p-6 rounded-lg">
                    <PhoneIcon class="h-6 w-6 text-gray-500 mr-4" />
                    <div>
                        <p class="text-gray-500 text-base">Phone Number</p>
                        <!-- TODO(eugene): Add `Intl` Formatting to Phone Number -->
                        <p class="text-xl font-semibold text-gray-700">{{ account.contact.phone_number }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
