<template>
  <section class="font-sans max-w-6xl mx-auto p-10 mt-12">
    <div class="bg-white rounded-lg shadow-lg p-10">
      <!-- Header -->
      <div class="flex items-center mb-8">
        <div class="flex-shrink-0 w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center">
          <span class="text-4xl font-bold text-gray-700">TU</span> 
        </div>
        <div class="ml-6">
          <h1 class="text-3xl font-bold text-gray-900">Test User</h1>
          <p class="text-lg text-gray-500">Account Manager</p>
        </div>
      </div>

      <!-- Account Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Full Name -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <UserIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Full Name</p>
            <p class="text-xl font-semibold text-gray-700">Test User</p>
          </div>
        </div>
        <!-- Department -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <BuildingOfficeIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Department</p>
            <p class="text-xl font-semibold text-gray-700">Sales</p>
          </div>
        </div>

        <!-- Date of Employment -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <CalendarIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Date of Hire</p>
            <p class="text-xl font-semibold text-gray-700">March 15, 2021</p>
          </div>
        </div>

        <!-- Number of Accounts -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <UsersIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Number of Accounts</p>
            <p class="text-xl font-semibold text-gray-700">25</p>
          </div>
        </div>

        <!-- Email Address -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <EnvelopeIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Email Address</p>
            <p class="text-xl font-semibold text-gray-700">testuser@gmail.com</p>
          </div>
        </div>

        <!-- Phone Number -->
        <div class="flex items-center bg-gray-100 p-6 rounded-lg">
          <PhoneIcon class="h-6 w-6 text-gray-500 mr-4" />
          <div>
            <p class="text-gray-500 text-base">Phone Number</p>
            <p class="text-xl font-semibold text-gray-700">+1 (123) 456-7890</p>
          </div>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.account-page {
  font-family: 'Arial', sans-serif;
}
</style>
