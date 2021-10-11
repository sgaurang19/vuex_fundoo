<template>
    <div>
        <div class="outer-container">
            <div class="main-container">
                
                <div class="signup-form">
                    <div class="heading-center">
                        
                         <Logo />
                        <h1>Sign in</h1>
                        <p> Use your Fundoo Account</p>
                    </div>
                    <form @submit.prevent="onSubmit">
                     <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox alt='Username' idofInput="username" nameofInput="username" placeholder='Username' v-model:data.sync="state.username"  v-bind:error="v$.username.$error" />
                            <span id="error-msg" v-if="v$.username.$error" class="error error-msg"> Username {{v$.username.$errors[0].$message}}</span> 
                            <span id="error-msg" v-else-if="!v$.username.$error" class="min-height">  &nbsp; </span> 

                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox inputtype="password" alt='Password' idofInput="password" nameofInput="password" placeholder='Password' v-model:data.sync="state.password" v-bind:error="v$.password.$error" error_msg="{{v$.password.$errors[0].$message}}"/>
                            <span id="error-msg" v-if="v$.password.$error" class="error error-msg"> Password {{v$.password.$errors[0].$message}}</span> 
                            <span id="error-msg" v-else-if="!v$.password.$error" class="min-height">  &nbsp; </span> 

                           
                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <div class="half-input">
                            <p class="bold-text"> <a><router-link to="/forgetpassword">Forget Password?</router-link></a></p>
                        </div>
                        </div>
                    </div>
                    
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <p>Not your computer? Use Guest mode to sign in privately.</p>
                            <!-- <p class="hint">You can use letters, numbers and peroids </p> -->
                            <div class="half-input">
                            <p class="bold-text"> Learn more</p>
                        </div>
                        </div>
                    </div>
                        <!-- <input type="text" class="half-input" v-model="userdata.fname" id="fname" placeholder="First Name">
                <label alt='Placeholder' placeholder='Adaptive Placeholder'></label>

                    <input type="text" class="half-input" v-model="userdata.lname" id="lname" placeholder="Last Name">

                    <input type="text" class="full-input" v-model="userdata.username" id="username" placeholder="Username">
                    <p class="hint">You can use letters, numbers and peroids </p>

                    <input type="text" class="half-input" v-model="userdata.pass" id="pass" placeholder="Password">
                    <input type="text" class="half-input" v-model="userdata.cpass" id="cpass" placeholder="Confirm Password">
                    <input type="checkbox" id="showpass" name="showpass" value="showpass">
                    <label for="showpass">Show Password</label><br>
                    <p class="hint">Use 8 or more characters with a mix of letters, numbers &amp; symbols </p> -->
                    <br><br>
                    <div class ="signup-input1"> 
                        <div class="half-input">
                            <p class="bold-text"> <a><router-link to="/signup">Create account</router-link></a></p>
                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" type="submit" @click="login()"> Login </button>
                            
                        </div>
                    </div>
                    </form>
                </div>
               
            </div>
            
        </div>
    </div>
</template>

<script type=" module" src="./Login.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Login.scss';
</style>
