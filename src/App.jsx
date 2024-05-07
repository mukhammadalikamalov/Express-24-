import { Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeCard from "./components/Cards/RecipeCard";
import App from "./components/Cards/cards";
import SearchBar from "./components/Form/SearchBar";
import Layout from "./components/layout/layout";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const itemsPage = 9;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    searchRecipes();
  };
  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Layout>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <App />
      <Box>
        <Box sx={{ flexGrow: 1, maxWidth: "lg", margin: "auto", alignItems: "center " }}>
          <h1>Restorantlar</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Tanlanganlar
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Aksiya
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Tanlanganlar
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Fast Food
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Pizza
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Burger
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Tanlanganlar
            </button>
            <button
              style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
            >
              Yana
            </button>
          </div>

          <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
            {recipe
              ? recipe.slice(0, currentPage * itemsPage).map((r, idx) => (
                  <Grid item xs={4} sm={4} md={4} key={idx}>
                    <RecipeCard key={r.idMeal} recipe={r} />
                  </Grid>
                ))
              : "No Products"}
          </Grid>
        </Box>
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
          {recipe && recipe.length > currentPage * itemsPage && (
            <Button sx={{ width: "52%", backgroundColor: "#f5f5dc" }} disabled={loading} onClick={loadMore}>
              {loading ? <CircularProgress size={24} /> : "Contained"}
            </Button>
          )}
        </Stack>
      </Box>
    </Layout>
  );
};

export default HomePage;
