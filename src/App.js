import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  return (
  <>
  <main>
    <div className='container'>
      <h3>Login Frequently Asked Questions(FAQ)</h3>
      <section>
        {data.map((p)=>{
          return <SingleQuestion key={p.id} {...p}/>
        })}
      </section>
    </div>
  </main>
  </>
  );
}

export default App;
