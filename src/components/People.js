import React from 'react';
import { useQuery } from 'react-query'; //manages async data
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/')
  //async so returns a promise, so need to wait till promise is 
  //resolved until i assign to this variable res, so need word 'await'

  return res.json();
}
const People = () => {
  const { data, status } =  useQuery('People', fetchPeople);
  console.log(data);
  //first argument is a string for this query
 //sewcond is an async function to go grab that data
  return (
    <div>
      <h2>People</h2>
      {/* <p>{ status }</p> */}

      { status === 'loading' && (
        <div>Loading data...</div>
      )}

      { status === 'error' && (
        <div>Error fetching data</div>
      )}

      { status === 'success' && (
        <div>
          { data.results.map(person => <Person key={person.name} person={person} />)}
        </div>
      )}    
    </div>
  )
}


export default People;