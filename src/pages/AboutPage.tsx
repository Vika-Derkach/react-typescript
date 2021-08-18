import React from 'react'
import { useHistory } from 'react-router-dom'
export const AboutPage: React.FC = () => {
    const history = useHistory()
 return (
     <>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, praesentium saepe? Qui sequi sed neque voluptatem pariatur. Vero, quis iure!</p>
     <button className="btn" onClick={() => history.push('/')} >Return to List</button>
     </> 
 )
}