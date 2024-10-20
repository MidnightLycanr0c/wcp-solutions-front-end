<script setup lang="ts">

import { ref } from 'vue';

const email         = ref('');
const password      = ref('');

const is_loading    = ref(false);
const error_message = ref('');

async function handle_login()
{
    is_loading.value    = true;
    error_message.value = ''

    try
    {
        // TODO(eugene): Mock Up Request
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO(eugene): Remove Mock Up Logic
        if (email.value === 'test@gmail.com' && password.value === 'password')
        {
            console.log('Successful Login!');
        }
        else
        {
            throw new Error('Invalid Email or Password');
        }
    }
    catch (error)
    {
        // TODO(eugene): Add Proper Error Handling
        if (error instanceof Error)
        {
            error_message.value = error.message;
        }
        else
        {
            error_message.value = 'Uncaught Exception';
        }
    }
    finally
    {
        is_loading.value = false;
    }
}

</script>


<template>
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-center mb-6">Online Lookup Tool</h1>
        <h2 class="text-2xl font-bold mb-2">Login</h2>
        <form class="space-y-4" @submit.prevent="handle_login">
            <fieldset class>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                {{ is_loading ? 'Signing In...' : 'Sign In' }}
            </button>

            <p v-if="error_message" class="w-full text-center mt-4 text-red-600 text-sm">
                {{ error_message }} <br>
                Try again or Contact Support Team
            </p>
        </form>
    </div>
</template>