<template>
    <div>
        <div class="h-2 bg-n-900 font-semibold"></div>
        <div class="grid grid-cols-2 ">
            <div>
                <img class="min-h-screen object-cover"
                    src="https://images.unsplash.com/photo-1633410195091-bd66114cef5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="">
            </div>
            <div>
                <div class="mx-auto mt-20">
                    <img class="mx-auto max-h-[250px]" src="~/assets/images/loginpage.png" />

                    <div class="grid grid-cols-5">
                        <div></div>
                        <div class="col-span-3">
                            <div class="text-xl mt-10 text-center font-semibold">ERP Login Panel</div>
                            <div class="text-align-left px-4 py-2">
                                <div>Username</div>
                                <input type="text" class="input" />
                            </div>
                            <div class="text-align-left px-4 py-2">
                                <div>Password</div>
                                <input type="password" class="input" />
                            </div>

                            <div class="text-align-left px-4 py-2 flex items-center gap-2 justify-between">
                                <nuxt-link to="dashboard" class="px-4 py-2 bg-n-900 text-white rounded-md hover:shadow-xl">
                                    Submit </nuxt-link>
                                <button class="px-4 py-2 text-blue-900 rounded-md hover:underline"> forgot username or
                                    password ? </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  