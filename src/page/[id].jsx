import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, CardContent } from "@mui/material";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/layout/layout";
function FoodById() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Layout>
      <div style={{ display: "flex", marginLeft: "10%", maxWidth: "md" }}>
        <div style={{ flex: "1", marginRight: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton aria-label="back">
              <ArrowBackIcon /> orqaga
            </IconButton>
          </Link>

          <div style={{ position: "relative" }}>
            <img
              style={{
                width: "65%",
                height: "50vh",
                borderRadius: "20px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <h2
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateX(-50%)",
                zIndex: "1",
                fontSize: "50px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              {recipe.strMeal}
            </h2>
            <div
              style={{
                position: "absolute",
                top: "77%",
                left: "24%",
                gap: "10px",
                width: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
              }}
            >
              <button
                style={{
                  width: "20%",
                  height: "5vh",
                  borderRadius: "40px",
                  border: "none",
                  backgroundColor: "#f5f5dc",
                }}
              >
                4.6
              </button>
              <button
                style={{
                  width: "70%",
                  height: "5vh",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#f5f5dc",
                  marginRight: "10px",
                }}
              >
                Fast Food
              </button>
              <button
                style={{
                  width: "100%",
                  height: "5vh",
                  borderRadius: "40px",
                  border: "none",
                  fontSize: "15px",
                  backgroundColor: "#f5f5dc",
                }}
              >
                Yetkazish Vaqti . 60-70 min
              </button>
              <button
                style={{
                  width: "20%",
                  height: "5vh",
                  borderRadius: "40px",
                  border: "none",
                  backgroundColor: "#f5f5dc",
                }}
              >
                I
              </button>
              <button
                style={{
                  width: "20%",
                  height: "5vh",
                  borderRadius: "40px",
                  border: "none",
                  backgroundColor: "#f5f5dc",
                }}
              >
                I
              </button>
            </div>
          </div>

          <input
            style={{
              width: "65%",
              height: "6vh",
              borderRadius: "10px",
              color: "gray",
              marginTop: "2%",
              borderColor: "gray",
            }}
            type="search"
            placeholder="Muassasa bo'yicha qidirish"
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Tanlanganlar
            </button>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Aksiya
            </button>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Tanlanganlar
            </button>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Fast Food
            </button>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Pizza
            </button>
            <button
              style={{
                width: "8%",
                height: "5vh",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#f5f5dc",
                marginRight: "10px",
              }}
            >
              Fast Food
            </button>
            <button
              style={{ width: "8%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Pizza
            </button>
          </div>

          {/* <p style={{ width: "65%", marginTop: "10px", maxWidth: "md" }}>{recipe.strInstructions}</p> */}

          <Grid container spacing={1} maxWidth={"lg"}>
            {Array.from({ length: 24 }).map((_, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  width={219}
                  height={"320px"}
                  bgcolor={"#F5F5F5"}
                  borderRadius={"20px"}
                  boxShadow={4}
                  overflow="hidden"
                  marginTop={2}
                >
                  <CardContent style={{ flex: 1 }}>
                    <img
                      style={{ width: "100%", height: "20vh", objectFit: "cover", borderRadius: "10px" }}
                      src={`https://source.unsplash.com/800x600/?food&sig=${index + 1}`} // Fetch a random food image from Unsplash
                      alt={`Food Image ${index + 1}`}
                    />

                    <h3 style={{ fontWeight: "400" }}>Card Name {index + 1}</h3>
                    <div style={{ padding: "10px", marginTop: "10%", textAlign: "center" }}>
                      <Button
                        sx={{
                          width: "100%",
                          backgroundColor: "#F7E7CE",
                          borderRadius: "10px",
                          color: "black",
                          fontWeight: "400",
                        }}
                      >
                        Click Me
                      </Button>
                    </div>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <box></box>
    </Layout>
  );
}

export default FoodById;
