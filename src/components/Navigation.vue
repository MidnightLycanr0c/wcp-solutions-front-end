<template>
    <header class="w-full py-6 flex items-center bg-black">
        <div class="w-auto h-full flex items-center justify-start text-white">
            <RouterLink
                to="/"
                class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            >
                <span class="sr-only">WCP Solutions Home Page</span>
                <img class="w-auto h-7" :src="WCPWebLogo" alt="WCP Solutions Logo">
            </RouterLink>
        </div>
        <!-- This is added to create a space between the logo and the logout button -->
        <div class="flex-1"></div>
        <!-- Logout button added to the header -->
        <div class="flex items-center">
            <RouterLink to="/" class="ml-4">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="#de1a34" 
                    class="w-10 h-10 text-white">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" 
                    />
                </svg>
            </RouterLink>
        </div>
    </header>

    <slot></slot>

    <footer class="w-full p-4 flex justify-start items-center bg-black">
        <div class="w-auto h-full flex text-white flex-col">
            <span class="text-xs mt-0">
                &copy; {{ current_year }}
                WCP Solutions, All Rights Reserved.
            </span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { WCPWebLogo } from "@/assets";

const current_year = ref(new Date().getFullYear());
</script>
