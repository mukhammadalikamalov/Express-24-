import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCards from "../../components/Cards/caroucel";
import Layout from "../../components/layout/layout";

function RestaurantById() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const foundRestaurant = data.list.find((r) => r.id === parseInt(id));
      setRestaurant(foundRestaurant);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>
      <div style={{ display: "flex", marginLeft: "10%", maxWidth: "md" }}>
        <div style={{ flex: "1", marginRight: "10px" }}>
          <div style={{ marginLeft: "2%", marginTop: "20px" }}>
            <Link
              to="/restaurant"
              style={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "white",
                display: "inline-flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <ArrowBackOutlinedIcon style={{ marginRight: "5px" }} />
              <span style={{ verticalAlign: "middle" }}>Back to Restaurants</span>
            </Link>
          </div>
          {restaurant ? (
            <div style={{ position: "relative" }}>
              <img
                style={{
                  width: "65%",
                  height: "50vh",
                  borderRadius: "20px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={restaurant.cover}
                alt={restaurant.name}
              />
              <h2
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "15%",
                  transform: "translateX(-50%)",
                  zIndex: "1",
                  fontSize: "50px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                {restaurant.name}
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
                  Yetkazish Vaqti . {restaurant.deliveryTime} min
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
                {/* Include other restaurant data here */}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
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
          <RestaurantCards />
        </div>
      </div>
    </Layout>
  );
}

export default RestaurantById;
