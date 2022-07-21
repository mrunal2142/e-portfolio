import React from 'react'
import './App.css'
import hello from './images/hello.png'
import Introduction from './images/introduction.png'
import skills from './images/skills.png'
import portfolioWebsite from './images/portfolioWebsite.png'
import tattle from './images/tattle.png'
import covidTracker from './images/covidTracker.png'
import research from './images/research.png'
import linkedIn from './images/linkedin.png'
import gmail from './images/gmail.png'
import github from './images/github.png'
import { IconButton } from '@mui/material';

function foo() {
  document.getElementById('hello').classList.toggle('active')
}


function App() {
  return (
    <div>
      {/* Header */}
      <div class="fixed-top bg-white shadow-sm ">
        <div  class="container">
          <div id="hello">
          <div className="header mt-1">
            <div><p class="myName textMr"><a href="#landing">Mrunal D</a></p>
            </div>

            <nav class="navbar">
              <ul class="navbarlist">
                <li><a href="#intro">Introduction </a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#publication">Publication</a></li>                
                <li><a href="mailto:mrunald2104@gmail.com">Contact</a></li>
              </ul>
            </nav>

            <div id=" mobile-navbar-button " class="mobile-navbar-button">
              <IconButton onClick={foo}><ion-icon name="menu-outline" class="mobile-icon"></ion-icon></IconButton>
            </div>
          </div>
          </div>
          
        </div>
      </div>


      {/* body */}
      <div id="landing" className="my_container ">
        <div class="container div-col-md-6 div-col-sm-12">
          <div
            className="landing_body animate__animated animate__fadeInUp container"
            data-anim="animate__fadeInUp"
          >
            <p class="text-center ms-5 ps-5 me-5 pe-5 landingText">
              Hello! I am an Android and a web Developer<br></br>trying to learn
              new things.
            </p>
            <div class="mx-auto d-none d-md-block">
              <img src={hello}></img>
            </div>

          </div>
        </div>

        <div className="wrapper">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>

      {/* Introduction */}
      <div id="intro" class="bg-light ">
        <div class="container">
          <div class="row ">
            <p class="text-center mt-5 fs-1">Introduction</p>
            <div class="col-lg-4 div-col-md-6 div-col-sm-12  mb-5 ps-5 pe-5">
              <img class="img-fluid " src={Introduction} />
            </div>

            <div class="col-lg-8 div-col-md-6 div-col-sm-12 mt-4 pt-3 ps-5 pe-5">
              <p class="fs-5" align="justify">
                Hello! I am Mrunal D a Diligent B-tech (Information Technology)
                student with 8.5 CGPA from G.H.Raisoni College Of Engineering .
                I am currently exploring the world of Artificial Intelligence
                and Machine learning.Proefficient with Data structure and
                algorithms and have a vivid interest in software development.
                Exploring new things and working on them excites me and even
                more when it is challenging.I love to read journals, upcoming
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SKills and Programming Languages */}
      <div class="container" id="skills">
        <div class="row mb-5">
          <p class="text-center mt-5 fs-1">Skills & Programming Languages</p>
          <div class="row align-items-around mb-5 mt-3">
            {/* First card */}
            <div class="col div-col-md-6 div-col-sm-12 mt-3 ms-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Html </li>
                    <li class="list-group-item">Css</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">React js</li>
                    <li class="list-group-item">Bootstrap</li>
                    <li class="list-group-item">Node js</li>
                    <li class="list-group-item">MongoDb</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second card */}
            <div class="col-lg div-col-md-6 div-col-sm-12 mt-3 ms-4 pe-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Android & tech stack</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Android development ]
                    </li>
                    <li class="list-group-item">Java</li>
                    <li class="list-group-item">Kotlin</li>
                    <li class="list-group-item">C & C++</li>
                    <li class="list-group-item">Python</li>
                    <li class="list-group-item">SQL</li>
                    <li class="list-group-item">AWS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* image */}
            <div class="col mx-auto d-none d-md-block" >
              <img class="img-fluid ps-5 pe-5 mt-3 float-end " src={skills} />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div class="bg-light" id="projects">
        <div class="container">
          <div class="row">
            <p class="text-center mt-5 mb-5 fs-1">Projects</p>
            <div class="row mt-2 mb-5">

              <div class="col-lg-4 div-col-md-6 div-col-sm-12 mb-5 ps-5">
                <div class="card h-100 ">
                  <img src={tattle} class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title fs-4">
                      Tattle-Secure messaging application
                      <IconButton>
                        <a href="https://github.com/mrunal2142/Tattle">
                          <img src={github} className="socialMedia p-1"></img>
                        </a>
                      </IconButton>
                    </h5>
                    <p class="card-text" align="justify">
                      An Android application to have secure communication
                      between the sender and recipient, using a cryptography
                      algorithm for encryption and decryption.This project is
                      made for removing language barrier between users by
                      providing inbuilt text or message translation( english to
                      hindi and vice versa) using google ML kit<br></br>
                      <br></br>Tech Stack- Java | XML | Firebase
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 div-col-md-6 div-col-sm-12 mb-5 ps-5">
                <div class="card h-100">
                  <img
                    src={portfolioWebsite}
                    class="card-img-top"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title fs-4">
                      Portfolio website{' '}
                      <IconButton>
                        <a href="https://github.com/mrunal2142/e-portfolio">
                          <img src={github} className="socialMedia p-1"></img>
                        </a>
                      </IconButton>{' '}
                    </h5>
                    <p class="card-text mb-5 mt-4" align="justify">
                      This website provides professional information about me
                      and presents a showcase of my work.This is an extension of
                      my resume. It provides a convenient way for recruiter to
                      see my skills.<br></br>
                      <br></br>Tech Stack- Html | CSS | JavaScript | Bootstrap
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 div-col-md-6 div-col-sm-12 mb-5 ps-5">
                <div class="card h-100 ">
                  <img src={covidTracker} class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title fs-4">
                      Covid Tracker{' '}
                      <IconButton>
                        <a href="https://github.com/mrunal2142/Covid-Tracker">
                          <img src={github} className="socialMedia p-1"></img>
                        </a>
                      </IconButton>
                    </h5>
                    <p class="card-text mt-4" align="justify">
                      The application used to track Covid and vaccination
                      details all in one place. It also has a health news
                      section to stay updated with the latest happenings. Using
                      a total of 3 REST API (News API - API for health-related
                      news, Co-WIN Public APIs - get vaccination session by
                      district Pincode, Covid-19 status API - for worldwide
                      covid cases. ) <br></br> <br></br>Tech Stack- Java | XML |
                      Retrofit Library | 3 Covid-Public API
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* publication */}
      <div class="container mb-5 " id="publication">
        <div class="row">
          <p class="text-center mt-5 mb-5 fs-1">Research & Publication</p>
        </div>

        <div class="row align-items-start">
          <div class="col-lg-4 div-col-md-6 div-col-sm-12 mt-5 mb-5  ps-5 pe-5">
            <img class="img-fluid " src={research} />
          </div>
          <div class="col div-col-md-6 div-col-sm-12 mt-2 ms-4 me-4">
            <p className="intro_text" class="fs-5" align="justify">
              Research project Titled{' '}
              <span class="fs-5 fw-semibold">
                "Secure messaging application with live translation and
                security"
              </span>
              , March 2022 - April-2022. <br></br>
              <p class="mt-4 fs-5">
                I am the corresponding author in this research project written
                with my co-author Dr.Ashlesha Nagdive. The research paper is
                Presented at{' '}
                <span class="fs-5 fw-semibold">
                  "Seventh International Conference on ICT for Sustainable
                  Development (ICT4SD)"
                </span>
                &nbsp;at Goa,INDIA. This is the written work about the project
                "Tattle-Secure messaging application" mentioned above. Click{' '}
                <a href="#">
                  <span class="linkToResearch">here</span>
                </a>{' '}
                to read paper.
              </p>
              <p>The whole project is summarized in three points:</p>
              <div class="ps-5 mb-5">
                <ul>
                  <li class="mt-4 fs-5 my_li">
                    Explored & gathered research from outside resources,
                    including the different translating and messaging
                    applications with their statistics
                  </li>

                  <li class=" mt-4 fs-5 my_li">
                    Analysed the need to come up with an approach to solve the
                    problem of language barrier in communication (Multiligual)
                    without trading of the user privacy.
                  </li>

                  <li class="mt-4 fs-5 my_li">
                    Devised a Solution with the help of 10 resources including
                    research papers in the related areas and implemented it on
                    android environment.
                  </li>
                </ul>
              </div>
              <p class="fs-5">
                Publisher: Springer | Springer Nature <br></br>Indexing: Scopus
                | SpingerLink | Google scolar
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="bg-light ">
        <div class="container bg-light">
          <div className="row justify-content-between">
            <div className="col-4 align-self-start">
              <p className="fs-4 mt-4">
                Mrunal Dhomane
                <span className="fs-6">
                  <br></br>
                  <p>Made with love ❤️ </p>
                </span>
              </p>
            </div>
            <div className="col-4 align-self-end mb-4">
              <div className=" d-flex flex-row-reverse">
                <IconButton>
                  <a href="https://www.linkedin.com/in/mrunal-dhomane-bb938a204">
                    <img src={linkedIn} className="socialMedia"></img>
                  </a>
                </IconButton>

                <IconButton>
                  <a href="mailto:mrunald2104@gmail.com">
                    <img src={gmail} className="socialMedia mt-1"></img>
                  </a>
                </IconButton>

                <IconButton>
                  <a href="https://github.com/mrunal2142">
                    <img src={github} className="socialMedia mt-1"></img>
                  </a>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}






export default App;
