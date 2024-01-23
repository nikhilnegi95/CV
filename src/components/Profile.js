import React from 'react'

export default function Profile(props) {
  return (
    <div className="card col-8">
        <h4 className="card-header">Software Development Engineer</h4> 
        <div className="card-body">
        <div className="card-title">
            <h5>Profile</h5>
            <p>Software engineer with 4+ years of experience in building web and mobile applications. I have interest in microservices, APIs, web development and innovative software development. Skilled in Node JS, Javascript, HTML, Jquery, React JS, mysql, mongodb, Data Structure and Algorithms.</p>
            <p>
                <b>Career Objective:</b>To get placed in a reputed company which provide a goodworking environment where I can use my skills to improve my career path and also achieve professional and technical satisfaction
            </p>
        </div>
        {props.setProgressBar(70)}
        <div className="card-title">
            <h5>Experience</h5>
            <div className='container d-flex justify-content-between p-0'>
                <h6>Software Engineer II at Replicon</h6>
                <h6>Dec, 2021 ‐ Present</h6>
            </div>
            <div>
                <li className="nav-item">Write clean and reusable code, with emphasis on stability and performance.</li>
                <li className="nav-item">Worked on requirement analysis, Coding, design, implementation, testing, problem analysis and resolution</li>
                <li className="nav-item">Experienced in working with server side technologies including databases, restful API and MVC design patterns and developing independent microservices</li>
                <li className="nav-item">Developed Client side interface using React js.</li>
                <li className="nav-item">Hand on experience using React UI libraries such as material-ui, </li>
                <li className="nav-item">Interact with other developers, designers and product manager to design and implement new features</li>
                <li className="nav-item">Debug existing code and fixed customer raised issues.</li>
                <li className="nav-item">Improved the code performance by optimised the query and reusable code.</li>
                <li className="nav-item">Experienced on Unit Testing using mocha and jest</li>
                
            </div>
            <div className='container d-flex justify-content-between p-0 my-3'>
                <h6>Softwaree Developer at AppKnit</h6>
                <h6>March, 2021 ‐ Nov, 2021</h6>
            </div>
            <div className='my-0 companyName'>
            <div>
                <li className="nav-item">Experience in building backend applications, REST API design and development using NodeJs and Mongodb</li>
                <li className="nav-item">Implemented RabbitMQ to send and receive messages asynchronously using amqplib</li>
                <li className="nav-item">Speed up existing applications using Redis caching</li>
                <li className="nav-item">Experience in sending email using nodemailer</li>
                <li className="nav-item">Experience in designing of NO‐SQL database structure using Mongodb</li>
            </div>
            </div>
            <div className='container d-flex justify-content-between p-0 my-3'>
                <h6>Software Engineer at Rankwatch Inc.</h6>
                <h6>August 2018 - Dec 2020</h6>
            </div>
            {props.setProgressBar(80)}
            <div>
                <li className="nav-item">Experience in backend development, developed SEO product, Micro services, NodeJS APIs, Third party API integration, functional programming, Backend‐Frontend integration with MVC pattern.</li>
                <li className="nav-item">Broke down various complex components into smaller reusable API to make code efficient.</li>
                <li className="nav-item">Use Stripe to integrate payment gateway using Laravel.</li>
                <li className="nav-item">Experience in writing and running unit testing using the Jest framework for Nodejs api</li>
                <li className="nav-item">Developed a weekly based email service using php</li>
                <li className="nav-item">Oversaw back‐end development using php to maintain website integrity, security and efficiency.</li>
                <li className="nav-item">Work on zendesk/hubspot integration for support using laravel</li>

                <li className="nav-item">Designed Mysql database structure</li>
            </div>
            {props.setProgressBar(100)}
        </div>
        <p className="card-text"></p>
        </div>
    </div>
  )
}
