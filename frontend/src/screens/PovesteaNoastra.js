import React from "react";
import "../styles/povesteanoastra.css";

const PovesteaNoastra = () => {
  return (
    <div class="container my-5">
      <div class="content container">
        <h1>Povestea mea</h1>
        <hr />
        <br />
        <p>
          Eu sunt Anca. <br /> <br />
          Sunt aici pentru tine dar mai ales pentru copii. Vreau sa le fac
          cunoștință cu cărțile și treptat să ajungă să le iubească într-un mod
          natural.
          <br />
          <br /> "Cărțile lui Matei" s-a născut cand Matei era încă în
          burtică....din dorința mea de a-mi îndeplini visul din copilărie.
          Mi-am dorit să am pentru copilul meu o bibliotecă mare, colorată,
          plină cu cărți de copii frumos ilustrate și variate. Visul meu s-a
          îndeplinit cu ajutorul cărților Usborne. Acum Matei crește frumos,
          înconjurat de cărțile Usborne din biblioteca lui și încă de la 4 luni
          le răsfoiește zilnic.
          <br />
          <br /> În același timp eu sunt înconjurată de părinți implicați,
          curioși și dornici să pornească în educația copilului cu materiale de
          calitate, fie chiar să recăștige copilului dorința de a deschide o
          carte printre gadget-uri și alte jucării. După peste 2 ani de
          activitate cu experiență vastă și feedback continuu de la clienți, am
          ajuns în acel punct în care știu să pun cartea Usborne potrivită in
          mâinile fiecărui copil.
          <br />
          <br />
          Abia aștept să ne cunoaștem!
        </p>
        <hr />
      </div>

      <video autoplay="" onloadstart="this.volume=0.2" loop id="myVideo">
        <source src="/video/cartileluimatei.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default PovesteaNoastra;
