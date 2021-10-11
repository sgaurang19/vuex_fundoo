<template>
    <div>
        <div class="outer-container">
            <div class="main-container">
                
                <div class="signup-form">
                    <div class="heading-center">
                        
                         <Logo />
                        <h1>Reset Password</h1>
                        <p></p>
                    </div>
                    <form @submit.prevent="onSubmit">
                     <div class ="signup-input"> 
                        <div style="width:100%">
                            <!-- <Inputbox inputtype="password" alt='New Password' placeholder='New Password'/> -->
                           <Inputbox inputtype="password" alt='New Password' placeholder='New Password' v-model:data.sync="state.reset.n_password" v-bind:error="v$.reset.n_password.$error"/> 
                            <span id="error-msg" v-if="v$.reset.n_password.$error" class="error error-msg"> Password {{v$.reset.n_password.$errors[0].$message}}</span> 

                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox inputtype="password" alt='Confirm Password' placeholder='Confirm Password' v-model:data.sync="state.reset.n_confirm" v-bind:error="v$.reset.n_confirm.$error"/> 
                            <span id="error-msg" v-if="v$.reset.n_confirm.$error" class="error error-msg"> Password {{v$.reset.n_confirm.$errors[0].$message}}</span> 

                        </div>
                    </div>
                    
                    
                    <br><br>
                    <div class ="signup-input1"> 
                        
                        <div>&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" @click="resetpass()"> Submit </button>
                            
                        </div>
                    </div>
                    </form>
                </div>
               
            </div>
            
        </div>
    </div>
</template>

<script type=" module" src="./Resetpass.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Resetpass.scss';
</style>
