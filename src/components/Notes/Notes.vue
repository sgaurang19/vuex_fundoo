<template>
    <div>
        <div class="grid-notes" >
            <div class="Notes" v-for="notes in allNotes.slice().reverse()" :key="notes._id" :style="{backgroundColor :notes.color}">
               <!-- <p style="font-size:small" v-text="notes._id"></p> -->
               <div>
                   <h3 v-text="notes.title" ></h3>
                    <p v-text="notes.description"></p>
               </div>
                <div class="icons-empty">
                    
                    &nbsp;
                </div>
                <div class="icons">
                    
                     <Icons  v-bind:Noteid="notes._id"/>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script type=" module" src="./Notes.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Notes.scss';
</style>
