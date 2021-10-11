<template>
    <div>
        <div class="outer-container">
            <div class="main-container">
                
                <div class="signup-form">
                    <!-- <p class="logo-text">
                        <span class="LT-blue">F</span>
                        <span class="LT-red">u</span>
                        <span class="LT-yellow">n</span>
                        <span class="LT-blue">d</span>
                        <span class="LT-green">o</span>
                        <span class="LT-red">o</span>

                    </p> -->
                   <Logo />
                    <h1>Create Your Fundoo account</h1>
                    <div class ="signup-input"> 
                        <div class="half-input">
                            <Inputbox alt='First Name' placeholder='First Name' v-model:data.sync="state.user.firstname"  v-bind:error="v$.user.firstname.$error"/>
                            <span id="error-msg" v-if="v$.user.firstname.$error" class="error error-msg"> First Name {{v$.user.firstname.$errors[0].$message}}</span> 

                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                           <Inputbox alt='Last Name' placeholder='Last Name' v-model:data.sync="state.user.lastname"  v-bind:error="v$.user.lastname.$error"/>
                            <span id="error-msg" v-if="v$.user.lastname.$error" class="error error-msg"> Last Name {{v$.user.lastname.$errors[0].$message}}</span> 

                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                             <Inputbox alt='Username' placeholder='Username' v-model:data.sync="state.user.username"  v-bind:error="v$.user.username.$error"/> 
                            <span id="error-msg" v-if="v$.user.username.$error" class="error error-msg"> Username {{v$.user.username.$errors[0].$message}}</span> 

                            <!-- <p class="hint">You can use letters, numbers and peroids </p> -->
                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div>
                           <p class="hint">You can use letters, numbers and peroids </p>
                            <p class="bold-text"> Use my current email address instead</p>

                        </div>
                        
                    </div>
                    <div class ="signup-input"> 
                        <div class="half-input">
                             <Inputbox v-bind:inputtype="showpass ? 'text' : 'password'" alt='Password' placeholder='Password' v-model:data.sync="state.user.password"  v-bind:error="v$.user.password.$error"/> 
                            <span id="error-msg" v-if="v$.user.password.$error" class="error error-msg"> Password {{v$.user.password.$errors[0].$message}}</span> 

                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                            <Inputbox v-bind:inputtype="showpass ? 'text' : 'password'" alt='Confirm' placeholder='Confirm' v-model:data.sync="state.user.confirm"  v-bind:error="v$.user.confirm.$error"/>
                            <span id="error-msg" v-if="v$.user.confirm.$error" class="error error-msg"> Confirm password {{v$.user.confirm.$errors[0].$message}}</span> 

                        </div>
                    </div>
                    
                    <div class ="signup-input"> 
                        <div>
                            <p class="hint">Use 8 or more characters with a mix of letters, <br> numbers &amp; symbols </p>
                        </div>
                        
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <input type="checkbox" id="showpass" name="showpass" value="showpass" v-model="showpass">
                    <label for="showpass">Show Password</label><br>
                            <!-- <p class="hint">You can use letters, numbers and peroids </p> -->
                        </div>
                    </div>
                        
                    <br><br>
                    <div class ="signup-input1"> 
                        <div class="half-input">
                            <p class="bold-text"><a><router-link to="/login">Sign in instead</router-link></a> </p>
                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" @click="signup()"> Sign-up </button>
                    
                        </div>
                    </div>
                </div>
                <div class="logo-img-signup">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc">
                    <p class="logo-line">One account. All of Fundoo <br> working for you.</p>
                </div>
            </div>
            
        </div>
        <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" v-model:data.sync="showSnackbar" md-persistent>
            <span>Connection timeout. Showing limited messages!</span>
            <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
        </md-snackbar>

    </div>
</template>

<script type=" module" src="./SignUp.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './SignUp.scss';
</style>
