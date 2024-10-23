<script setup lang="ts">

import { ref } from 'vue';

const email         = ref('');
const password      = ref('');
</script>

<template>
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-center mb-6">
            WCP Solutions
        </h1>
        <h2 class="text-2xl font-normal text-center mb-3">
            Admin/Supervisor Login
        </h2>
        <form class="space-y-4">
            <fieldset class>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input v-model="email"
                       type="email" id="email" name="email" required
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                       placeholder="Enter your email">
            </fieldset>
            <fieldset>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input v-model="password"
                       type="password" id="password" name="password" required
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                       placeholder="Enter your password">
            </fieldset>

            <button type="submit"
                    class="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
            Sign in
            </button>
            <h3 class="text-red-500 font-normal text-center mb-6">
                Incorrect Password or Email
                <br>
                Please contact a WCP Solutions support representative for assistance.
            </h3>
            
        </form>
    </div>
</template>

