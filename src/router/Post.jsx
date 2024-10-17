import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { useParams, Link } from "react-router-dom";
import "../css/Post.css";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const getpost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpost();
  }, []);

  return (
    <div className='post-container'>
      {!post.title ? (
        <p>Carregand conteúdo...</p>
      ) : (
        <div className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/`} className='btn'>
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Post;
