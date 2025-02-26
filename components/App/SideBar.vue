<template>
  <div
    class="h-full  bg-white shadow-lg p-5 flex flex-col shadow-xl shadow-gray-300"
  >
    <!-- Logo -->
    <div class="text-xl font-bold flex items-center space-x-2 flex justify-between items-center">
      <NuxtImg src="/logo.png" class="w-36" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer block lg:hidden"
        @click="toggleSideBar"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        
      >
        <path
          fill="#ef4444"
          d="M3 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1.25 6a.75.75 0 0 1 .75-.75h15.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H5a.75.75 0 0 1-.75-.75M4 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
        />
      </svg>
     
    </div>

    <!-- Navigation -->
    <nav class="mt-6 flex flex-col gap-2">
      <NuxtLink
        to="/dashboard"
        class="flex items-center p-2 gap-1 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-md transition"
        :class="{
          'bg-gray-100 text-blue-600 font-semibold': isActive('/dashboard'),
        }"
      >
        <CommonIconesHome />
        Home
      </NuxtLink>

      <div>
        <button
          @click="toggleMenu('subscription')"
          class="flex items-center gap-1 text-[14px] font-medium p-2 text-gray-600 w-full hover:bg-gray-50 rounded-md"
          :class="{ 'bg-gray-100': $route.path.includes('subscription') }"
        >
          <CommonIconesStar />

          Subscription
          <CommonIconesChevron
            class="w-4 h-4 ml-auto transition-transform"
            :class="{ 'rotate-180': openMenu === 'subscription' }"
          />
        </button>
        <div
          v-if="openMenu === 'subscription'"
          class="pl-6 space-y-1 mt-2 collapse-item relative"
        >
          <NuxtLink
            v-for="sub in subscription"
            :key="sub.name"
            :to="sub.path"
            class="block py-2 ps-3 text-gray-600 text-[13px] font-medium hover:bg-zinc-600 hover:text-white rounded-md"
            :class="{
              'bg-zinc-800 text-white font-semibold': isActive(sub.path),
            }"
          >
            {{ sub.name }}
          </NuxtLink>
        </div>
      </div>
      <NuxtLink
        to="/app-center"
        class="flex items-center text-[14px] font-medium p-2 gap-1 text-gray-600 hover:bg-gray-50 rounded-md"
        :class="{
          'bg-gray-100 font-semibold': isActive('/app-center'),
        }"
      >
        <CommonIconesCard />
        App Center
      </NuxtLink>
      <span
        class="text-zinc-400 text-sm font-medium flex items-center px-3 text-gray-600 rounded-md"
        >Account</span
      >
      <NuxtLink
        to="/profile"
        class="flex items-center gap-1 text-[14px] font-medium p-2 text-gray-600 hover:bg-gray-50 rounded-md"
        :class="{
          'bg-gray-100 font-semibold': isActive('/profile'),
        }"
      >
        <CommonIconesUserProfile />
        My Profile
      </NuxtLink>

      <NuxtLink
        to="/business-profile"
        class="flex items-center gap-1 text-[14px] font-medium p-2 text-gray-600 hover:bg-gray-50 rounded-md"
        :class="{
          'bg-gray-100 font-semibold': isActive('/business-profile'),
        }"
      >
        <CommonIconesBusinessBag />

        Business Profile
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const emits = defineEmits(["toggleSideBarEmit"]);

const route = useRoute();
const openMenu = ref(null);

const subscription = [
  { name: "My Plan", path: "/subscription/my-plan" },
  { name: "Previous", path: "/subscription/previous" },
  { name: "Payment Method", path: "/subscription/payment-method" },
];

const toggleMenu = (menu) => {
  openMenu.value = openMenu.value === menu ? null : menu;
};

const isActive = (path) => route.path.startsWith(path);


const toggleSideBar = () => {
  emits("toggleSideBarEmit");
};
</script>
<style>
.collapse-item::before {
  content: "";
  position: absolute;
  left: 10px;
  height: 100%;
  width: 2px;
  background-color: #f1f1f1;
}
</style>
