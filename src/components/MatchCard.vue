<script setup>
const props = defineProps({
  match: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="border border-gray-200 p-4 hover:bg-slate-50">
    <!-- Match Information -->
    <p class="mb-2 text-xs text-gray-500" v-if="match?.format_str === 'Test'">
      {{ match?.format_str }} {{ match?.match_number }} of
      {{ match?.competition?.total_matches || "N/A" }} End of Day
      {{ match?.day || "N/A" }}
    </p>
    <p
      v-else-if="match?.format_str === 'T20'"
      class="mb-2 text-xs text-gray-500"
    >
      {{ match?.competition?.title }} - {{ match?.format_str }}
      {{ match?.match_number }} of
      {{ match?.competition?.total_matches || "N/A" }}
    </p>
    <p class="mb-2 text-xs text-gray-500" v-else>
      {{ match?.format_str }} {{ match?.match_number }} of
      {{ match?.competition?.total_matches || "N/A" }}
    </p>

    <!-- Teams -->
    <div class="flex flex-col gap-3">
      <!-- Team A -->
      <div class="flex flex-col items-start justify-between gap-2 sm:flex-row">
        <div class="flex items-center">
          <img
            :src="match?.teama?.logo_url || ''"
            alt="Team A Logo"
            class="h-6 w-6 object-contain"
          />
          <p class="ml-2 text-sm text-gray-800">
            {{ match?.teama?.name || "Team A" }}
          </p>
        </div>
        <p class="text-sm text-gray-800">
          {{ match?.teama?.scores }} ({{ match?.teama?.overs }})
        </p>
      </div>

      <!-- Team B -->
      <div class="flex flex-col items-start justify-between gap-2 sm:flex-row">
        <div class="flex items-center">
          <img
            :src="match?.teamb?.logo_url || ''"
            alt="Team B Logo"
            class="h-6 w-6 object-contain"
          />
          <p class="ml-2 text-sm text-gray-800">
            {{ match?.teamb?.name || "Team B" }}
          </p>
        </div>
        <p class="text-sm text-gray-800">
          {{ match?.teamb?.scores }} ({{ match?.teamb?.overs }})
        </p>
      </div>
    </div>

    <p class="mt-3 text-sm text-gray-800">{{ match?.result || "N/A" }}</p>
  </div>
</template>
