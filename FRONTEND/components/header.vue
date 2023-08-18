<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<template>
    <div>
        <div class="flex items-center p-4 justify-between">
            <div>
                <img src="~/assets/images/logo.png" />
            </div>
            <div class="flex items-center p-2 justify-between gap-4">
                <div class="flex gap-4">
                    <div class="bg-n-900 rounded-full text-white p-2 cursor-pointer">
                        <svg class="h-5 w-5 text-white font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                    </div>

                    <div class="bg-violet-900 rounded-full text-white p-2 cursor-pointer">
                        <svg class="h-5 w-5 text-white font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                    </div>
                </div>
                <nuxt-link to="employees" >
                    <div class="text-lg font-semibold"> MANUPAL CHOUDHARY</div>
                    <div class="text-xs text-right">JUNIOR EXECUTIVE - IT</div>
                </nuxt-link>

                <nuxt-link to="logout" 
                    class="px-4 py-2 bg-red-800 hover:bg-red-600 cursor-pointer text-white flex items-center gap-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    logout
                </nuxt-link>
            </div>
        </div>
        <div class="bg-n-900 text-white px-3 flex items-center uppercase">

            <div class="hover:bg-n-700 px-4 py-2 cursor-pointer"
             v-for="h in hlinks" ::key="h">
                {{  h  }}
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hlinks : [
                "dashboard",
                "Library",
                "HR & Admin",
                "finance",
                "MIS",
                "Investment and assets"
            ]
        }
    },
}
</script>
