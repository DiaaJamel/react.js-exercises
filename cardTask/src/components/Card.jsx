import React from 'react'
import '../components/card.css'



function Card(props) {
    return (
        <div className="card">
                <div className='firstContainer'>
                <button><i class="fas fa-pen"></i></button>
                {/* <div><img src="https://image.freepik.com/free-photo/majestic-view-fantastic-starry-dark-sky-magnificent-carpathian-mountains-covered-with-evergreen-forest-snow-capped-peaks-distance-breathtaking-panorama-beauty-magic-nature_127089-4947.jpg" alt="Card Cover" width="300px" height="70px"/>
                </div> */}
                    <div className= 'imge'>
                        <img src={props.pic} alt="profile"/>
                    </div>
                </div>
            <div className='secondContainer'>
            <h4>{props.name}</h4>
            <h6>{props.address}</h6>
            <h5>{props.title}</h5>
            <p>{props.about}</p>
            <a href={props.instagram}><i class="fab fa-2x fa-instagram"></i></a>
            <a href={props.twitter}><i class="fab fa-2x fa-twitter"></i></a>
            <a href={props.github}><i class="fab fa-2x fa-github"></i></a>

            </div>
        </div>
    )
}

export default Card
