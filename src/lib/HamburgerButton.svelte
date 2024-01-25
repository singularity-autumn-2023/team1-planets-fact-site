<script lang="ts">
	
  import {toggleMenu} from "./Header.svelte";
</script>
<button on:click={toggleMenu} class="hamburger"> 
    <svg class="hamburger-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none"> 
      <g opacity="0.248746"> 
      <rect width="24" height="3" fill="white"/> 
      <rect y="7" width="24" height="3" fill="white"/> 
      <rect y="14" width="24" height="3" fill="white"/> 
      </g> 
    </svg> 
  </button> 
<style>
  .hamburger-svg,button{ 
    display: none; 
  } 
  @media only screen and (max-width: 765px)/**mobile*/ 
 { 
 .hamburger-svg,button { 
     display: inline-block;  } 
     .hamburger{ 
   border: none; 
   opacity: 0.2487; 
   background-color: transparent; 
   display: flex; 
  
 } }
</style>