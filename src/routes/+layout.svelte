<script lang="ts" >
import type { LayoutData } from "./$types";
import "./global.css";
import Header from "$lib/Header.svelte"

    export let data:LayoutData; 
   
    console.log(data.planets); 
 
</script> 
 <Header data={data} />
 

<style> 
  
 
  </style> 
<slot/>