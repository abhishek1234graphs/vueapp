<template>
    <base-card>
        <h2>
            Find Your Coach
        </h2>
        <span class="filter-options">
            <input type="checkbox" id="frontend" v-model="filters['frontend']" />
            <label for="frontend">frontend</label>
        </span>
        <span class="filter-options">
            <input type="checkbox" id="backend" v-model="filters['backend']"  />
            <label for="backend">backend</label>
        </span>
        <span class="filter-options">
            <input type="checkbox" id="career" v-model="filters['career']"   />
            <label for="career">career</label>
        </span>
        <span class="filter-options">
            <input type="checkbox" id="selectAll" v-model="shouldSelectAll" @change="modifySelectAll"/>
            <label for="selectAll">Select/Deselect All Filters</label>
        </span>
    </base-card>
</template>

<script>
export default {
    emits:['change-filter'],
    data(){
        return {
            filters:{
                frontend:false,
                backend:false,
                career:false
            },
            shouldSelectAll:false,
            abhishek:null
        }
    },
    computed:{
        
    },
    watch:{
        filters:{
            handler(newValue, oldValue){
                console.log('abhi')
                this.$emit('change-filter',this.filters)
                if(newValue['frontend'] && newValue['backend'] && newValue['career']){
                    this.shouldSelectAll = true;
                }else{
                    this.shouldSelectAll = false;
                }
            },
            deep: true
        },
        /*
        shouldSelectAll:function(newValue,oldValue){
            
        }*/
    },
    methods:{
        modifySelectAll(event){
            if(this.shouldSelectAll){
                this.filters = {
                    frontend:true,
                    backend:true,
                    career:true
                }
            }else{
                this.filters = {
                    frontend:false,
                    backend:false,
                    career:false
                }
            }
            console.log('Wow')
            
            this.$emit('change-filter',this.filters)
        },
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            
            
            const updatedFilters = {
                ...this.filters,
                [inputId]:isActive
            };
            console.log(updatedFilters)
            this.filters = updatedFilters;
            this.$emit('change-filter',updatedFilters)
            if(!isActive){
                this.shouldSelectAll = false;
            }else{
                console.log(this.filters['frontend'] , this.filters['backend'],this.filters['career'])
                if(this.filters['frontend'] && this.filters['backend'] && this.filters['career']){
                    this.shouldSelectAll = true;
                    console.log('hello')
                }
            }
            console.log(this.shouldSelectAll)
        },
        performActionOnSelectAll(){
            this.shouldSelectAll = !this.shouldSelectAll;
            let updatedFilters;
            if(this.shouldSelectAll){
                updatedFilters = {
                    frontend:true,
                    backend:true,
                    career:true
                };
            }else{
                updatedFilters = {
                    frontend:false,
                    backend:false,
                    career:false
                };
            }
            
            this.filters = updatedFilters;
            this.$emit('change-filter',updatedFilters)
        },
        shouldCheck(id){
                return this.shouldSelectAll || this.filters[id];
        }
        
    }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>