<template>
    <div>
        <div class="outer-container">
            <div class="main-container">
                
                <div class="signup-form">
                    <div class="heading-center">
                         <Logo />
                        <h1>Find your email</h1>
                        <p>Enter your phone number or recovery email</p>
                    </div>
                     <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox alt='Phone number or email' placeholder='Phone number or email' error=""/>
                           
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
                        
                        <div >&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" onclick= "location.href='http://localhost:8080/resetpassword'"> <!--<router-link to="/resetpassword">Next</router-link> --> Next </button>
                            
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    </div>
</template>

<script type=" module" src="./Forgetpass.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Forgetpass.scss';
</style>
