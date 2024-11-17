<template>
    <div ref="map" class="w-full h-80" id="map"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { SearchResult } from "@/types/interfaces";

// Types for map and markers
let map: google.maps.Map;
const markers = ref<google.maps.marker.AdvancedMarkerElement[]>([]);

const map_options: google.maps.MapOptions = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 4,
    mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
};

const { items } = defineProps<{
    items: SearchResult[];
}>();

onMounted(async () => {

    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY, 
        version: "weekly",
        libraries: ["marker"],
    });

    try {
        // Load the required libraries
        await loader.importLibrary("maps");
        await loader.importLibrary("marker");

        // Initialize the map
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, map_options);

        // Add markers using AdvancedMarkerElement
        // TODO: implement watcher to make reactive
        items.forEach((item) => {
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: item.latitude, lng: item.longitude },
                map,
                title: item.name,
            });

            markers.value.push(marker);
        });
        if (items.length > 0) {
            let bounds = new google.maps.LatLngBounds();
            items.forEach(item => {
                if (item.latitude && item.longitude) {
                    bounds.extend(new google.maps.LatLng(item.latitude, item.longitude));
                }
            });
            map.fitBounds(bounds);
        }

    } catch (error) {
        console.error("Error loading Google Maps: ", error);
    }
});

</script>
