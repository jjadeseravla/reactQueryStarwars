import React, {useState } from 'react';
import { useQuery } from 'react-query'; //manages async data
import Planet from './Planet';

const fetchPlanets = async (key, greeting, page)=> {
  console.log(greeting); //grabs once when refresh the page cos getting data for first times, grabs again when press page cos it tries to get latest data
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  //async so returns a promise, so need to wait till promise is 
  //resolved until i assign to this variable res, so need word 'await'

  return res.json();
}
const Planets = () => {

  const [page, setPage] = useState(1);
  //everytime useQuery hook finds fetchPlant function it will call greeting console.log
   const { data, status } = useQuery(['planets', 'hello', 2], fetchPlanets);
  // const { data, status } =  useQuery(['planets', 'hello'], fetchPlanets, {
  //   staleTime: 2000, //query remains fresh for 2 secs before it becomes stale
  //   casheTime: 10, //use cashedata.  There are onSuccess property to fire a function when success status
  //   onSuccess: () => console.log('data fetched successfully'), //an a function on error and you can print to DOM so user can see when goes wrong
  // });
  //  console.log(data);
  
  //first argument is a string for this query
 //second is an async function to go grab that data
 //third - obj that represents the config
  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      <button onClick={() => setPage(1)}></button>
      <button onClick={() => setPage(2)}></button>
      <button onClick={() => setPage(3)}></button>

      { status === 'loading' && (
        <div>Loading data...</div>
      )}

      { status === 'error' && (
        <div>Error fetching data</div>
      )}

      { status === 'success' && (
        <div>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
        </div>
      )}    
    </div>
  )
}


export default Planets;