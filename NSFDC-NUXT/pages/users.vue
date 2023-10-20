<template>
    <div>
      <h1>Users CRUD</h1>
      <form @submit.prevent="addUser">
        <input v-model="newUser.username" placeholder="Username" required />
        <input v-model="newUser.email" type="email" placeholder="Email" required />
        <button type="submit">Add User</button>
      </form>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ user.username }} - {{ user.email }}
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        newUser: {
          username: '',
          email: '',
        },
      };
    },
    async created() {
      await this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://your-api-url-here/users');
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async addUser() {
        try {
          const response = await axios.post('https://your-api-url-here/users', this.newUser);
          this.users.push(response.data);
          this.newUser = { username: '', email: '' };
        } catch (error) {
          console.error(error);
        }
      },
      async deleteUser(userId) {
        try {
          await axios.delete(`https://your-api-url-here/users/${userId}`);
          this.users = this.users.filter(user => user.id !== userId);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  