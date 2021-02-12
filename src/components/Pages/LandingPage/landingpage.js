import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "./style.css";

class Landing extends Component {
    
    render() {
        return (
            <div className="landingMain">
                <Grid className="landing-1st-row">
                    <Cell className="landing-columns" col={4} >
                        <a className="profile-pic" href="https://www.linkedin.com/in/joseph-g-pohl/" target="_blank" rel="noreferrer">
                        </a>
                    </Cell>
                    <Cell className="landing-columns" col={4} >
                    </Cell>
                    <Cell className="landing-columns" col={4} >
                        <div className="profile-title">
                                Full<br />
                                &nbsp;Stack<br />
                                &nbsp;&nbsp;&nbsp;Web<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer
                        </div>
                    </Cell>
                </Grid>
                <Grid className="landing-2nd-row">
                <Cell col={12} >
                        <div className="profile-text">
                                
                            HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MySQL | MongoDB
                                
                        </div>
                        <div className="my-link-container">
                        <a className="my-links" href="https://github.com/Jiyoad" target="_blank" rel="noreferrer">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a className="my-links" href="https://www.linkedin.com/in/joseph-g-pohl/" target="_blank" rel="noreferrer">
                            <i id='lI' className="fa fa-linkedin" aria-hidden="true"/>
                        </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;