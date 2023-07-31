import React, { useState } from 'react'

function AboutDetails() {
  const [reliabilityDisplayed, setReliabilityDisplayed] = useState();
  const [respectDisplayed, setRespectDisplayed] = useState();
  const [serviceDisplayed, setServiceDisplayed] = useState();
  const [securityDisplayed, setSecurityDisplayed] = useState();
  
  return (
    <div className="aboutus-page">
        <div className='BannerAbout'>
            <img src="/banner2.png" alt="Banner About Us" />
        </div>
        <div className="Menu_Colapse__about">
            <div className='About-page__fiabilite'>
                <p className='fiabilite__title'>
                    Fiabilité
                    <i onClick={() => setReliabilityDisplayed(!reliabilityDisplayed)} className={reliabilityDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                </p>
                <p className={reliabilityDisplayed ? 'fiabilite__content' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
            <div className='About-page__respect'>
                <p className='respect__title'>
                    Respect
                    <i onClick={() => setRespectDisplayed(!respectDisplayed)} className={respectDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                    </p>
                <p className={respectDisplayed ? 'respect__content' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
            <div className="About-page__service">
                <p className="service__title">
                    Service
                    <i onClick={() => setServiceDisplayed(!serviceDisplayed)} className={serviceDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                </p>
                <p className={serviceDisplayed ? 'service__content' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
            <div className="About-page__securite">
                <p className="securite__title">
                    Securité
                    <i onClick={() => setSecurityDisplayed(!securityDisplayed)} className={securityDisplayed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                </p>
                <p className={securityDisplayed ? 'securite__content' : 'hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
        </div>
    </div>
    
    
  )
}

export default AboutDetails