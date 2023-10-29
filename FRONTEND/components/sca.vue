<template>
  <div class="p-3">
    <div class="flex items-center justify-between gap-3 p-2">
      <div>

      </div>
      <div>
        <span>search value: </span>
        <input type="text" v-model="searchValue" class="px-3 py-2 bg-gray-100 text-sm outline-none"/>
      </div>
    </div>

    <div>
      <EasyDataTable
        table-class-name="tailwindcss"
        :headers="headers"
        :items="items"
        alternating        
        :search-value="searchValue"
        show-index
        @click-row="show_row"
      >
      

      </EasyDataTable>

    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: {
        location: "New York City",
        duration: "2 weeks",
        price: "average",
      },      
      searchValue: "",
      headers: [
        { text: "PLAYER", value: "player", sortable: true },
        { text: "TEAM", value: "team", sortable: true },
        { text: "NUMBER", value: "number", sortable: true },
        { text: "POSITION", value: "position", sortable: true },
        { text: "HEIGHT", value: "indicator.height", sortable: true },
        { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
        { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
        { text: "COUNTRY", value: "country" },
        { text: "ACTION", value: "operation" },
      ],
      items: [
        {
          player: "Stephen Curry",
          team: "GSW",
          number: 30,
          position: "G",
          indicator: { height: "6-2", weight: 185 },
          lastAttended: "Davidson",
          country: "USA"
        },
        {
          player: "Lebron James",
          team: "LAL",
          number: 6,
          position: "F",
          indicator: { height: "6-9", weight: 250 },
          lastAttended: "St. Vincent-St. Mary HS (OH)",
          country: "USA",
        },
        {
          player: "Kevin Durant",
          team: "BKN",
          number: 7,
          position: "F",
          indicator: { height: "6-10", weight: 240 },
          lastAttended: "Texas-Austin",
          country: "USA",
        },
        {
          player: "Giannis Antetokounmpo",
          team: "MIL",
          number: 34,
          position: "F",
          indicator: { height: "6-11", weight: 242 },
          lastAttended: "Filathlitikos",
          country: "Greece",
        },
      ],
    };
  },
  methods: {
    save(x) {
      alert(JSON.stringify(x));
    },
    show_row(x){
      alert(JSON.stringify(x))
    }
  },
};
</script>

<style>
.tailwindcss {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #000000;
}
</style>
