<template>
  <div>
    
    <FormKit
        type="number"
        value="asd"
        label="Enter a number between 5-10"
    />
    {{  formSchema  }}
    <FormKitSchema :schema="formSchema" />

    <!-- ----- -->
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.status }}</td>
          <td>
            <button @click="editItem(index)">Edit</button>
            <button @click="deleteItem(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { FormKitSchema } from 'formkit';
import { FormKitSchema } from '@formkit/vue'

export default {
  data() {
    return {
      items: [
        {
          title: "Title1",
          desc: "Description for Title1",
          status: true,
        },
        {
          title: "Title2",
          desc: "Description for Title2",
          status: false,
        },
        {
          title: "Title3",
          desc: "Description for Title3",
          status: true,
        },
        {
          title: "Title4",
          desc: "Description for Title4",
          status: false,
        },
        {
          title: "Title5",
          desc: "Description for Title5",
          status: true,
        },
      ],
      form: {},
      formSchema: {
        title: {
          type: "text",
          label: "Title",
          required: true,
        },
        desc: {
          type: "text",
          label: "Description",
          required: true,
        },
        status: {
          type: "checkbox",
          label: "Status",
        },
      },
    };
  },
  components:['FormKitSchema'],
  methods: {
    handleSubmit() {
      if (this.form.index !== undefined) {
        this.items.splice(this.form.index, 1, this.form);
      } else {
        this.items.push({ ...this.form });
      }
      this.resetForm();
    },
    editItem(index) {
      this.form = { ...this.items[index], index };
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    resetForm() {
      this.form = {};
    },
  },
};
</script>

<style scoped></style>
