<template>
    <div>
        <Header />

        <div> {{ this.$store.state.data  }}</div>

        <div @click="get_user_data()" class="bg-green-200 p-2">
            {{ token }} 
        </div>
        <Footer />
    </div>
</template>
<script>
export default {
    data(){
        return {
            "msg" : "okay",
            "token" : this.$store.state.data.token
        }
    },
    mounted(){
        var aa = this.$store.state.data.token.auth_token
        console.log("raw token", aa)
        const payload = this.decodeJWT(aa)
        console.log("Payload here...", payload);
        this.$store.commit('data/DecodeToken', payload);         
    },

    methods : {
        decodeJWT(jwt) {
            console.clear()
            const parts = jwt.split('.');
            if (parts.length !== 3) {
                throw new Error("JWT must have three parts.");
            }

            console.log("base64Url",atob(parts[1]))
            const payload = JSON.parse(atob(parts[1]))

            return payload;
        },
        get_user_data() {
            var aa = this.$store.state.data.token.auth_token
            console.log("raw token", aa)
            const payload = this.decodeJWT(aa)
            console.log("Payload here...", payload);
            this.$store.commit('data/DecodeToken', payload);          
        }
    }
}
</script>