import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as VideoGameSVG } from '../svg/videogame.svg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Footer.css"

function Footer() {

  const [promocoes,setPromocoes] = useState(true);
  const [novidades,setNovidades] = useState(true);


  function validação() {
    alert("FeedBack enviado com sucesso!");
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
              rowsMax={5}
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
          <div className="footer-link-items">
            <h2>Sobre nós</h2>
          <Stack className="avatar" direction="row">
            <Avatar  alt="Guilherme Bender" src="images/gui.png" sx={{ width: 66, height: 66 }} />
            <Avatar  alt="Alice Guzas" src="images/alice.png"  sx={{ width: 66, height: 66 }} />
            <Avatar  alt="Júnior Fogassi" src="images/jr.png"  sx={{ width: 66, height: 66 }} />
          </Stack>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              NEOGAMING
              <VideoGameSVG />
            </Link>
          </div>
          <small class='website-rights'>NeoGaming © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;