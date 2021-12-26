<template>
    <span> 
        <base-dialog :show="!!error" title="An error occured" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Authenticating...">
            
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent>
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password</p>
                
                 <base-button @click.native="submitForm()">
                {{ submitButtonCaption }}
                </base-button>
                <base-button type="button" mode="flat" @click.native="switchAuthMode">
                {{ switchModeButtonCaption }}
                </base-button>
            </form>
            
        </base-card>
    </span>
</template>

<script>
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: { BaseDialog },
    data(){
        return {
            email: '',
            password:'',
            formIsValid:true,
            mode:'login',
            isLoading:false,
            error:null
        }
    },
    methods:{
        handleError(){
            this.error = null;
        },
        async submitForm(){
            this.formIsValid = true;
            this.isLoading = true;
            if(this.email==='' || !this.email.includes('@') || this.password.length < 6){
                this.formIsValid = false;
                this.isLoading = false
                return;
            }
            try{
                if(this.mode==='login'){
                    await this.$store.dispatch('login',{
                        email: this.email,
                        password: this.password
                    })
                }else{
                    await this.$store.dispatch('signup',{
                        email: this.email,
                        password: this.password
                    })
                }
            }catch(error){
                this.error = error.message || 'Failed to authenticate';
            }
            
            this.isLoading = false;
            const redirectUrl = '/'+(this.$route.query.redirect || 'coaches');
            this.$router.push(redirectUrl);

        },
        switchAuthMode(){
            
            if(this.mode === 'login'){
                this.mode = 'signup';
            }else{
                this.mode = 'login'
            }
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login';
            }else{
                return 'Signup';
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Sign Up Instead';
            }else{
                return 'Login Instead';
            }
        }
    }

}
</script>

<style scoped>
form {
  margin: 1rem;
  
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>