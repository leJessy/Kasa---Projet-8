import React from 'react'

function AppartementsSpec(props) {



  return (
  
        <div className="Spec-page">
            <div className="Spec-page__flats">
                <div className='Spec-page__title'>
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                    <div className="tags">
                        <p>Cozy</p>
                        <p>Canal</p>
                        <p>Paris 10</p>
                    </div>
                </div>
                <div className='Spec-page__details'>
                    <div className="Spec-page__owner">
                        <h3>
                            <span>Alexandre</span>
                            <span>Dumas</span>
                        </h3>
                        <img src="profile-picture-12.jpg" alt="" className='Spec-page__details__photo' />
                    </div>
                    <div className="Spec-page__details__ratings">
                        <span className='Full'>★</span>
                        <span className='Full'>★</span>
                        <span className='Full'>★</span>
                        <span className='Empty'>★</span>
                        <span className='Empty'>★</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AppartementsSpec