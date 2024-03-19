import React from 'react';
import Result from './Result';

function App() {
  return (
    <div className=" flex ">
      <div className='flex text-center center' >
        <div>
        <p className='text-2xl '>English Dictionary</p>
        <textarea name="" id="" cols="30" rows="10" className='border'/>
        <select name="" id="">
          <option value="">english</option>
        </select>
        


        </div>
      </div>
      <Result/>
    </div>
  );
}

export default App;
