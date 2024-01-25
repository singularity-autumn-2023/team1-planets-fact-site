import type {PageServerLoad} from "./$types";

export const load :PageServerLoad =async({fetch, params}) => { 
    
     
    const res = await fetch(`http://localhost:8081/api/v1/planets/${params.id}`); 
    if (!res.ok){
        throw new Error("Error response")
        }
    const item =await res.json(); 
    
        return{ 
            
            item, 
        }; 
    
    };

  


