<template>
    <div>
        <div class="warn" v-if="allNotes == '' ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/></svg>
                    <p>Your Archived notes appears here</p>
        </div>
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
                     <Icons v-bind:RouteActive="'Archived'" v-bind:Noteid="notes._id"/>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script type=" module" src="./Archivednotes.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Archivednotes.scss';
</style>
