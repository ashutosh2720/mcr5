import React, { useState } from "react";
import { recipes } from "./recipieList";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "./Modal";
import EditModal from "./EditModal";

import { useNavigate } from "react-router-dom";

const RecipieCard = ({ recipe }) => {
    const navigate = useNavigate();
    const [isEditOpen, setEditOpen] = useState(false);

    function onClose() {
        setEditOpen(false);
    }
    return (
        <div
            className={"recipe-card w-60 p-2 shadow shadow-black/40 rounded relative"}
        >
            <div className="edit-delete-icon absolute flex gap-2 text-2xl bg-white right-0">
                <div className="edit cursor-pointer" onClick={() => setEditOpen(true)}>
                    <EditIcon />
                    {isEditOpen && <EditModal onClose={onClose} />}
                </div>
                <div className="delete">
                    <DeleteIcon />
                </div>
            </div>
            <img
                src={recipe.mediaUrl}
                alt="recipe-img"
                className={"w-full aspect-square rounded cursor-pointer"}
                onClick={() => navigate(`/recipe-detail/${recipe.id}`)}
            />
            <h1 className={"text-lg font-bold line-clamp-1"}>{recipe.recipeName}</h1>
            <p className={"w-full flex justify-between pr-6"}>
                <b>Cuisine Type:</b> {recipe.cuisineType}
            </p>
            <p className={"w-full flex justify-between"}>
                <b>Ingredients: </b>{" "}
                <span className={"cursor-pointer"}>See Recipe &gt; </span>
            </p>
            <p className={"w-full flex justify-between"}>
                <b>Instructions: </b>{" "}
                <span className={"cursor-pointer"}>See Recipe &gt; </span>
            </p>
        </div>
    );
};

export default RecipieCard;
