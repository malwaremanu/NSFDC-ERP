<template>
    <div class="flex flex-col min-h-screen">

        <div class="flex flex-col h-screen">

            <Header />

            <div class="p-4 bg-gradient-to-r from-n-700 via-purple-500 to-pink-500 font-semibold text-2xl  text-white">
                Library
            </div>

            <!-- Main Content Area -->
            <div class="flex flex-1 overflow-hidden">
                <!-- Sidebar -->
                <div class="sidebar bg-n-200 h-full w-1/4 text-n-900 ">
                    <ul class="rounded-xl">
                        <li class="items">List of Books</li>
                        <li class="items">Hindi Books</li>
                        <li class="items">English Books</li>
                        <li class="items">My Bag</li>                        
                    </ul>
                </div>

                <!-- Content Area -->
                <div class="flex-1 overflow-y-auto bg-white p-8">
                    <!-- Your main content goes here -->
                    <div>
                        <div class="grid grid-cols-3">
                            <div class="p-3">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                <div class="">
                                    <input type="text" name="price" id="price" class="input" placeholder="0.00">
                                </div>
                            </div>
                            <div class="p-3">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                <div class="">
                                    <input type="text" name="price" id="price" class="input" placeholder="0.00">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Footer -->
            <Footer />

        </div>
       
    </div>
</template>