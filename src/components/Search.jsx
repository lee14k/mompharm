import { useState, useEffect } from "react";

export default function Search () {
    const [drugName, setDrugName] = useState('')
    const [response, setResponse] = useState (null)

  
    const handleSubmit =  (event )=>{
        event.preventDefault()
        const url=`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${drugName}`
        fetch (url)
        .then(response=>response.json())
        .then(data=> setResponse(data))
        
    }


    const filterObject = (filterParam) => {
        const filteredResults = response.results.filter(result => result[filterParam]);
        return filteredResults.map(result => result[filterParam]);
      };
    return (
        <div>
        <input
            type="text"
            value={drugName}
            onChange={(e)=> setDrugName(e.target.value)}
        />
       <button onClick={handleSubmit}>Search</button>
       {response && (
        <div>
           <h2>Pregnancy Info</h2> 
           
           <p>
           {
           filterObject("pregnancy_or_breast_feeding").concat(filterObject("pregnancy"))
           }
           </p>

           
           </div>
       )}
       </div>
    )
       }