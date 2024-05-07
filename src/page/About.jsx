import Card from "@mui/material/Card";
import React from "react";
import SearchBar from "../components/Form/SearchBar";
import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout>
      <SearchBar />
      <h1>About Page</h1>
      <Card
        sx={{
          maxWidth: "md",
          height: "50vh",
          width: "100%",
          borderRadius: "20px",
          marginLeft: "20px",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src=""
          alt=""
        />
      </Card>
    </Layout>
  );
};

export default About;
