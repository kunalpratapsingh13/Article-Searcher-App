import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

const Search = () => {
    const [value,setValue]=useState("");
    const [results,setResults] = useState([]);

    useEffect(
        ()=>{
            let timerid = null;
            if (value){
                timerid = setTimeout( async()=>{
                    const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                        params : {
                            action : "query",
                            list : "search",
                            origin : "*",
                            format : "json",
                            srsearch : value
                        }
                    });

                    setResults(data.query.search);
                }, 1000);
            }

            return () =>{
                clearTimeout(timerid);
            }
        },[value]);

    return (
        <React.Fragment>
        <form className="ui form">
            <input 
                type = "test" 
                placeholder="Wikipedia Search..." 
                value={value} 
                onChange={
                    (e)=>setValue(e.target.value)
            }></input>
        </form>
        <List results={results} />
        </React.Fragment>
    );
}

export default Search;