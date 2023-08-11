import React, { useState } from 'react'


function AppartementsCollapse({ appartment }) {
    const [descriptionDisplayed, setDescriptionDisplayed] = useState();
    const [equipmentsDisplayed, setEquipmentsDisplayed] = useState();

    
  return (
    <div className='Appartements-page'>
        <div className="Menu_Colapse">
            <div className='Appartements-page__description'>
                <p className='description__title'>
                    Description
                    <i onClick={() => setDescriptionDisplayed(!descriptionDisplayed)} className={descriptionDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                </p>
                <p className={descriptionDisplayed ? 'description__content' : 'hidden'}>{appartment.description}</p>
            </div>
            <div className='Appartements-page__equipements'>
                <p className='equipements__title'>
                    Equipements
                    <i onClick={() => setEquipmentsDisplayed(!equipmentsDisplayed)} className={equipmentsDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                    </p>
                <p className={equipmentsDisplayed ? 'equipements__content' : 'hidden'}>
                        {appartment.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                        ))}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AppartementsCollapse