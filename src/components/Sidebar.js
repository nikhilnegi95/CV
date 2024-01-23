import React from 'react';
import location from '../geo-alt.svg';
import phone from '../phone.svg';
import send from '../send.svg';
import date from '../calendar-date.svg';
import linkedin from '../linkedin.svg';
export default function Sidebar(props) {
  return (
    <div className="card col-4">
        <h4 class="card-header">Nikhil Negi</h4>
        <div class="card-body">
            <div className='container'>
                <h5 className="card-title">Contacts</h5>
                <div className="card-text">
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <img src={location} style={{float: 'left'}} alt="location" />
                        <div className='mx-4 contact'><b>Address</b><p>Kotdwar Uttarakhand 246149</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={date} style={{float: 'left'}} alt="DOB"/>
                        <div className='mx-4 contact'><b>Date Of Birth</b><p>14 Sep 1995</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={phone} style={{float: 'left'}} alt="phone"/>
                        <div className='mx-4 contact'><b>Phone</b><p>7417150041</p></div>
                    </li>
                    <li className="nav-item">
                        <img src={send} style={{float: 'left'}} alt="email"/>
                        <div className='mx-4 contact'><b>Email</b><p>nikhilnegi95@gmail.com</p></div>
                    </li>
                    <li className="nav-item">
                    <img src={linkedin} style={{float: 'left'}} alt="linkedin"/>
                        <div className='mx-4 contact'><b>Linkedin</b><p><a href="https://www.linkedin.com/in/nikhil-negi-62b44014a">https://www.linkedin.com/in/nikhil-negi-62b44014a</a></p></div>
                    </li>
                    </ul>
                </div>
            </div>
            {props.setProgressBar(40)}
            <div className='container'>
                <h5 className="card-title">Skills</h5>
                <div className="card-text">                   
                    <p><b>Programming Languages:</b>Javascript, Basic of C, php</p>
                    <p><b>Advance Knowledge:</b>Data structure and algorithm</p>
                    <p><b>Database:</b>MySQL, Postgres, MongoDb, Redis & DynamoDB</p>
                    <p><b>Web Technologies:</b>HTML, CSS, Bootstrap, Javascript, AJAX, Nodejs, Graphql, Aws</p>
                    <p><b>Javascript Libraries/Frameworks:</b>React JS, Jquery, expressjs</p>
                    <p><b>Methodologies:</b>Agile</p>
                    <p><b>Message Broking Tool</b>RabbitMq</p>
                    <p><b>Version Control:</b>GitHub, GitLab</p>
                    <p><b>IDE and tools:</b>Visual Studio Code, Sublime, Notepad++</p>
                    <p><b>Issue Trackers</b>Tuleap, JIRA</p>
                    <p><b>Operating Systems:</b>Window, Linux</p>
                    <p><b>Linguistic Abilities:</b>English, Hindi</p>
                    <p><b>Other Tools:</b>NPM, Docker</p>
                </div>
            </div>
            <div className="container">
                <h5 className="card-title">Education</h5>
                <div className="card-text">
                    <p><b>Masters of computer application</b>, July 2015 ‐ June 2018</p>
                    <p>Graphic Era University Dehradun, Uttarakhand</p>
                    <p><b>Bachelor of Science</b>, July 2012 ‐ June 2015</p>
                    <p>HNB Garhwl University Kotdwar, Uttarakhand</p>
                </div>
            </div>
            {props.setProgressBar(60)}
        </div>
    </div>
    
  )
}
