<template>
  <div class="grid grid-cols-12">
    <div class="flex col-span-9 lg:col-span-3 gap-3 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        @click="toggleSideBar"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-if="checkSideBarIsOpen"
      >
        <path
          fill="currentColor"
          d="M7 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-1.97 7.97L3.86 12.8H19a.8.8 0 0 0 0-1.6H3.86l1.17-1.17a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06M8 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        @click="toggleSideBar"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-else
      >
        <path
          fill="currentColor"
          d="M3 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1.25 6a.75.75 0 0 1 .75-.75h15.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H5a.75.75 0 0 1-.75-.75M4 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
        />
      </svg>
      <span>
        <span class="capitalize font-medium">
          {{
            route.path.split("/")[1] === "dashboard"
              ? "Home"
              : route.path.split("/")[1].split("-").join(" ")
          }}
        </span>
      </span>
    </div>
    <div class="relative lg:block hidden col-span-6">
      <input
        type="text"
        placeholder="Search"
        class="w-full pl-10 pr-4 py-2 text-gray-600 bg-gray-100 rounded-md focus:outline-none focus:ring-0 focus:border-none"
      />
      <svg
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
        />
      </svg>
    </div>
    <div class="col-span-3">
      <div class="flex items-center justify-end space-x-4">
        <div class="relative p-1 lg:p-2 bg-gray-100 rounded-xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"
            />
          </svg>
          <span
            class="absolute -top-2 -right-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full"
          >
            30
          </span>
        </div>

        <div class="relative p-1 lg:p-2 bg-gray-100 rounded-xl cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 11h2v2H7zm14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 7h14V5H5zm14 12V9H5v10zm-4-6v-2h2v2zm-4 0v-2h2v2zm-4 2h2v2H7zm8 2v-2h2v2zm-4 0v-2h2v2z"
            />
          </svg>
          <span
            class="absolute -top-2 -right-1 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full"
          >
            16
          </span>
        </div>

        <div class="relative p-1 lg:p-2 bg-gray-100 rounded-xl cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.149.78a2.043 2.043 0 0 1-1.44 1.18h-.046A1.944 1.944 0 0 1 12 22Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2Zm1.97-9h-2a8.672 8.672 0 0 0-3.39-6.57L18 2a9.9 9.9 0 0 1 2.825 3.486A11.52 11.52 0 0 1 21.97 10ZM4 10H2c.07-1.567.46-3.103 1.145-4.514A9.9 9.9 0 0 1 5.97 2l1.42 1.43A8.67 8.67 0 0 0 4 10Z"/></svg>
          <span
            class="absolute -top-2 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full"
          >
            95
          </span>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          class="w-10 h-10 rounded-xl"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["toggleSideBarEmit"]);
const checkSideBarIsOpen = ref(true);
const toggleSideBar = () => {
  emits("toggleSideBarEmit");
  checkSideBarIsOpen.value = !checkSideBarIsOpen.value;
};
const route = useRoute();
const checkRoute = computed(() => {
  return route.path.slice(1).split("/").length > 1;
});
</script>
