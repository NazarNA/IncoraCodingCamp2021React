import React from 'react';
import { usePosts } from './hooks/posts/usePosts';

import './App.scss';
import { IPost } from './models/posts';

const App: React.FC = () => {
  const { data, loading, removePost, redactPost, addPost } = usePosts();
  console.log('data', data);
  console.log(loading);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className='App'>
        Posts:
        <div className='container'>
          <button
            onClick={() =>
              addPost({ body: 'post body', title: 'post title', id: Date.now(), userId: Date.now() })
            }
          >
            Add
          </button>
          {data &&
            data.map((post: IPost) => (
              <div className='post' key={post.id}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <p>
                  {' '}
                  <button onClick={() => removePost(post.id)}>del</button>
                  <button
                    onClick={() =>
                      redactPost({
                        id: post.id,
                        title: 'edited post',
                        body: 'edited body',
                        userId: post.userId
                      })
                    }
                  >
                    edit
                  </button>
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default App;
