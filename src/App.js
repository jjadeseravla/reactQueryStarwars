import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'; //manages async data
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();


function App() {

  const [page, setPage] = useState('planets');

  return (
    <QueryClientProvider client={queryClient}>
     <>
      <div className="App">
      <h1> SW info</h1>
        <Navbar setPage={setPage}/>
        <div className="content">
            { page === 'planets' ? <Planets/> : <People/>}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/> 
    </>
    </QueryClientProvider>
  );
}

export default App;
