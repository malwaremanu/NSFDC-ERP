<template>
  <div>

    <div>
        
    </div>
    <div class="px-4 py-2">
      <div class="select-none">
        <div class="px-4 py-2 bg-n-900 text-white text-xl rounded-t-xl hidden">
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
</template>
