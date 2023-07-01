import React, { useState } from 'react'
import Nav from '../components/Nav'
import RecipieCard from '../components/RecipieCard'
import { useNavigate } from "react-router-dom";
import { useGlobalRecipe } from '../contexts/recipeContext'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Filter from '../components/Filter'
import Modal from '../components/Modal';

const Home = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false)
    const [isEditOpen, setEditOpen] = useState(false)

    function onClose() {
        setEditOpen(false)
    }
    const { allRecipes, filteredData } = useGlobalRecipe()
    return (
        <div className={'px-6 py-8 w-full'}>
            <Filter />
            <div className="all-recipe pt-6">
                <h1 className={'text-2xl font-bold'}>All Recipies: {name}</h1>
                <div className="all-recipe flex gap-4 flex-wrap">
                    {
                        filteredData.map((recipe) => (
                            <RecipieCard key={recipe.id} recipe={recipe} />
                        ))
                    }
                    <div className="add">
                        <div className="add" onClick={() => setIsOpen(!isOpen)}>
                            <AddCircleOutlineIcon fontSize='large' className='font-bold cursor-pointer' />
                            {
                                isOpen && <Modal />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
