<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col h-screen">
      <Header />

      <header class="bg-white shadow flex flex-items-center justify-between">
        <div class="px-4 py-6">
          <h1 class="text-3xl font-bold tracking-tight text-n-800 select-none">
            Library Management System
          </h1>
        </div>
        <div
          class="m-auto px-4 py-2 bg-n-800 text-white hover:bg-n-700 hover:shadow-md rounded-full cursor-pointer select-none">
          Admin Panel
        </div>
      </header>

      <div class="grid grid-cols-12 select-none min-h-screen">
        <aside class="min-w-64 col-span-2 m-2" aria-label="Sidebar">
          <div v-show="open" class="rounded-md bg-yellow-200 m-2">
            <div class="text-yellow-900 font-semibold text-lg px-4 py-2">
              Admin Panel
            </div>
            <ul class="rounded-lg">
              <a href="#">
                <li class="admin-item">Dashboard</li></a
              >
              <a href="requests"
                ><li class="admin-item">All Requests</li></a
              >
              <a href="lib_index"
                ><li class="admin-item">Search Books</li></a
              >
              <a href="add_catalog"
                ><li class="admin-item">Add Books</li></a
              >
              <a href="request_new_catalog"
                ><li class="admin-item">View Requests</li></a
              >
            </ul>
          </div>

          <div class="rounded-md bg-n-200 m-2">
            <div class="text-n-900 font-semibold text-lg px-4 py-2">
              User Panel
            </div>
            <ul class="rounded-lg">
              
              <li class="side-item">Dashboard</li>              
              <li class="side-item" @click="c_choose('RequestsComponent')">My Requests</li>
              <li class="side-item" @click="c_choose('SearchComponent')">Search</li>
              <li class="side-item" @click="c_choose('Hindi')">Hindi</li>
              <li class="side-item" @click="c_choose('English')">English</li>

<!-- 
              <a href="my_requests"
                >
              </a>
              <a href="filter_books"
                ><li class="side-item">Hindi</li></a
              >
              <a href="filter_books">
                <li class="side-item">English</li></a
              >
              <a href="filter_books">
                <li class="side-item">Reference</li></a
              >
              <a href="request_new_catalog">
                <li class="side-item flex items-center">
                  Request New Book

                  <img
                    src="https://www.janabank.com/images/New-gif.gif"
                    alt=""
                    class="h-5" /></li
              ></a> -->
            </ul>
          </div>
        </aside>

        <div class="col-span-10 m-4 p-2 bg-n-50/30 rounded-md">
          

          <div v-if="show_c == 'SearchComponent'">
            <SearchComponent />
          </div>

          <div v-if="show_c == 'RequestsComponent'">
            <RequestsComponent />
          </div>

          <div v-if="show_c == 'Hindi'">
            <Hindi />
          </div>

          <div v-if="show_c == 'English'">
            <English />
          </div>
          
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>

import SearchComponent from '~/components/library/search.vue';
import RequestsComponent from '~/components/library/requests.vue';
import English from '~/components/library/english.vue';
import Hindi from '~/components/library/hindi.vue';

export default {
  data() {
    return {
      show_c : null
    };
  },
  components: {
    SearchComponent, RequestsComponent, Hindi, English
  },
  methods: {   
    c_choose(s){
      this.show_c = s
    } 
  }
};
</script>