<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col h-screen">
      <Header />

      <div class="">
        <div class="bg-white shadow flex flex-items-center justify-between">
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
        </div>

        <FormKit
          type="form"
          v-model="edit_form"
          submit-label="Save"
          @submit="save"
        >
          <FormKit
            type="select"
            label="Select the type of Channelising Agency"
            name="ca_type"
            :options="['SCA', 'PSB', 'RRB', 'NBFS-MFI', 'Co-op Society']"
          />

          <FormKit
            type="text"
            name="name_of_ca"
            label="Name of CA"
            validation="required"
          />
          <FormKit
            type="text"
            name="duration"
            label="Duration"
            help="How long would you like to stay?"
            validation="required"
          />
          <FormKit
            type="number"
            name="price"
            label="Pricing"
            help="How much are you able to pay"
          />
        </FormKit>
      </div>

      <!-- Add new item form -->
      <div>
        <FormKit
          type="form"
          v-model="new_item_form"
          submit-label="Add"
          @submit="addNewItem"
        >
          <h2>Add new request</h2>
          <!-- The form fields are the same as the edit form -->
        </FormKit>
      </div>

      <hr />
      {{ basic_form }}
      <hr />
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.location }}</td>
            <td>{{ item.duration }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="gap-3 flex items-center justify-center">
                <button
                  class="px-2 py-1 text-xs bg-green-600 text-white rounded"
                  @click="edit(index)"
                >
                  Edit
                </button>
                <button
                  class="px-2 py-1 text-xs bg-red-600 text-white rounded"
                  @click="ddelete(index)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "success",

      edit_form: {},
      new_item_form: {},
      permissions: [],
      basic_form: {},
      items: [
        {
          location: "Mumbai",
          duration: "4-5 Months",
          price: 345,
        },
        {
          location: "Delhi",
          duration: "3-4 Months",
          price: 23,
        },
      ],
    };
  },
  methods: {
    save(values) {
      alert(JSON.stringify(values));
      // handle form submission here
    },
    edit(index) {
      this.edit_form = Object.assign({}, this.items[index]);
    },
    ddelete(index) {
      this.items.splice(index, 1);
    },
    addNewItem() {
      this.items.push(this.new_item_form);
      this.new_item_form = {};
    },
  },
};
</script>
