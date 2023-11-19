<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col h-screen">
      <Header />

      <header class="bg-white shadow flex flex-items-center justify-between">
        <div class="px-4 py-6">
          <h1 class="text-3xl font-bold tracking-tight text-n-800 select-none">
            Corporate Social Responsibilities
          </h1>
        </div>
      </header>

      <div class="grid grid-cols-12 select-none min-h-screen w-full">
        <aside class="min-w-64 col-span-2 m-2" aria-label="Sidebar">
          <div class="rounded-md bg-n-200 m-2">
            <div class="text-n-900 font-semibold text-lg px-4 py-2">
              Navigation
            </div>
            <ul class="rounded-lg">
              <li class="side-item" @click="c_choose('Proposal')"> Proposal </li>
              <li class="side-item" @click="c_choose('Sanctions')"> Sanctions </li>
              <li class="side-item" @click="c_choose('Disbursal')">Disbursal</li>
              <li class="side-item" @click="c_choose('Reports')">Reports</li>
            </ul>
          </div>
        </aside>

        <div class="col-span-10 p-2">
        <div>
          <table class="p-4 mt-2">
            <tbody>
              <tr>
                <th class="rounded-tl-md">File No.</th>
                <th>Name</th>
                <th>Location</th>
                <th>Cost</th>
                <th>Summary</th>
                <th>Agency Name</th>
                <th>Receipt Date</th>
                <th>DPE Theme</th>
                <th>ASP Dist</th>
                <th class="rounded-tr-md" >Maker</th>
              </tr>
              <tr v-for="item in items" :key="item.file_no" class="text-center">
                <td>{{ item.file_no }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.cost }}</td>
                <td>{{ item.summary }}</td>
                <td>{{ item.agency_name }}</td>
                <td>{{ item.receipt_date }}</td>
                <td>{{ item.dpe_theme }}</td>
                <td>{{ item.asp_dist }}</td>
                <td>{{ item.maker }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
// Assuming 'items' contains the data from Django model passed to the Vue component
export default {
  data() {
    return {
      items: [
        {
          file_no: 1,
          name: "File One",
          location: "Location One",
          cost: 100,
          summary: "Summary One",
          agency_name: "Agency One",
          receipt_date: "2023-12-23",
          dpe_theme: true,
          asp_dist: false,
          maker: "Manupal Choudhary",
          // ... Fill in other fields with sample data
        },
        {
          file_no: 2,
          name: "File Two",
          location: "Location Two",
          cost: 200,
          summary: "Summary Two",
          agency_name: "Agency Two",
          receipt_date: "2023-12-23",
          dpe_theme: false,
          asp_dist: true,
          maker: "Karn Choudhary",
          // ... Fill in other fields with sample data
        },
      ], // Assign Django model data to this variable
    };
  },
};
</script>

<style scoped>
.button {
  @apply m-auto px-4 py-2 bg-n-800 text-white hover:bg-n-700 hover:shadow-md rounded-full cursor-pointer select-none;
}
</style>
