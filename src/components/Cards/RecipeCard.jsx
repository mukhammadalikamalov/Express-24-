import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <Box maxWidth={"md"} margin="auto" marginTop={6}>
      <Box marginBottom={4}>
        <Box
          width={319}
          height={"280px"}
          bgcolor={"#fff"}
          borderRadius={"20px 20px 20px 20px"}
          boxShadow={4}
          overflow="hidden"
        >
          <img style={{ width: "100%", height: "20vh", objectFit: "cover" }} src={strMealThumb} alt={strMeal} />

          <div style={{ padding: "10px", flexDirection: "column", display: "flex" }}>
            <h2>{strMeal}</h2>
            <span>{strCategory}</span>

            <NavLink to={`/store/${idMeal}`}>More</NavLink>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
