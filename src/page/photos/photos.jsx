import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Layout>
      {photos.map((photo) => (
        <div key={photo.id}>
          <p>ID: {photo.id}</p>
          <p>Title: {photo.title}</p>
          <Avatar alt={photo.title} src={photo.url} />
        </div>
      ))}
    </Layout>
  );
}

export default Photos;
