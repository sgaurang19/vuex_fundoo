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
                            <Inputbox alt='First Name' placeholder='First Name' error="error"/>
                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                           <Inputbox alt='Last Name' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                             <Inputbox alt='Username' placeholder='Username'/> 
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
                             <Inputbox alt='Password' placeholder='Password'/> 
                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                            <Inputbox alt='Confirm' placeholder='Confirm'/>
                        </div>
                    </div>
                    
                    <div class ="signup-input"> 
                        <div>
                            <p class="hint">Use 8 or more characters with a mix of letters, <br> numbers &amp; symbols </p>
                        </div>
                        
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <input type="checkbox" id="showpass" name="showpass" value="showpass">
                    <label for="showpass">Show Password</label><br>
                            <!-- <p class="hint">You can use letters, numbers and peroids </p> -->
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
                            <p class="bold-text"><a><router-link to="/login">Sign in instead</router-link></a> </p>
                        </div>
                        <div class="hide">&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" @click="adduser1()"> Sign-up </button>
                    
                        </div>
                    </div>
                </div>
                <div class="logo-img-signup">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc">
                    <p class="logo-line">One account. All of Fundoo <br> working for you.</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script type=" module" src="./SignUp.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './SignUp.scss';
</style>
