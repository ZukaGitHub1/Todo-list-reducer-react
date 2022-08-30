import React from 'react'
import "./PostList.css"


function PostLists({ posts }) {
  return (
    <div className='div-container'>
      {posts.map(index => (
        <div className="cards" key={index.id}>
          <div className="card card-1" key={index.id}>
            <h2 className="card__title">{index.title}</h2>
            <p className="card__apply">
              <a className="card__link" href="/">Apply Now </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostLists
