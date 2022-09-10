import React from 'react';
import nishoo from '../nishoo.jpg';
import location from '../geo-alt.svg';
import phone from '../phone.svg';
import send from '../send.svg';
import date from '../calendar-date.svg';
import linkedin from '../linkedin.svg';
export default function Sidebar(props) {
  return (
    <div className="card col-4">
        <h4 class="card-header">Nishoo Gupta</h4>
        <div class="card-body">
            <div className='container'>
                <h5 className="card-title">Contacts</h5>
                <div className="card-text">
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <img src={location} style={{float: 'left'}} alt="location" />
                        <div className='mx-4 contact'><b>Address</b><p>Sukhrali Sector 17A Gurgaon Haryana, 122001</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={date} style={{float: 'left'}} alt="DOB"/>
                        <div className='mx-4 contact'><b>Date Of Birth</b><p>9 June 1997</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={phone} style={{float: 'left'}} alt="phone"/>
                        <div className='mx-4 contact'><b>Phone</b><p>8739004895</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={send} style={{float: 'left'}} alt="email"/>
                        <div className='mx-4 contact'><b>Email</b><p>nishoogupta09@gmail.com</p></div>
                    </li>
                    <li className="nav-item">
                    <img src={linkedin} style={{float: 'left'}} alt="linkedin"/>
                        <div className='mx-4 contact'><b>Linkedin</b><p><a href="https://www.linkedin.com/in/nishoo-gupta-b318ab138/">https://www.linkedin.com/in/nishoo-gupta-b318ab138/</a></p></div>
                    </li>
                    </ul>
                </div>
            </div>
            {props.setProgressBar(40)}
            <div className='container'>
                <h5 className="card-title">Skills</h5>
                <div className="card-text">                   
                    <p><b>Programming Languages:</b>Javascript, core java, C, SQL, NoSql</p>
                    <p><b>Advance Knowledge:</b>Data structure and algorithm</p>
                    <p><b>Database:</b>MySQL, Postgres, MongoDb, Redis & Clickhouse</p>
                    <p><b>Web Technologies:</b>HTML, CSS, DOM, Javascript,JQuery & AJAX, Nodejs, PHP</p>
                    <p><b>Javascript Libraries/Frameworks:</b>React JS, Jquery, Lodash, expressjs, moment.js</p>
                    <p><b>Methodologies:</b>Agile</p>
                    <p><b>Version Control:</b>Git, GitHub, GitLab</p>
                    <p><b>IDE and tools:</b>Visual Studio Code, Sublime,Notepad++</p>
                    <p><b>Issue Trackers</b>Tuleap, JIRA, Azure, Jioworks</p>
                    <p><b>Operating Systems:</b>Window, Linux</p>
                    <p><b>Linguistic Abilities:</b>English, Hindi</p>
                    <p><b>Message Broking Tool</b>RabbitMq, Apache Kafka</p>
                    <p><b>Other Tools:</b>NPM, Docker, Azure Devops And basics of kubernetes</p>
                </div>
            </div>
            <div className="container">
                <h5 className="card-title">Education</h5>
                <div className="card-text">
                    <p><b>B.Tech in Computer Science and Engineering</b>, 2018</p>
                    <p>Feroze Gandhi Institute of Engineering and TechnologyRaebareli, India</p>
                    <p>72%</p>
                    <p><b>Senior Secondary School (12th)</b>, 2013</p>
                    <p>National Inter College Ghazipur, India</p>
                    <p>82%</p>
                    <p><b>Secondary School (10th)</b>, 2011</p>
                    <p>Janta Adarsh Inter College Ghazipur, India</p>
                    <p>76%</p>

                </div>
            </div>
            <div className="container">
                <h5 className="card-title">Accolades</h5>
                <div className="card-text">
                <ul className="nav nav-pills flex-column mb-auto accolades">
                    <li className="nav-item">I got a computer through my active participation inLate Sri Shyam Narain Yadav memorial Scholarship Programme in 2013 organized By Jan JagratiFoundation ,Lucknow where I scored 1st rank.</li>
                    <li className="nav-item"><b>Spoken Tutorial C Training Certification Organised by IIT Bombay Aggregate:</b> 84% in Cand C++ programming</li>
                    <li className="nav-item"><b>AMCAT Aggregate:</b> 98% - Computer Programming, 88%- Aptitude, 86% - Logical Reasoning</li>
                </ul>
                </div>
            </div>
            {props.setProgressBar(60)}
        </div>
    </div>
    
  )
}
