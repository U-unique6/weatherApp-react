import React, { useEffect, useState } from "react";
import './Style.css';
import { FaLocationDot } from 'react-icons/fa6';
import { ImCross} from 'react-icons/im';
const Tempapp=()=>{

    const [city , setcity]=useState(null);
    const [search , setsearch]=useState("");

    useEffect(()=>{

        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bad871a69c4b87bd5d947db4e1777463`;
            const response = await fetch(url);
             const resJson =  await response.json();
           setcity(resJson.main)
        }
        fetchApi();
    } , [search]);

    const cancel=(event)=>{
       setsearch("")

    }
    return(
        <>
        
        <div className="box d-flex flex-column justify-content-center align-items-center">
        <h1 className="main_heading m-3">Weather App</h1>
        <div className="input d-flex flex-column align-items-center">
            <div className="inputData text-center">
                <input type="search"
                className="inputField mt-4 p-2 px-4"
                placeholder="Enter the City Name"
                value={search}
                onChange={(event)=>{
                    setsearch(event.target.value);
                    
                }}
                />
                <div className="cross">
                    <ImCross onClick={cancel}/>
                </div>
                </div>
            {
                !city ? (<p className="mt-4">No Data Found</p>) :
                <div className="info d-flex justify-content-center flex-column align-items-center">
            <h2 className="location"><FaLocationDot className="icon"/> {search}</h2>
            <h1 className="temp">
               {city.temp} &deg;C
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min} &deg;C | Max : {city.temp_max} &deg;C</h3>
        </div> 
            }
        
        </div>
        </div>
        </>
    )
}

export default Tempapp;