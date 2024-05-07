import { Box, Button, CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";

function RestaurantCards() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // Extracting card data from the API response
      const cards = data.list.map((store, index) => ({
        id: store.id,
        name: store.name,
        imageUrl: store.cover,
        key: index,
      }));
      setCardData(cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Grid container spacing={1} maxWidth={"md"}>
      {cardData.map((card) => (
        <Grid item xs={6} sm={4} md={3} key={card.id}>
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
                src={card.imageUrl} // Assuming the API provides an imageUrl for the card
                alt={card.name}
              />
              <h3 style={{ fontWeight: "400" }}>{card.name}</h3>
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
  );
}

export default RestaurantCards;
