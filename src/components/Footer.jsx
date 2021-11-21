import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as VideoGameSVG } from '../svg/videogame.svg';
import { ReactComponent as Linkedin } from '../svg/linkedin.svg';
import { ReactComponent as Email } from '../svg/email.svg';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Footer.css"

function Footer() {

  
  const [novidades, setNovidades] = useState(true);


  function validação() {
    alert("Sua mensagem foi enviado com sucesso!");
  }

  function linkedinGui(){
      window.location.href = ('https://www.linkedin.com/in/guilherme-bender/');
  }
  function linkedinAlice(){
    window.location.href = ('https://www.linkedin.com/in/alice-martofel-guzas-579428213/');
  }
  function linkedinJr(){
    window.location.href = ('https://www.linkedin.com/in/j%C3%BAnior-fogassi/');
  }


  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Alguma dúvida?
        </p>
        <p className="footer-subscription-text">
          Nos mande sua pergunta
        </p>
        <div className="input-areas">
          <form onSubmit={(event) => {
            event.preventDefault();
          }}>
            <TextField className="footer-input"
              id="filled-basic"
              label="Email"
              type="email"
              variant="filled"
              margin="normal"
              fullWidth
              required
            />

            <TextField className="textarea-footer"
              label="Deixe uma mensagem"
              type="text"
              variant="filled"
              margin="normal"
              multiline
              rows={5}
              rowsmax={5}
              fullWidth
            />


            <FormControlLabel
              label="Receber novidades do nosso site"
              control={<Switch
                checked={novidades}
                onChange={(event) => {
                  setNovidades(event.target.checked)
                }}
                name="novidades"
                color="primary" />}
            />


            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={validação}
            >
              Enviar
            </Button>
          </form>

        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-avatar">
            <h2>Vilões | Squad 1</h2>
            <Stack direction="column" spacing={7}>
              <Avatar alt="Guilherme Bender" src="images/gui.png" sx={{ width: 66, height: 66 }} />
              <Avatar alt="Alice Guzas" src="images/alice.png" sx={{ width: 66, height: 66 }} />
              <Avatar alt="Júnior Fogassi" src="images/jr.png" sx={{ width: 66, height: 66 }} />
            </Stack>
          </div>
          <div className='footer-link-info'>
            <h2>Integrantes</h2>
            <p>Guilherme Bender </p>
            <Link onClick={linkedinGui}><Linkedin/> Linkedin </Link>
            <p ><Email/> guibender_@hotmail.com </p>
            <p>__________________________________</p>
            <p>Alice Guzas </p>
            <Link onClick={linkedinAlice}><Linkedin/> Linkedin </Link>
            <p><Email/> guzasalice@gmail.com </p>
            <p>__________________________________</p>
            <p>Júnior Fogassi </p>
            <Link onClick={linkedinJr}><Linkedin/> Linkedin </Link>
            <p><Email/> jrfogassi@gmail.com </p>


          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              NEOGAMING
              <VideoGameSVG />
            </Link>
          </div>
          <small className='website-rights'>NeoGaming © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;