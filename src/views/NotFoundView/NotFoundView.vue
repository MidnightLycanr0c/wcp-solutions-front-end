<template>
    <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <div class="max-w-sm mx-auto mb-8">
            <img
            class="w-full h-auto rounded-md"
            :src="NotFound"
            alt="HTTP 404 | Not Found"
            />
        </div>
        <h1 class="text-center text-gray-700 font-bold text-2xl sm:text-3xl mb-2">404 | Not Found</h1>
        <p class="mb-8">Sorry, this page does not exist. It may have been removed, had its name changed, or is temporarily unavailable.</p>
        <div
            @mouseover="pause_countdown"
            @mouseleave="resume_countdown"
            @click="redirect_home"
            class="text-center">
            <button
                to="/"
                class="inline-block bg-slate-600 text-white py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition duration-200 ease-in-out"
            >
                Back Home
            </button>
        </div>
        <p class="text-center mt-2">You will be redirected in <span class="font-bold">{{ formatted_time }}</span> seconds</p>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

import { NotFound } from '@/assets';


const router = useRouter();

const countdown = ref<number>(10);
const is_paused = ref<boolean>(false);

const formatted_time = computed(() => countdown.value.toFixed(0));

let interval: NodeJS.Timeout | null = null;


function start_countdown()
{
    interval = setInterval(() => {
        if ( !is_paused.value )
        {
            countdown.value -= 1;

            if ( countdown.value <= 0 )
            {
                clearInterval(interval!);
                redirect_home();
            }
        }
    }, 1000);
}


function pause_countdown()
{
    is_paused.value = true;
}


function resume_countdown()
{
    is_paused.value = false;
}


function redirect_home()
{
    router.push('/');
}


onMounted(() => {
    start_countdown();
});


onUnmounted(() => {
    if (interval)
    {
        clearInterval(interval);
    }
});
</script>