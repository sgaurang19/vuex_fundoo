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
                     <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox inputtype="password" alt='New Password' placeholder='New Password'/>
                           
                        </div>
                    </div>
                    <div class ="signup-input"> 
                        <div style="width:100%">
                            <Inputbox inputtype="password" alt='Confirm Password' placeholder='Confirm Password'/>
                           
                        </div>
                    </div>
                    
                    
                    <br><br>
                    <div class ="signup-input1"> 
                        
                        <div>&nbsp;</div>
                        <div class="half-input">
                    <button class="button1" @click="adduser1()"> Submit </button>
                            
                        </div>
                    </div>
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
