import React from 'react'

export default function Profile(props) {
  return (
    <div className="card col-7">
        <h4 className="card-header">Software Development Engineer</h4> 
        <div className="card-body">
        <div className="card-title">
            <h5>Profile</h5>
            <p>Versatile Software Engineer with 6 years of experience developing high-performance web and mobile applications. Specialized in microservices architecture, API development, and full-stack web solutions using Node.js, React.js, and modern databases like MySQL and MongoDB. Passionate about building scalable systems, optimizing code, and driving innovation in software development.</p>
            <p>
                <b>Career Objective:</b>To secure a challenging position in a reputable organization where I can leverage my technical skills, contribute to innovative software development, and grow professionally.
            </p>
        </div>
        {props.setProgressBar(70)}
        <div className="card-title">
            <h5>Experience</h5>
            <div className='container d-flex justify-content-between p-0 pt-3'>
                <h6>Software Engineer II at Replicon (December 2021 ‐ July 2024)</h6>
            </div>
            <div>
                <li className="nav-item">Engineered clean, efficient, and reusable code, with a focus on performance and stability.</li>
                <li className="nav-item">Conducted requirement analysis, design, coding, testing, and problem resolution for the project.</li>
                <li className="nav-item">Designed and implemented scalable microservices, using RESTful APIs and MVC patterns.</li>
                <li className="nav-item">Developed client-side interfaces using React.js and Material-UI.</li>
                <li className="nav-item">Optimized code performance by refining database queries and utilizing reusable components.</li>
                <li className="nav-item">Collaborated cross-functionally with developers, designers, and product managers to launch new features.</li>
                <li className="nav-item">Debug existing code and fixed customer raised issues.</li>
                <li className="nav-item">Ensured high-quality code through unit testing in Jest.</li>
                
            </div>
            <div className='container d-flex justify-content-between p-0 my-3'>
                <h6>Softwaree Developer at AppKnit (March 2021 ‐ November 2021)</h6>
            </div>
            <div className='my-0 companyName'>
            <div>
                <li className="nav-item">Built and optimized backend applications, leveraging REST APIs and Node.js.</li>
                <li className="nav-item">Designed asynchronous communication using RabbitMQ for increased processing efficiency.</li>
                <li className="nav-item">Enhanced application speed with Redis caching.</li>
                <li className="nav-item">Architected NoSQL databases using MongoDB to support flexible data models.</li>
            </div>
            </div>
            <div className='container d-flex justify-content-between p-0 pt-3'>
                <h6>Software Engineer at Rankwatch Inc. (August 2018 - December 2020)</h6>
            </div>
            {props.setProgressBar(80)}
            <div>
                <li className="nav-item">Led backend development for SEO products, integrating third-party APIs and utilizing functional programming principles.</li>
                <li className="nav-item">Enhanced system efficiency by breaking down complex components into reusable, modular APIs.</li>
                <li className="nav-item">Integrated payment gateway (Stripe) and developed backend services using Laravel.</li>
                <li className="nav-item">Designed and executed unit tests (Jest) to ensure reliability of Node.js APIs.</li>
                <li className="nav-item">Developed automated weekly email services and handled Zendesk/Hubspot integration to streamline support operations.</li>
                <li className="nav-item">Oversaw back‐end development using php to maintain website integrity, security and efficiency.</li>
                <li className="nav-item">Architected Mysql database to support flexible data models.</li>
            </div>
            {props.setProgressBar(100)}
        </div>
        <p className="card-text"></p>
        </div>
    </div>
  )
}
