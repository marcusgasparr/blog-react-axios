import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Admin.css";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (error) {}
  };

  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`);

    const filterPosts = posts.filter((post) => post.id !== id);

    setPosts(filterPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='admin'>
      <h1>Gerenciar Posts</h1>
      {posts.legnth === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 50) + "..."}</p>
            <div className='actions'>
              <Link className='btn edit-btn' to={`/posts/edit/${post.id}`}>
                Editar
              </Link>
              <Link className='btn view-btn' to={`/posts/${post.id}`}>
                Ver Post
              </Link>
              <button
                className='btn delete-btn'
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
