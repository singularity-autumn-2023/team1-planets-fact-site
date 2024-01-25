<script lang="ts">
  import type { PageData } from "./$types";
  import PlanetImage from "$lib/PlanetImage.svelte";
	import Footer from "$lib/Footer.svelte";

  export let data: PageData;
  $: planet = data.item;
  console.log("data from API", data.item);

  let selectedView = 'overview';
  function handleButtonClick(view) {
    selectedView = view;
  }
 
    
  
</script>

<picture>
  <PlanetImage {planet} { selectedView} />
</picture>

<div class="desktop-layout">
<span class="content">
  <div class="left-column">
    <p class="planet-name">{planet.name}</p>
    <div class="selected-content">
      {#if selectedView === 'overview'}
        <p>{planet.overview.content}</p>
        <p class="source">Source: <a href='{planet.overview.source}'>Wiki</a></p>
      {:else if selectedView === 'geology'}
        <p>{planet.geology.content}</p>
        <p class="source">Source: <a href='{planet.geology.source}'>Wiki</a></p>
      {:else if selectedView === 'structure'}
        <p>{planet.structure.content}</p>
        <p class="source">Source: <a href='{planet.structure.source}'>Wiki</a></p>
      {/if}
    </div>
  </div>
  <div class="right-column">
    <div class="btn-main">
      <button class="content-btn " on:click={() => handleButtonClick('overview')}><span class="btn-number">01</span>OVERVIEW</button>
      <button class="content-btn " on:click={() => handleButtonClick('structure')}><span class="btn-number">02</span>INTERNAL STRUCTURE</button>
      <button class="content-btn" on:click={() => handleButtonClick('geology')}><span class="btn-number">03</span>SURFACE GEOLOGY</button>
    </div>
  </div>
</span>
</div>
<footer>
 <Footer {planet} /> 
</footer>



<style>


  
 .source {
    margin-top: 2rem;
    color: #FFF;
    font-family: Spartan;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    opacity: 0.5;
    line-height: 1.5625rem;
  }

  .source a {
    font-weight: 700;
    text-decoration-line: underline;
  }

  .selected-content {
    margin-top: 1.5rem;
    font-family: Spartan Reg;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
  }

  .planet-name {
    color: #FFF;
    font-family: Antonio;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .btn-number {
    color: white;
  }

  .btn-main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: Spartan Reg;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5625rem; 
    letter-spacing: 0.16069rem;


  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
  }

  .left-column {
    flex: 1;
  }

  .right-column {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .content-btn {
    gap: 1rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: auto 1fr;
    padding: 0.5rem 0 0.5rem 1.5rem;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 17.5625rem;
    height: 2.5rem;
    background-color: transparent;
    color: #FFF;
  }
  .content-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  
  }
  .content-btn:active {
    background-color:#419EBB;
    transition-duration: 0.2s;
    
  }
  picture {
    margin-top: 17rem;
  }

  p {
    color: white;  
  }
  
  @media only screen and (min-width: 1024px){
    .content {
      flex-direction:column;
      justify-content:flex-end;
      position: absolute;
      top: 3rem; 
      margin-left:38.5rem;
      align-items:flex-start;
      padding-right:5rem;
      /* Adjust positioning as needed */
    }
    .btn-main{
   margin-top:2.4rem;
  }
  .planet-name{
    font-size: 5rem;
  }
  .selected-content {
    font-size: 0.875rem;
    line-height: 1.5625rem;
  }

  }
</style>
