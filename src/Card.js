import React, { useEffect, useState } from 'react'
import './card.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function Card() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/card')
            setPeople(response.data)

        }
        fetchData()
    }, [])

    const swiped = (dir, name) => {
        console.log('removing' + name);
    }
    const outOffFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className='card_content'>
            <div className='card_div'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOffFrame(person.name)}
                    >
                        <div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Card