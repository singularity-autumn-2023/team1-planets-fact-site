<!-- PlanetImage.svelte -->
<script lang="ts">
  export let planet;
  export let selectedView;
import geologyEarth from "../routes/planets/assets/geology-earth.png";
import geologyMars from "../routes/planets/assets/geology-mars.png";
import geologyJupiter from "../routes/planets/assets/geology-jupiter.png";
import geologyMercury from "../routes/planets/assets/geology-mercury.png";
import geologySaturn from "../routes/planets/assets/geology-saturn.png";
import geologyUranus from "../routes/planets/assets/geology-uranus.png";
import geologyNeptune from "../routes/planets/assets/geology-neptune.png";
import geologyVenus from "../routes/planets/assets/geology-venus.png";

import planetEarthInternal from "../routes/planets/assets/planet-earth-internal.svg";
import planetMarsInternal from "../routes/planets/assets/planet-mars-internal.svg";
import planetMercuryInternal from "../routes/planets/assets/planet-mercury-internal.svg";
import planetNeptuneInternal from "../routes/planets/assets/planet-neptune-internal.svg";
import planetUranusInternal from "../routes/planets/assets/planet-uranus-internal.svg";
import planetSaturnInternal from "../routes/planets/assets/planet-saturn-internal.svg";
import planetJupiterInternal from "../routes/planets/assets/planet-jupiter-internal.svg";
import planetVenusInternal from "../routes/planets/assets/planet-venus-internal.svg";

import planetEarth from "../routes/planets/assets/planet-earth.svg";
import planetMars from "../routes/planets/assets/planet-mars.svg";
import planetMercury from "../routes/planets/assets/planet-mercury.svg";
import planetNeptune from "../routes/planets/assets/planet-neptune.svg";
import planetUranus from "../routes/planets/assets/planet-uranus.svg";
import planetSaturn from "../routes/planets/assets/planet-saturn.svg";
import planetJupiter from "../routes/planets/assets/planet-jupiter.svg";
import planetVenus from "../routes/planets/assets/planet-venus.svg";

const determineOverviewImageSrc = (planetId) => {
    switch (planetId.toLowerCase()) {
      case "mars":
        return planetMars;
      case "earth":
        return planetEarth;
      case "jupiter":
        // Add similar lines for other planets
        return planetJupiter;
      case "mercury":
        return planetMercury;
      case "saturn":
        return planetSaturn;
      case "uranus":
        return planetUranus;
      case "neptune":
        return planetNeptune;
      case "venus":
        return planetVenus;
    }
  };

  const determineStructureImageSrc = (planetId) => {
    switch (planetId.toLowerCase()) {
      case "mars":
        return planetMarsInternal;
      case "earth":
        return planetEarthInternal;
      case "jupiter":
        return planetJupiterInternal;
      case "mercury":
        return planetMercuryInternal;
      case "saturn":
        return planetSaturnInternal;
      case "uranus":
        return planetUranusInternal;
      case "neptune":
        return planetNeptuneInternal;
      case "venus":
        return planetVenusInternal;
    }
  };
  const determineGeologyImageSrc = (planetId) => {
    switch (planetId.toLowerCase()) {
      case "mars":
        return geologyMars;
      case "earth":
        return geologyEarth;
      case "jupiter":
        return geologyJupiter;
      case "mercury":
        return geologyMercury;
      case "saturn":
        return geologySaturn;
      case "uranus":
        return geologyUranus;
      case "neptune":
        return geologyNeptune;
      case "venus":
        return geologyVenus;
      
    }
  };
</script>

<div class="image-container">
  
    <div class="image-wrapper">
  {#if selectedView === "geology"}
    <img
      src={determineGeologyImageSrc(planet.id)}
      alt={planet.name}
      class="geology-img"
    />
  {/if}

  {#if selectedView === "structure"}
    <img 
      src={determineStructureImageSrc(planet.id)}
      alt={planet.name}
      class="structure-img"
    />
  {/if}

  {#if selectedView === "overview"}
    <img 
      src={determineOverviewImageSrc(planet.id)}
      alt={planet.name}
      class="overview-img"
    />
  {/if}
  {#if selectedView !== "overview" && selectedView === "geology"}
    <img
      src={determineOverviewImageSrc(planet.id)}
      alt={planet.name}
      class="overview-img"
    />
  {/if}
</div>
</div>
<style>
  
.image-container {
  margin-top: 7.75rem;
  padding: 0 12.6rem;
  display: flex;
  position: relative;
  justify-content: center;
}

.image-wrapper {
    position: relative;
  }
.structure-img{
  width: 100%;
}
.overview-img{
  width: 100%;
}

.geology-img{
  width: 40%;
  position: absolute;
  margin-top: 10rem;
  margin-left: 5.7rem;
  /* padding: 0 5.4rem; */

}

@media only screen and (min-width: 1024px){
  .image-container {
      margin-top: 7.75rem;
      padding: 0rem 0rem;
      width: 25rem;
      height: 25rem;
      display: flex;
      margin-left:10rem;
      justify-content: flex-start;
    }

}
</style>

