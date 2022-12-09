import React from 'react'

const About = () => {
  return (
    <div className='aboutpage'style={{backgroundColor:'aqua',position:"fixed",width:"100vw",height:"100vh",display:"-ms-inline-flexbox",justifyContent:"center",alignItems:"center"}}>
      <h1>About Page</h1>
    
      <p className='crud' >
      CRUD stands for Create, Read, Update, and Delete. In ReactJS everything is<br/>
       aligned in a form of a component and every component has its own way and<br/>
        feature to do so. React js is one of the most used JavaScript libraries for frontend<br/> development.
      </p>
    </div>
  )
}

export default About;