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
            details of that particular file numbers {{ details }}
          </div>
        </div>
        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        details : "asd"
      };
    },
    mounted(){        
        var id = this.$route.params.id
        console.log(id)
        if(id){
            this.details = id
        }        
    }
  };
  </script>
 