import React from 'react';
import CountUp from 'react-countup';

function Counter({end, duration}){
  return(
    <div>
      <CountUp start={0} end={end} duration={duration}/>
    </div>
  )
}

export default Counter;