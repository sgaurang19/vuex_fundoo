<template>
    <div class ="signup-input"> 
        <div style="width:100%">
            <input :class="[error ? 'input-text' : '']" :id="idofInput" :name="nameofInput" v-model="inputData" @keyup="$emit('update:data', inputData);" required='' :type="inputtype" >
            <label class="input-label" :alt="alt" :placeholder="placeholder"></label>
            <!-- <span id="error-msg" :class="[error ? 'error error-msg' : 'hide-error']"> {{msg}} {{error_msg}}</span>  -->
        </div>
    </div>
</template>
<script type=" module" src="./Inputbox.js">
// import axios from 'axios';

</script>
<style scoped lang="scss">
@import './Inputbox.scss';
</style>
