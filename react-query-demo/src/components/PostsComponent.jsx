// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery(['posts'], fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} style={{ marginBottom: '10px' }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
