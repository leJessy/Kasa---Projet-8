import React from 'react'

function AppartementsBanner(props) {
  return (
        <div className='appartementsbanner'>
            <img src={props.image} alt="Banner Appart" />
        </div>
  )
}

export default AppartementsBanner