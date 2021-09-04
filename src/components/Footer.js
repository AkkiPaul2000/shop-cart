import React from 'react'
import  AppBar  from '@material-ui/core/AppBar';
import { Button, Container } from '@material-ui/core';
import  Toolbar  from '@material-ui/core/Toolbar';
import  Typography  from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer() {
    return (
        <AppBar position="static" color="primary" className="footer-bar">
          <Container maxWidth="md" className="container">
            <Toolbar>
                
              <Typography variant="body1" color="inherit">
                    <div className="footer">Follow me on:
                   <Button color="secondary"><a id="github" href="https://github.com/AkkiPaul2000" target="_blank"><GitHubIcon /></a></Button>
                   <Button color="secondary"><a id="twitter" href="https://twitter.com/SkyPaul2000" target="_blank"><TwitterIcon /></a></Button>
                   <Button color="secondary"><a id="facebook" href="https://www.facebook.com/akkipaul2000" target="_blank"><FacebookIcon /></a></Button>
                   <Button color="secondary"><a id="linkedIn" href="https://www.linkedin.com/in/akash-paul-6a715a1b2/" target="_blank"><LinkedInIcon /></a></Button>
                   <h5>©Akash Paul</h5>
                    </div>
                    
                    
              </Typography>
            </Toolbar>
            
          </Container>
        </AppBar>
    )
}
//© 