import React from 'react'

export default function Profile(props) {
  return (
    <div className="card col-8">
        <h4 className="card-header">Software Development Engineer</h4> 
        <div className="card-body">
        <div className="card-title">
            <h5>Profile</h5>
            <p>Highly motivated computer science graduate. I have interest in microservices,APIs, web development and innovative software development. Skilled inNode JS, Javascript, Typescript, HTML, CSS, Jquery, AJAX, PHP, React JS, Algorithms and Data Structure.</p>
            <p>
                <b>Career Objective:</b>To get placed in a reputed company which provide a goodworking environment where I can use my skills to improve my career pathand also achieve professional and technical satisfaction
            </p>
        </div>
        {props.setProgressBar(70)}
        <div className="card-title">
            <h5>Experience</h5>
            <div className='container d-flex justify-content-between p-0'>
                <h6>Backend Developement Engineer</h6>
                <h6>October, 2021 - Present</h6>
            </div>
            <div className='my-0'>
                <p className='text-muted'>Relience Jio</p>
            </div>
            <div>
                <li className="nav-item">Developed complete Jiocampaign Project which helps to send mail to multiple contacts.</li>
                <li className="nav-item">you can add your own domain and segment the contact to send mail also it provides the invite feature and campaign reports </li>
                <li className="nav-item">Created campaign reports(Ex. delivered, hard bounce, soft bounce, opens, clicks, unsubscribe)</li>
                <li className="nav-item">Developed Template feature and generate html template to image</li>
                <li className="nav-item">Experienced on lead a team </li>
                <li>Now Started working on JioWorks Project which is a task management tool</li>
                
            </div>
            <div className='container d-flex justify-content-between p-0 my-3'>
                <h6>Software Developer</h6>
                <h6>February, 2021 - September, 2021</h6>
            </div>
            <div className='my-0 companyName'>
                <p className='text-muted'>Hashchain Fintech Pvt Ltd</p>
            </div>
            <div>
                <li className="nav-item">Worked on fintech project which provides a universal connection to data from all major accounting software providers that get accounting data in real-time to prevent fraud. it support major accounting software service providers QuickBooks and Xero, enabling on-demand access to accounting transactions, analytics, insights and reports on a small business.</li>
                <li className="nav-item">Experienced on real time data scraping from various accounting software providers</li>
                <li className="nav-item">Write clean and reusable code, with emphasis on stability andperformance.</li>
                <li className="nav-item">Authentication in node API using JWT and authorization using basic auth and Oauth2</li>
                <li className="nav-item">Improve database performance using indexing , db Tunning, collation</li>
                <li className="nav-item">Experienced on Unit Testing using mocha and jest</li>
                
            </div>
            <div className='container d-flex justify-content-between p-0 my-3'>
                <h6>Junior Software Engineer</h6>
                <h6>August 2018 - Dec 2020</h6>
            </div>
            <div className='my-0 companyName'>
                <p className='text-muted'>Rankwatch Inc.</p>
            </div>
            {props.setProgressBar(80)}
            <div>
                <li className="nav-item">Worked on SEO project which help Website Owners and SEO Agencies alike to pin point the key areas where a website is losing traffic and areas where it can gain traffic by tracking areas such as Rankings, Backlinks, Analytics, Competitors etc and then analyzing and providing them Intelligent Data to work with</li>
                <li className="nav-item">Experience in backend development, developing SEO product, CRM panel,Micro services, NodeJS APIs , Third party API integration, functionalprogramming, Backend-Frontend integration etc.</li>
                <li className="nav-item">Requirement analysis, Coding, design, implementation, testing, problemanalysis and resolution, and technical documentation in swagger</li>
                <li className="nav-item">Experienced in working with server side technologies including databases,restful API and MVC design patterns and developing independentmicroservices</li>
                <li className="nav-item">Interact with other developers, designers and product manager to designand implement new features</li>
                <li className="nav-item">Debugging on existing code and fixed bug on rankwatch and websignalproduct.</li>
                <li className="nav-item">Worked on hubspot/Ovh Container to store the pdf and contact details</li>

                <p><b>Achievements:</b>
                <li className="nav-item">Converted rankwatch project structure from monolithic to microservice architecture from research to development and complete in under 2 years</li>
                <li className="nav-item">Improved the website performance by optimised the query and reusablecode, by 30%.</li>
                <li className="nav-item">Broke down various complex components into smaller reusable API.</li></p>
            </div>
            {props.setProgressBar(100)}
        </div>
        <p className="card-text"></p>
        </div>
    </div>
  )
}
