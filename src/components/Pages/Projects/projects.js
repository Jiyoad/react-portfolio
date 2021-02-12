import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import "./style.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) { // HTML/CSS/JS
            return (
                <Card className="project-cards" shadow={10} style={{ minWidth: '450', margin: 'auto', borderRadius: '0px' }}>
                    <CardTitle style={{ color: '#fff', height: '190px', background: 'url(https://simonswain.com/wdyk/images/html-css-js.png) center / cover no-repeat'}}>Project #1</CardTitle>
                    <CardText style={{ width: '91%', color: '#fff', backgroundColor: 'black' }}>
                        My first project in Case Western Reserve University Web Development Bootcamp!
                    </CardText>
                    <CardActions style={{ backgroundColor: 'black' }} border>
                        <Button onClick={{href:'https://github.com/Jiyoad/api_project1/tree/master'}} colored><a style={{ color: 'white'}} href='https://github.com/Jiyoad/api_project1/tree/master' target="_blank" rel="noreferrer">Github</a></Button>
                        
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) { //MySQL/JQuery
            return (
            <Card className="project-cards" shadow={10} style={{ minWidth: '450', margin: 'auto' , borderRadius: '0px' }}>
                <CardTitle style={{ color: '#fff', height: '190px', background: 'url(https://www.bleepstatic.com/images/news/u/986406/Logos/MySQL-Logo.jpg) center / cover no-repeat'}}>Project #2</CardTitle>
                <CardText style={{ width: '91%', color: '#fff', backgroundColor: 'black' }}>
                    My second project in Case Western Reserve University Web Development Bootcamp!
            </CardText>
                <CardActions style={{ backgroundColor: 'black' }} border>
                    <Button style={{ color: 'white' }} colored><a style={{ color: 'white'}} href='https://quaran-tini.herokuapp.com/' target="_blank" rel="noreferrer">Heroku</a></Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        } else if (this.state.activeTab === 2) { //MongoDB/React/MERN
            return (
            <Card className="project-cards" shadow={10} style={{ minWidth: '450', margin: 'auto' , borderRadius: '0px' }}>
                <CardTitle style={{ color: '#fff', height: '190px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*dqvlaszRLvoPmARpOlLN9A.png) center / cover no-repeat', backgroundSize:'100%'}}>Project #3</CardTitle>
                <CardText style={{ width: '91%', color: '#fff', backgroundColor: 'black' }}>
                    My third project in Case Western Reserve University Web Development Bootcamp!
            </CardText>
                <CardActions style={{ backgroundColor: 'black' }} border>
                    <Button style={{ color: 'white' }} colored><a style={{ color: 'white'}} href='https://github.com/rtirabassi1994/project-3/tree/joe' target="_blank" rel="noreferrer">Github</a></Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ color: 'white' }}>HTML/CSS/JS</Tab>
                    <Tab style={{ color: 'white' }}>MySQL/JQuery</Tab>
                    <Tab style={{ color: 'white' }}>MongoDB/React/MERN</Tab>
                </Tabs>


                <section className="project-grid-container">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}
export default Projects;