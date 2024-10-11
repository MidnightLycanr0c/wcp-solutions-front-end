<template>
    <header class="w-full py-6 flex justify-start items-center bg-black">
        <div class="w-auto h-full flex items-center justify-center text-white">
            <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                <span class="sr-only">WCP Solutions Home Page</span>
                <img  class="w-auto h-5" src="../assets/wcp-logo.svg" alt="WCP Solutions Logo" >
            </a>
        </div>
    </header>
    <slot></slot>
    <footer class="w-full p-4 flex justify-start items-center bg-black">
        <div class="w-auto h-full flex items-center justify-center text-white">
            <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                <span class="sr-only">WCP Solutions Home Page</span>
            </a>
        </div>    
    </footer>
</template>