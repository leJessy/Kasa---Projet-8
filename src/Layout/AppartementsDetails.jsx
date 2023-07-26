import React from 'react'

function AppartementsDetails() {
  return (
    <div className='Appartements-page'>
        <div>
            <img src="banner2.png" alt="Banner Appart" />
        </div>
        <div className="Appartements-page__flats">
            <div className='Appartements-page__title'>
                <h1>Crazy loft on Canal Saint Martin</h1>
                <h2>Paris, ile de France</h2>
                <div className="adjectifs">
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
            </div>
            <div className='Appartements-page__details'>
                <div className="Appartements-page__owner">
                    <h3>
                        <span>Alexandre</span>
                        <span>Dumas</span>
                    </h3>
                    <img src="profile-picture-12.jpg" alt="" className='Appartements-page__details__photo' />
                </div>
                <div className="Appartements-page__details__ratings">
                    <span className='Full'>★</span>
                    <span className='Full'>★</span>
                    <span className='Full'>★</span>
                    <span className='Empty'>★</span>
                    <span className='Empty'>★</span>
                </div>
            </div>
        </div>
        <div className="Menu_Colapse">
            <div className='Appartements-page__description'>
                <p className='description__title'>
                    Description
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
            <div className='Appartements-page__equipements'>
                <p className='equipements__title'>
                    Equipements
                    <i className="fa-solid fa-chevron-up"></i>
                    </p>
                <p className='equipements__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis iste sunt, distinctio laborum necessitatibus doloremque est? Mollitia inventore maiores praesentium soluta, illum ab deleniti sunt voluptatum sit necessitatibus aliquam cumque sint totam itaque ad harum obcaecati officiis corrupti distinctio. Deserunt veniam cumque pariatur exercitationem aut ipsam obcaecati consequatur a.</p>
            </div>
        </div>
    </div>
  )
}

export default AppartementsDetails