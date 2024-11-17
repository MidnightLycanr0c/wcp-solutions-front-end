<template>
    <div ref="map" class="w-full h-80" id="map"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { Loader } from "@googlemaps/js-api-loader";
  import { SearchResult } from '@/types/interfaces';
  
  const markers = ref<google.maps.marker.AdvancedMarkerElement[]>([]);
  const map = ref<google.maps.Map | null>(null); // Store map instance to update when needed
  
  const map_options = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 4,
    mapId: "DEMO_MAP_ID", // Map ID is required for advanced markers.
  };
  
  const { items } = defineProps<{
    items: SearchResult[];
  }>();
  
  // Function to initialize map and add markers
  const initializeMap = () => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      version: "weekly",
      libraries: ["marker"],
    });
  
    loader.load().then(() => {
      const { Map } = google.maps;
      const { AdvancedMarkerElement } = google.maps.marker;
  
      // Initialize map if it's not already initialized
      if (!map.value) {
        map.value = new Map(document.getElementById("map") as HTMLElement, map_options);
      }
  
      // Clear previous markers
      markers.value.forEach(marker => marker.setMap(null));
      markers.value = []; // Reset markers array
  
      // Add new markers based on the `items` prop
      items.forEach(item => {
        if (item.latitude && item.longitude) {
          const position = new google.maps.LatLng(item.latitude, item.longitude);
          const marker = new AdvancedMarkerElement({
            map: map.value,
            position: position,
            title: item.name || 'No Name',
          });
          markers.value.push(marker);
        }
      });
  
      // Adjust map bounds if items are available
      if (items.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        items.forEach(item => {
          if (item.latitude && item.longitude) {
            bounds.extend(new google.maps.LatLng(item.latitude, item.longitude));
          }
        });
        map.value.fitBounds(bounds);
      }
    });
  };
  
  // Run onMounted to initialize map initially
  onMounted(() => {
    initializeMap();
  });
  
  // Watch for changes in the `items` prop and update map and markers accordingly
  watch(() => items, (newItems) => {
    // Reinitialize the map with new items
    initializeMap();
  }, { deep: true, immediate: true });
  </script>
  
  <style scoped>
  /* Add styles here if necessary */
  </style>
  