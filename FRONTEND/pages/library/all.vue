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

                        <table style="width:100%">
                            <tr>
                                <th>Book Title</th>
                                <th>Acc. No.</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>

            <!-- Footer -->
            <Footer />

        </div>

    </div>
</template>