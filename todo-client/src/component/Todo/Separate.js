import {useQuery, gql} from '@apollo/client';
import React, { useEffect, useState } from "react";
import './Separate.css'

const LOAD_NOTES = gql`
  query Query {
  getNotes {
    id
    todo
    status
  }
}`;

function Separate() {
    const { error, loading, data } = useQuery(LOAD_NOTES, {pollInterval: 500});
    
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
    if (!loading) {
        if (data) {
            setNotes(data.getNotes)  
        }  
    }   
    }, [data, loading]);
  

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
  
    console.log(data);
    console.log(loading);
    console.log(error);
  
    return (
    <div className={"separateelement"}>
      <div> 
        <div>
          <h1>Completed</h1>
            {" "}
            {notes.map((val) => {
                if (val.status) {
                  return <p> {val.todo}</p>;
              }
            })}
        </div>
     </div> 
    </div>
      
    );
  }
export default Separate
