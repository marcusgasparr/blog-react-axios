import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='home'>
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>Aguarde, procurando posts...</p>
      ) : (
        posts.map((posts) => (
          <div className='post' key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body.slice(0,50)+"..."}</p>
            <Link to={`/posts/${posts.id}`} className='btn'>
              Ler mais...
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
