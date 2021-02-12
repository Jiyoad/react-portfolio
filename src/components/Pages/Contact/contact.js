import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "./style.css";


// var contactImg = require('../../../assets/contact-me.jpg');
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>
                            Joseph Pohl
                        </h2>
                        <img src='./assets/contact-me.jpg'
                            alt="avatar"
                            style={{ height: '24vw' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Happy to hear from you.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ color: 'white' ,fontSize: '3vw', fontFamily: 'Anton' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                    (440) 479-8820
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                <ListItemContent style={{ color: 'white' ,fontSize: '3vw', fontFamily: 'Anton' }}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                    jiyoad@gmail.com
                                </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;