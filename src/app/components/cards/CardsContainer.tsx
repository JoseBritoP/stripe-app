import React from 'react'
import Card from './Card'
export default function CardsContainer() {
  const posts = [
    {
      "id": 1,
      "title": "Post 1",
      "content": "Content title 1",
      "author": "user",
      "categories": [
        {
          "id": 1,
          "name": "Fantasía"
        },
        {
          "id": 2,
          "name": "Horror"
        }
      ]
    },
    {
      "id": 2,
      "title": "Post 2",
      "content": "Content title 2",
      "author": "user",
      "categories": [
        {
          "id": 1,
          "name": "Fantasía"
        },
        {
          "id": 2,
          "name": "Horror"
        }
      ]
    }
  ]
  return (
    <section className="grid grid-cols-3 gap-3 mt-10">
      {posts ? posts.map((post)=>(
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          categories={post.categories}
        />
      )): (<p>No posts to see</p>)}
      
    </section>
  )
}
