import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout/layout";

function Album() {
  const [album, setALbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setALbum(data));
  }, []);
  return (
    <Layout>
      {album.map((album) => (
        <Box key={album.id} display="flex" gap={20} flexWrap="wrap">
          <Avatar src={album.image} />
          <NavLink to={`/album/${album.id}`}>{album.title}</NavLink>
        </Box>
      ))}
    </Layout>
  );
}

export default Album;
