import React from 'react'

const About = () => {
    console.log("About called");
    return (
        <div>
            <h1>About our App</h1>
            <p className='text-success'>This application is built using React and React Router to demonstrate multi-page navigation.
                It includes a Home page, an About page, and a User page that fetches user data from an API.
                We also utilize Bootstrap for styling to ensure a responsive and modern UI.</p>
        </div>
    )
}

export default About