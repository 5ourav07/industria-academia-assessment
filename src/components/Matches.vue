<script setup>
import logo from "@/assets/images/icc-logo.png";
import MatchCard from "@/components/MatchCard.vue";
import { onMounted, ref } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const matches = ref([]);
const displayedMatches = ref([]);
const showAll = ref(false);
const isLoading = ref(true);

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// Fetch matches from the API
onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}?status=2&token=${API_TOKEN}`);
    const data = await response.json();
    matches.value = data.response.items;
    displayedMatches.value = matches.value.slice(0, 6);
  } catch (error) {
    console.error("Error fetching matches:", error);
  } finally {
    isLoading.value = false;
  }
});

// Show more matches when "See More" is clicked
const loadMore = () => {
  displayedMatches.value = matches.value;
  showAll.value = true;
};
</script>

<template>
  <div class="mx-auto my-3 w-full px-4 sm:w-3/4 lg:w-1/2">
    <div class="rounded-lg border shadow-md">
      <!-- Header -->
      <div class="bg-[#0E819A]">
        <div class="flex items-center gap-3 px-3 py-2">
          <img :src="logo" alt="ICC Logo" class="h-8 w-8 object-contain" />
          <h1 class="text-lg font-medium text-white">ICC</h1>
        </div>
        <div
          class="flex cursor-pointer items-center justify-center rounded-sm bg-transparent py-4 hover:bg-[#0D748A]"
        >
          <button>
            <p class="text-sm font-bold text-white">Matches</p>
          </button>
        </div>
      </div>

      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex items-center justify-center py-10">
        <PulseLoader />
      </div>

      <!-- Matches -->
      <div v-else class="bg-white">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <MatchCard
            v-for="match in displayedMatches"
            :key="match.match_id"
            :match="match"
          />
        </div>
      </div>

      <div class="mx-5 mb-10 mt-3 flex flex-wrap items-center justify-between">
        <p class="text-xs text-gray-500">
          All times are in Bangladesh Standard Time
        </p>
        <p class="text-xs text-gray-500">Feedback</p>
      </div>

      <!-- See More Button -->
      <div v-if="!showAll" class="flex justify-center bg-white">
        <button
          @click="loadMore"
          class="relative w-full rounded-bl-md rounded-br-md border border-gray-300 bg-[#f5f6f7] px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-200"
        >
          <div
            class="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#0e819a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6 text-white"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </div>
          <span class="mt-5 block text-sm text-black">See more</span>
        </button>
      </div>
    </div>
  </div>
</template>
