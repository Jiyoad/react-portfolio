import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import "./style.css";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-main">
                <Grid>
                    <Cell col={4} style={{paddingLeft: '10px'}}>
                        <div style={{textAlign:'center'}}>
                            <img src="./assets/contact-me.jpg"
                            alt="Joe Pohl"
                            style={{
                            height: '200px',
                            width: '200px',
                            paddingTop: '10px',
                            borderRadius: '50%'
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
                        </div>
                    </Cell>
                    <Cell className="resume-r-col" col={8}>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default AboutMe;


