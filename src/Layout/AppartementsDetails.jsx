import React from 'react'


function AppartementsDetails() {
  return (
    <div className='Appartements-page'>
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