import React,{useEffect} from "react";
import './Main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import img1 from '../../Assets/img/img(1).jpg'
import img2 from '../../Assets/img/img(2).jpg'
import img3 from '../../Assets/img/img(3).jpg'
import img4 from '../../Assets/img/img(4).jpg'
import img5 from '../../Assets/img/img(5).jpg'
import img6 from '../../Assets/img/img(6).jpg'
import img7 from '../../Assets/img/img(7).jpg'
import img8 from '../../Assets/img/img(8).jpg'
import img9 from '../../Assets/img/img(9).jpg'
import img10 from '../../Assets/img/img(10).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img5,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img6,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img7,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img8,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img9,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 4,
        imgSrc: img10,
        destTitle: 'IBora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities.'
    },
]


const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main