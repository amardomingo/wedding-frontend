import Octicon, { MarkGithub } from "@primer/octicons-react";
import Emoji from "react-emoji-render";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <>
        <p>
          Contacta con nosotros en{" "}
          <a href="mailto:albertoysara9089@gmail.com">
            albertoysara9089@gmail.com
          </a>
        </p>
        <p>teléfonos: 660568605 (Sara) / 687103106 (Alberto) </p>
        <p>
          <Emoji text="Made with 💚 in Getafe by Sara & Alberto" />
        </p>
        <p>
          <a
            href="https://github.com/amardomingo/wedding-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fuente
          </a>{" "}
          disponible en <Octicon icon={MarkGithub} size={16} />
        </p>
      </>
    </footer>
  );
};

export default Footer;
