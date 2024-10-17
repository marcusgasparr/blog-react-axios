import { useState } from "react";
import blogFetch from "../axios/config";
import { useNavigate } from "react-router-dom";

import "../css/NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost =  async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post
    })

    navigate("/")
  };

  return (
    <div className='new-post'>
      <h2>Inserir Novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor='title'>Título</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Digite o título do post'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea
            name='body'
            id='body'
            placeholder='Digite o conteúdo'
            rows={20}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type='submit' value='Criar Post' className='btn' />
      </form>
    </div>
  );
};

export default NewPost;