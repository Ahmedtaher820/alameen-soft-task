<template>
  <div
    class="bg-white rounded-lg w-full grid grid-cols-12 lg:gap-8 gap-4 min-screen"
  >
    <!-- Header Section -->
    <div class="lg:col-span-2 sm:col-span-3 col-span-12">
      <div>
        <h2 class="text-lg font-semibold">Current Plan</h2>

        <div
          :class="`w-fit ${planStatus}  mt-2 text-white text-xs font-medium px-2 py-1 rounded`"
        >
          {{ subscriptionStatus }}
        </div>
      </div>
    </div>
    <div class="lg:col-span-6 sm:col-span-9 col-span-12">
      <div class="flex flex-col">
        <span
          class="w-fit bg-blue-100 text-blue-600 text-[14px] font-medium px-2 py-1 rounded"
          >Yearly</span
        >
        <p class="text-xs lg:text-sm text-gray-500 my-4">
          Estimated to start at <span class="font-medium">March 03, 2025</span>
        </p>

        <div class="w-32 lg:w-64"
        
        >
          <p
            class="text-sm font-semibold text-gray-600"
           
          >
            {{subscriptionStatus !== 'Active' ? 'Stopped':'Active'}}
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div class=" h-2 rounded-full "
            :class="subscriptionStatus !== 'Active' ? 'bg-red-500 w-[5%]':'bg-green-500 w-[95%]'"
            ></div>
          </div>
        </div>

        <!-- Warning Message -->
        <div
          class="flex flex-col lg:flex-row lg:gap-8 lg:mt-6 mt-3 lg:p-4 p-2 border-[1px] border-red-300 bg-red-100 text-zinc-700 rounded-lg text-sm md:w-3/4"
          v-if="subscriptionStatus !== 'Active'"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="-2 -3 24 24"
            >
              <path
                fill="#ef4444"
                d="m12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.2 3.2 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096m-2.22.839a1.077 1.077 0 0 0-1.514.365L2.365 13.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H16.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L10.933 2.817a1.1 1.1 0 0 0-.352-.365zM10 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1"
              />
            </svg>
          </span>
          <ul class="lg:list-disc text-xs lg:text-sm">
            <li>
              You have used your 7 grace days that ended on Oct 09, 2024, and
              did not pay for plan renewal.
            </li>
            <li>Your subscription is pending reactivation!</li>
            <li>Your users cannot log in to the system until plan renewal.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 col-span-12">
      <button
        class="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 lg:ml-auto block disabled:bg-blue-300"
        @click="renewPlan"
        :disabled="subscriptionStatus === 'Active'"
      >
        Renew plan
      </button>
      <div class="mt-6 flex flex-wrap ml-auto justify-end gap-3">
        <div
          class="flex flex-col gap-2 lg:flex-row lg:items-center space-x-1 w-[100%]"
        >
          <span class="text-gray-600 text-sm w-fit">Current Users</span>
          <div class="flex items-center justify-between flex-1">
            <div
              class="relative lg:w-24 w-20 bg-gray-200 h-3 rounded-full order-2 lg:order-1 lg:flex-1 lg:mx-6"
            >
              <div class="bg-blue-600 h-3 rounded-full w-3/4"></div>
            </div>
            <span class="text-gray-500 text-sm lg:order-2 order-1"
              >6 active of 8</span
            >
          </div>
        </div>

        <div class="bg-white shadow-sm border rounded-lg p-3 w-full">
          <div
            class="flex justify-between items-center border-b-[2px] border-zinc-100 pb-2"
          >
            <span class="text-gray-600 text-sm font-medium">Subscription</span>
            <span class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded"
              >Unpaid</span
            >
          </div>
          <div class="mt-2 text-sm text-gray-600 flex justify-between">
            <div class="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75" />
                </g>
              </svg>
              <span> Users </span>
            </div>
            <span class="font-medium">3</span>
          </div>
          <div class="mt-3 text-sm text-gray-600 flex justify-between">
            <div class="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"
                />
              </svg>
              <span> Apps </span>
            </div>
            <span class="font-medium">5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const daysAvaliable = ref(6);
const subscriptionStatus = ref("Pending");
const planStatus = computed(() => {
  switch (subscriptionStatus.value) {
    case "Pending":
      return "bg-yellow-500";
    case "Active":
      return "bg-green-500";
    case "Unpaid":
      return "bg-red-500";
    case "Stopped":
      return "bg-gray-500";
    default:
      return "bg-gray-300";
  }
});

const renewPlan = () => {
  subscriptionStatus.value = "Active";

  alert("Renew Plan action triggered!");
};
</script>
