<template>
    <header class="w-full py-6 flex justify-start items-center bg-black">
        <div class="w-auto h-full flex items-center justify-center text-white">
            <RouterLink
                to="/"
                class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            >
                <span class="sr-only">WCP Solutions Home Page</span>
                <img class="w-auto h-7" :src="WCPWebLogo" alt="WCP Solutions Logo" >
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