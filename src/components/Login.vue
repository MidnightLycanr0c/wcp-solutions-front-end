<template>
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-center mb-6">Online Lookup Tool</h1>
        <h2 class="text-2xl font-bold mb-2">Login</h2>
        <form class="space-y-4">
            <fieldset class>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                       placeholder="Enter your email"
                >
            </fieldset>
            <fieldset>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" name="password" required
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                       placeholder="Enter your password"
                >
            </fieldset>

            <button type="submit"
                    class="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
                    Sign In
            </button>
        </form>
    </div>
</template>