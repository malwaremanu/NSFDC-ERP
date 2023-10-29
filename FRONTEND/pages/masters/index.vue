<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col h-screen">
      <Header />

      <div class="">
        <header class="bg-white shadow flex flex-items-center justify-between">
          <div class="px-4 py-6">
            <h1
              class="text-3xl font-bold tracking-tight text-n-800 select-none"
            >
              Masters
            </h1>
          </div>
          <div
            v-if="permissions.includes('masters-admin')"
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
            <div class="rounded-md bg-n-200 m-2">
              <div class="text-n-900 font-semibold text-lg px-4 py-2">
                User Panel
              </div>
              <ul class="rounded-lg">
                <button @click="view = 0" class="side-item w-full text-left">
                  Channel Partners
                </button>

                <button @click="view = 1" class="side-item w-full text-left">
                  Datatable
                </button>

                <button @click="view = 1" class="side-item w-full text-left">
                  asdasd
                </button>

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
            <div v-if="view == 0">
              <Crud />
            </div>

            <div v-if="view == 1">
              <div class="px-4 py-2">
                <div class="select-none">
                  <div
                    class="px-4 py-2 bg-n-900 text-white text-xl rounded-t-xl hidden"
                  >
                    Open Requests
                  </div>

                  <div class="px-4 py-2 bg-green-500">Open Requests</div>

                  <table class="w-full">
                    <tr>
                      <th>Raised For</th>
                      <th>Raised By</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td><a href=""> asd </a></td>
                      <td></td>
                      <td>
                        <div class="flex items-center justify-center gap-2">
                          <button
                            class="px-2 py-1 text-xs rounded-md bg-n-700 hover:bg-n-600 text-white"
                          >
                            Edit
                          </button>
                          <button
                            class="px-2 py-1 text-xs rounded-md bg-red-700 hover:bg-red-600 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <hr />

                <div class="mt-5">
                  <div class="px-4 py-2 bg-yellow-500">Fullfilled Requests</div>
                  <table class="w-full">
                    <tr>
                      <th>Raised For</th>
                      <!-- <th>Raised By</th> -->
                      <th>Request Type</th>
                    </tr>
                    <tr>
                      <td><a href=""> asd </a></td>
                      <!-- <td>{{ t.raised_by }}</td> -->
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div v-if="view == 2">
              <Sca></Sca>
            </div>
          </div>
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
      view: 0,
      permissions: JSON.parse(localStorage.getItem("u")).permissions,
    };
  },
};
</script>
