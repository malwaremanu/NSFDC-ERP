<template>
    <div>
        <div>


        </div>

        <center>
            <div class="p-5">
                <img src="~/assets/images/logo.png" />
            </div>

            <div>
                <img class="w-1/3" src="~/assets/images/logout.png" />
            </div>

            <div class="text-2xl text-white p-3">
                <div class="bg-green-200 text-green-600 w-1/2 mx-auto p-3 rounded-xl"> 
                    You have been logged out successfully.
                </div>                
            </div>

            <div class="pt-5">
                <p>{{ countdownMessage }}</p>
            </div>


        </center>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: 5,
            countdownMessage: ''
        };
    },
    created() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            this.countdownMessage = `Page is redirecting in ${this.countdown} seconds...`;

            const countdownInterval = setInterval(() => {
                this.countdown -= 1;
                this.countdownMessage = `Page is redirecting in ${this.countdown} seconds...`;

                if (this.countdown <= 0) {
                    clearInterval(countdownInterval);
                    this.$router.push('/login');
                }
            }, 1000); // Update every second (1000 milliseconds)
        }
    }
};
</script>