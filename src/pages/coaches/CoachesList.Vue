<template>
    <span>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{coach.firstName}}
            </li>
        </ul>
        <h3 v-else>No Coaches</h3>
    </span>
</template>

<script>
export default {
    created(){
        console.log('Hello')
    },
    computed:{
        filteredCoaches(){
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>