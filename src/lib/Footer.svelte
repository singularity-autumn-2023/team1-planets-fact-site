<script lang="ts">
    export let planet;
    function millisecondsToHours(milliseconds) {
        return (milliseconds / (1000 * 60 * 60)).toFixed(2); // 1 hour = 1000 milliseconds * 60 seconds * 60 minutes
    }
    function millisecondsToYears(milliseconds) {
        return (milliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2); // 1 year = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 365.25 days
    }
    function centimetersToKilometers(centimeters) {
        return (centimeters / 100000).toFixed(2);; // 1 kilometer = 100,000 centimeters
    }

    </script>
  <div class="footer">
<p class="footer-data"><span class="footer-item">Rotation time:</span>{millisecondsToHours(planet.rotation)} HOURS</p>
      
      <p class="footer-data"><span class="footer-item">Revolution time:</span>{millisecondsToYears(planet.revolution)} years</p>
      <p class="footer-data"><span class="footer-item">Radius:</span>{centimetersToKilometers(planet.radius)} km</p>
      <p class="footer-data"><span class="footer-item">Temperature:</span>{planet.temperature}°C</p>

  </div>
<style>
  .footer-item{
    color: #FFF;
    font-family: Spartan;
    font-size: 0.5rem;
    font-weight: 700;
    line-height: 1rem; /* 200% */
    letter-spacing: 0.04544rem;
    text-transform: uppercase;
    opacity: 0.5;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:0.7rem;
  }
  .footer-data{
    display: flex; 
    padding: 1rem; 
    justify-content: space-between;
    flex-direction: column;
     
  }
  .footer{
    margin-top: 1.69rem;
  }
  .footer-data{
    border: 1px solid rgba(255, 255, 255, 0.5);

    color: #FFF;
    font-family: Antonio;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.05625rem;
    text-transform: uppercase;
  }
  @media only screen and (min-width: 1024px){
    .footer{

      margin-top:10rem;
  }}
  </style>