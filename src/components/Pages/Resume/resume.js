import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import "./style.css";
import Education from '../../../components/Education'
import Experience from '../../../components/Experience'
import Skills from '../../../components/Skills'

class Resume extends Component {
    render() {
        return (
            <div className="resume-main">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="./assets/contact-me.jpg"
                            alt="Joe Pohl"
                            style={{
                            height: '200px', 
                            width: '200px',

                            }}
                            />
                        </div>
                        <div className="left-resume">
                        <h2 style={{paddingTop: '2em', color: 'white'}}>Joseph Pohl</h2>
                        <h4>Web Developer</h4>
                        <hr style={{borderTop: '3px solid grey', width: '50%'}}/>
                        <p>
                            word word words
                        </p>
                        <hr style={{borderTop: '3px solid grey', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>
                        679 N. St Clair St, 44077
                        </p>
                        <h5>Phone</h5>
                        <p>
                        #(440) 479-8820
                        </p>
                        <h5>Email</h5>
                        <p>
                        jiyoad@gmail.com
                        </p>
                        <h5>LinkedIn</h5>
                        <p>
                        https://www.linkedin.com/in/joseph-g-pohl/
                        </p>
                        <hr style={{borderTop: '3px solid grey', width: '50%'}}/>
                        </div>
                    </Cell>
                    <Cell className="resume-r-col" col={8}>
                        <h2>Education</h2>

                        <Education
                        startYear={2008}
                        endYear={2011}
                        schoolName='Mentor High'
                        schoolDescription='The high school where I began to appreciate programming and web development'
                        />

                        <Education
                        startYear={2020}
                        endYear={2021}
                        schoolName='Case Western Reserve University'
                        schoolDescription='Case Western Reserve University is one of the nation’s leading independent research universities. With programs encompassing the arts and sciences, engineering, the health sciences, law, management, and social work, our community works every day to think beyond the possible.'
                        />
                        
                        <h2>Job Experience</h2>
                        <Experience
                        startYear={2012}
                        endYear={2015}
                        jobName='McDonalds: Kitchen Manager'
                        jobDescription='Fast Food Chain'
                        />
                        <Experience
                        startYear={2015}
                        endYear={2016}
                        jobName='Landscaping'
                        jobDescription='Small landscaping Company in Florida'
                        />
                        <Experience
                        startYear={2016}
                        endYear={2019}
                        jobName='Publix: Deli Manager'
                        jobDescription='The largest grocery/retail company in Florida'
                        />
                        <Experience
                        startYear={2019}
                        endYear={2020}
                        jobName='Arbor Industries: Setup Technician'
                        jobDescription='Airplane and missile parts manufacturing company'
                        />
                        <Experience
                        startYear={2020}
                        endYear='?'
                        jobName='Amazon: Warehouse Associate'
                        jobDescription='The largest retail company in the world'
                        />
                        <h2>Skills</h2>
                        <Skills
                        skill="HTML"
                        progress={80}
                        />
                        <Skills
                        skill="CSS"
                        progress={75}
                        />
                        <Skills
                        skill="Javascript"
                        progress={60}
                        />
                        <Skills
                        skill="NodeJS"
                        progress={45}
                        />
                        <Skills
                        skill="Express"
                        progress={55}
                        />
                        <Skills
                        skill="MySQL"
                        progress={35}
                        />
                        <Skills
                        skill="MongoDB"
                        progress={55}
                        />
                        <Skills
                        skill="React"
                        progress={55}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;