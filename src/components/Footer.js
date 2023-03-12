import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Projeto desenvolvido por
          {' '}
          <a href="https://github.com/coelhoreinaldo">Reinaldo Coelho</a>
          .
        </p>
        <p>
          Imagens dos personagens retiradas do site
          {' '}
          <a href="https://myanimelist.net/anime/1735/Naruto__Shippuuden">MyAnimeList.</a>
        </p>
        <p>
          Todos os personagens da série de mangá e anime Naruto
          pertencem a editora Shueisha e ao escritor Masashi Kishimoto.
          Todos os direitos reservados.
        </p>
      </footer>
    );
  }
}

export default Footer;
