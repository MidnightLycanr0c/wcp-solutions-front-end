<script setup lang="ts">

import { ref } from 'vue';

const email         = ref('');
const password      = ref('');

// TODO(eugene): Refactor the Statuses into State Machine for Predictability
const is_loading    = ref(false);
const error_message = ref('');
const success       = ref(false);

async function handle_login()
{
    is_loading.value    = true;
    error_message.value = ''

    try
    {
        const response = await fetch(`/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                email:    email.value,
                password: password.value
            })
        });

        if (response.ok)
        {
            const data = await response.json();
            console.log(data?.message);
            success.value = true
        }
        else
        {
            const error = await response.json();
            error_message.value = error?.message;

            console.table(error)
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

            <p v-if="success" class="w-full text-center mt-4 text-lime-600 font-bold text-sm">
                Logged In!
            </p>
        </form>
    </div>
</template>