<template>
    <span>
        <base-dialog :show="!!error" title="An error occured!" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <coach-filter @change-filter="setFilters"></coach-filter>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
                <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as Coach</base-button>
                <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register">Register as Coach</base-button>
            </div>
            <div v-if="isLoading"><base-spinner></base-spinner></div>
            <ul v-else-if="hasCoaches">

                <coach-item v-for="coach in filteredCoaches" 
                :key="coach.id" 
                :id="coach.id" 
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
                ></coach-item>
            </ul>
            <h3 v-else>No Coaches</h3>
        </base-card>
        
    </span>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
    components: {
        CoachItem,
        CoachFilter,
        BaseButton
    },
    data(){
        return {
            isLoading:false,
            activeFilters:{
                frontend:false,
                backend:false,
                career:false
            },
            error:null
        }
    },
    created(){
        console.log('Hello')
        this.loadCoaches();
    },
    computed:{
        isLoggedIn(){
            return this.$store.getters.isAuthenticated
        },
        filteredCoaches(){
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if(this.activeFilters.frontend){
                    if(coach.areas.includes('frontend'))
                        return true;
                }
                if(this.activeFilters.backend){
                    if(coach.areas.includes('backend'))
                        return true;
                }
                if(this.activeFilters.career){
                    if(coach.areas.includes('career'))
                        return true;
                }
                return false
            } )
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        }
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(){
            this.isLoading = true;
            try{    
                await this.$store.dispatch('coaches/loadCoaches');
            }catch(error){
                this.error = error.message
            }
            
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>