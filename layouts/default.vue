<template>
  <div class="grid grid-cols-12">
    <div
      class="bg-primary h-screen sidebar sidebar-open transition-transform duration-300 ease-in-out"
      ref="sidebar"
      :class="sidebarIsOpen ? 'lg:col-span-2' : ''"
      v-if="sidebarIsOpen"
    >
      <AppSideBar @toggleSideBarEmit="toggleSideBar" />
    </div>
    <!-- Overlay to close sidebar in sm screen -->
    <div
      @click="toggleSideBar"
      v-if="sidebarIsOpen"
      class="fixed top-0 left-0 w-full h-full bg-[#78787870] z-10 lg:hidden"
    ></div>

    <div
      class="bg-slate-100 min-h-screen"
      :class="sidebarIsOpen ? 'col-span-12 lg:col-span-10' : 'col-span-12 '"
    >
      <div class="px-6 py-4 border-zinc-200 bg-white">
        <AppNavBar @toggleSideBarEmit="toggleSideBar" />
      </div>
      <div
        class="px-6 py-4 border-t-[1px] ms-1 rounded-l-md bg-white border-b-2 capitalize"
        v-if="checkRoute"
      >
        {{
          route.path
            .split("/").slice(1)
            [route.path.split("/").slice(1).length - 1].split("-")
            .join(" ")
        }}
      </div>
      <div class="p-4">
        <div class="bg-white py-4 px-6 rounded-lg h-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const sidebar = ref(null);
const sidebarIsOpen = ref(true);
const toggleSideBar = () => {
  sidebarIsOpen.value = !sidebarIsOpen.value;
};
const checkRoute = computed(() => {
  return route.path.slice(1).split("/").length > 1;
});

//watch route to close sidebar when select link

watch(
  () => route.path,
  (val) => {
    
    if(window.innerWidth < 991 ){
      console.log('kd');
      
      toggleSideBar();
    } 
    
  }
);
</script>
<style>
.sidebar {
  transition: all 0.5s;
}
.sidebar.sidebar-close {
  display: none;
}
@media screen and (max-width: 1199px) {
  .sidebar.side-open {
    width: 16rem;
  }
}
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 300ms ease-in-out;
}

.sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active in <2.1.8 */ {
  width: 0px;
}
@media screen and (max-width: 999px) {
  .sidebar {
    position: fixed;
    left: 0px;
    top: 0px;
    inset: 0;
    width: 16rem;
    z-index: 999;
  }
}
</style>
