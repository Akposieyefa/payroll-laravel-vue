<template>

</template>

<script>
export default {
    name: "Verify",
    async created() {
        const url = window.location.href;
        const token_id =  url.slice(url.indexOf("=")+1, url.length);
        const config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token: token_id})
        }
        const response = await fetch('verify-account',config);
        await this.$router.push('/')
    },
}
</script>

<style scoped>

</style>
