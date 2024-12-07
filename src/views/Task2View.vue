<script setup>
import apple from "@/assets/images/apple-logo.png";
import bitcoin from "@/assets/images/bitcoin-logo.png";
import envato from "@/assets/images/envato-logo.png";
</script>

<template>
  <div class="flex min-h-screen flex-col items-center bg-gray-100 py-1">
    <!-- Top Part -->
    <div
      class="w-full max-w-md rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 text-white shadow-xl"
    >
      <!-- Header Section -->
      <div class="mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm opacity-70">9:41</p>
        </div>
        <div class="flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-battery"
            >
              <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
              <line x1="22" x2="22" y1="11" y2="13" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wifi"
            >
              <path d="M12 20h.01" />
              <path d="M2 8.82a15 15 0 0 1 20 0" />
              <path d="M5 12.859a10 10 0 0 1 14 0" />
              <path d="M8.5 16.429a5 5 0 0 1 7 0" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path
                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm opacity-70">Good Morning 🌤</p>
          <h1 class="text-xl font-semibold">Devon Lane</h1>
        </div>
        <div>
          <i class="pi pi-search h-8 w-8"></i>
          <i class="pi pi-bell h-8 w-8"></i>
        </div>
      </div>

      <!-- Current Balance -->
      <div class="text-center">
        <p class="text-sm opacity-70">Current Balance in USD</p>
        <h2 class="my-2 text-4xl font-bold">$822.99</h2>
        <div class="flex items-center justify-center">
          <p
            class="w-[45%] rounded-3xl bg-slate-400 py-[5px] text-sm text-white sm:w-[28%]"
          >
            ▲ 5% ($23.80)
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mx-0 mt-6 flex justify-around sm:mx-12">
        <button
          class="rounded-full bg-white px-6 py-2 text-gray-800 transition-colors hover:bg-gray-200"
        >
          Deposit
        </button>
        <button
          class="rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-gray-800"
        >
          Withdraw
        </button>
        <button
          class="rounded-full border border-gray-600 px-4 py-2 transition-colors hover:bg-gray-600"
        >
          ...
        </button>
      </div>
    </div>

    <!-- Transactions Part -->
    <div class="w-full max-w-md bg-gray-100 p-5 shadow-md">
      <div class="mb-3 flex justify-between">
        <p class="font-semibold">Transaction</p>
        <a
          href="#"
          class="text-sm text-gray-400 transition-colors hover:text-black"
        >
          View all
        </a>
      </div>

      <!-- Transaction List -->
      <div class="space-y-4">
        <p class="text-sm text-gray-400">Today</p>

        <div class="flex items-center justify-between border-b pb-2">
          <div class="flex items-center">
            <div
              class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
            >
              <img
                :src="apple"
                alt="Apple Logo"
                class="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <p class="text-[14px] font-medium">Apple Pay</p>
              <p class="text-[12px] text-gray-400">08:03 PM, 12 November 24</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[14px]">- $17.88</p>
            <p class="text-[12px] text-red-400">-3.23%</p>
          </div>
        </div>

        <div class="flex items-center justify-between border-b pb-2">
          <div class="flex items-center">
            <div
              class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
            >
              <img
                :src="envato"
                alt="Envato Logo"
                class="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <p class="text-[14px] font-medium">Received from Envato</p>
              <p class="text-[12px] text-gray-400">09:00 AM, 12 November 24</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[14px]">+ $110.78</p>
            <p class="text-[12px] text-green-400">+2.21%</p>
          </div>
        </div>

        <p class="text-sm text-gray-400">Yesterday</p>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div
              class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-400"
            >
              <img
                :src="bitcoin"
                alt="Bitcoin Logo"
                class="w-full object-contain"
              />
            </div>
            <div>
              <p class="text-[14px] font-medium">Bitcoin</p>
              <p class="text-[12px] text-gray-400">04:30 PM, 11 November 24</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[14px]">- $46.00</p>
            <p class="text-[12px] text-red-400">-2.04%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Part -->
    <div
      class="flex w-full max-w-md items-center justify-around rounded-bl-3xl rounded-br-3xl bg-gray-200 py-4 shadow-md"
    >
      <div class="flex flex-col items-center justify-center">
        <i class="pi pi-home ml-4 h-8 w-8"></i>
        <span class="text-sm">Home</span>
      </div>
      <div class="flex flex-col items-center">
        <i class="pi pi-chart-bar ml-4 h-8 w-8"></i>
        <span class="text-sm">Analysis</span>
      </div>
      <div class="flex items-center justify-center rounded-full">
        <i class="pi pi-arrow-right-arrow-left ml-4 h-8 w-8"></i>
      </div>
      <div class="flex flex-col items-center">
        <i class="pi pi-wallet ml-4 h-8 w-8"></i>
        <span class="text-sm">Wallet</span>
      </div>
      <div class="flex flex-col items-center">
        <i class="pi pi-user ml-4 h-8 w-8"></i>
        <span class="text-sm">Account</span>
      </div>
    </div>
  </div>
</template>
