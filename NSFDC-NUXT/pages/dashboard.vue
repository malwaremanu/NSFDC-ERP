<template>
    <div>
        <Header />

        <div> {{ this.$store.state.data  }}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            "msg" : "okay"
        }
    },

    methods : {

    }
}
</script>