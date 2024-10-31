<template>
    <div ref="map" class="w-full h-80" id="map"></div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

console.table(import.meta.env)

const map = ref<google.maps.MapsLibrary>();
const map_options = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 4
};

onMounted(async () => {
    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        version: "weekly",
    })

    const { Map } = await loader.importLibrary('maps') as google.maps.MapsLibrary;

    new Map(document.getElementById("map") as HTMLElement, map_options);
})
</script>