import React from 'react'
import PropTypes from 'prop-types'

const Animals = ({
  setCatsCount,
  setTotalCount,
  setDogsCount,
  dogsPercent,
  catsPercent,
}) => {
  return (
    <div className='animals-container'>
      {/* Cats section */}
      <div className='cats'
      onClick={()=>{
        setTotalCount(prev=>prev+1);
        setCatsCount(prev=>prev+1);
      }}
      >
        <p>Cats</p>
        <p>{catsPercent.toFixed(1)}%</p>
      </div>
      <div className='dogs'
       onClick={()=>{
        setTotalCount(prev=>prev+1);
        setDogsCount(prev=>prev+1);
      ;
       }}
      >
        <p>Dogs</p>
        <p>{dogsPercent.toFixed(1)}%</p>
      </div>
    </div>
  )
}

Animals.propTypes = {
  setCatsCount:PropTypes.func.isRequired,
  setTotalCount:PropTypes.func.isRequired,
  setDogsCount:PropTypes.func.isRequired,
  catsPercent:PropTypes.number.isRequired,
  dogsPercent:PropTypes.number.isRequired
}

export default Animals