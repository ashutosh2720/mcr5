import React from 'react'
import Nav from '../components/Nav'
import RecipieCard from '../components/RecipieCard'

const Home = () => {
    return (
        <div className='w-full flex flex-col gap-10'>
            <Nav />
            <RecipieCard />
        </div>
    )
}

export default Home
