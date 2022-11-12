import React from "react";
import './Footer.css';

const Footer = ({idade, nome}) => {
  const idade1 = 27;
  const idade2 = 17;
  const idade3 = 20;
  const lista = [1, 2, 3, 4];
  const theme = 'dark';

  console.log(idade)
  console.log(nome)

  const menuStyle = {
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
          fontWeight: 'bold'
        };

  const renderizarOTexto = () => {
    return `A idade é ${idade1}`;
  }

  return (
     <footer>
      { idade1 > 17 ? <div>Um texto 1</div> : ""}
      { idade2 > 17 ? <div>Um texto 2</div> : ""}
      { idade3 > 17 ? <div>Um texto 3</div> : ""}


      { renderizarOTexto() }

      <ul className="menu" id="teste" style={menuStyle}>
        {
          lista.map((item, idx) => <li key={`lista-principal-${idx}`}>Item {item} - {idx}</li>)
        }
      </ul>

      <ul style={menuStyle}>
        {
          lista.map((item, idx) => <li key={`lista-secundaria-${idx}`}>Item {item} - {idx}</li>)
        }
      </ul>
    </footer>
  )
}

Footer.defaultProps = {
  idade: 0
}

export default Footer;