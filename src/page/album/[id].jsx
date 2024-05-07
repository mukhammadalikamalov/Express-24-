import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

function AlbumById() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => setAlbum(data));
  }, [id]);
  return (
    <Layout>
      {id}
      {album && <h1>{album.title}</h1>}
    </Layout>
  );
}

export default AlbumById;
