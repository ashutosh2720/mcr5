import React, { useState } from 'react'
import { recipes } from './recipieList'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from './Modal';
import EditModal from './EditModal';


const RecipieCard = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isEditOpen, setEditOpen] = useState(false)
    return (
        <div className='w-full h-[400px]  flex justify-center items-center  gap-5'>
            {
                recipes.map((item) =>
                    <div className="list w-[20%] min-h-[60%] rounded-md  flex flex-col justify-center p-2 gap-3 items-start shadow-lg" onClick={() => setEditOpen(!isEditOpen)} >
                        <div className="efit w-[100%] flex justify-end items-end gap-2">

                            {
                                isEditOpen && <EditModal />
                            }
                            <div className="edit-res" onClick={() => setEditOpen(!isEditOpen)}>
                                <EditIcon className='cursor-pointer text-gray-800' />
                            </div>
                            <DeleteIcon className='cursor-pointer text-gray-800' />
                        </div>
                        <img src={item.mediaUrl} alt="" className='w-[100%] h-[50%] rounded-md' />
                        <h1 className='text-xl font-bold'>{item.recipeName}</h1>
                        <h1 className=' font-bold flex'> cusine type ---  {item.cuisineType}</h1>
                        <h1 className=' font-bold flex'>ingredients ---- <h1 className='cursor-pointer'>See recipie</h1> &gt; </h1>
                        <h1 className=' font-bold flex'>Instructions ----  <h1 className='cursor-pointer'>See recipie</h1> &gt; </h1>

                    </div>
                )
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
    )
}

export default RecipieCard
