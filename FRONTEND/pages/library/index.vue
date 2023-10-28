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
          v-if="
            permissions.includes(
              'lib-admin'   
            )
          "
          @click="open = !open"
          class="m-auto px-4 py-2 bg-n-800 text-white hover:bg-n-700 hover:shadow-md rounded-full cursor-pointer select-none"
        >
          <span v-if="open"> Close </span>

          <span v-if="!open"> Open </span>
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
              <a href="{% url 'dashboard' %}">
                <li class="admin-item">Dashboard</li></a
              >
              <a href="{% url 'requests' %}"
                ><li class="admin-item">All Requests</li></a
              >
              <a href="{% url 'lib_index' %}"
                ><li class="admin-item">Search Books</li></a
              >
              <a href="{% url 'add_catalog' %}"
                ><li class="admin-item">Add Books</li></a
              >
              <a href="{% url 'request_new_catalog' %}"
                ><li class="admin-item">View Requests</li></a
              >
            </ul>
          </div>

          <div class="rounded-md bg-n-200 m-2">
            <div class="text-n-900 font-semibold text-lg px-4 py-2">
              User Panel
            </div>
            <ul class="rounded-lg">
              <a href="{% url 'dashboard' %}"
                ><li class="side-item">Dashboard</li></a
              >
              <a href="{% url 'lib_index' %}"
                ><li class="side-item">Search Books</li>
              </a>
              <a href="{% url 'my_requests' %}"
                ><li class="side-item">My Requests</li>
              </a>
              <!-- <li class="side-item">My Bag</li> -->
              <a href="{% url 'filter_books' category='hindi' %}"
                ><li class="side-item">Hindi</li></a
              >
              <a href="{% url 'filter_books' category='english' %}">
                <li class="side-item">English</li></a
              >
              <a href="{% url 'filter_books' category='reference' %}">
                <li class="side-item">Reference</li></a
              >
              <a href="{% url 'request_new_catalog' %}">
                <li class="side-item flex items-center">
                  Request New Book

                  <img
                    src="https://www.janabank.com/images/New-gif.gif"
                    alt=""
                    class="h-5"
                  /></li
              ></a>
            </ul>
          </div>
        </aside>

        <div class="col-span-10 m-4 p-2 bg-n-50/30 rounded-md">
          normal content
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      permissions : JSON.parse(localStorage.getItem('u')).permissions
    };
  },
};
</script>
