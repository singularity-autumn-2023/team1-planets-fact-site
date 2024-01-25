import type { LayoutServerLoad} from "./$types";
import { error, redirect } from '@sveltejs/kit';
export const load = (async () => { 
  
   
   const fetchPlanets = async () => { 
   
    try { 
      const res = await fetch('http://localhost:8081/api/v1/planets'); 
      if (!res.ok){
      throw new Error("Error response")
      }
      const data = await res.json(); 
      return data.data;
      
    } catch (error) { 
      console.error('Error fetching planets:', error); 
      return []; 
    } 

  }; 
  
 
  return { 
    planets: await fetchPlanets()
     
  }; 
  
}) satisfies LayoutServerLoad;