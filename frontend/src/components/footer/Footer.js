import React from "react";
import classNames from "classnames";
import Octicon, { MarkGithub } from "@primer/octicons-react";
import Emoji from "react-emoji-render";

import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "text-center",
        "text-muted",
        "mt-auto",
        "py-3",
        styles.footer
      )}
    >
      <>
        <p>
          Contacta con nosotros en{" "}
          <a href="mailto:albertoysara9089@gmail.com">
            albertoysara9089@gmail.com
          </a>
          .<p>teléfonos: 660568605 (Sara) / 687103106 (Alberto) </p>
        </p>
        <p>
          <Emoji text="Made with 💚 in Getafe by Sara & Alberto." />
        </p>
        <p>
          <a
            href="https://github.com/amardomingo/wedding-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fuente
          </a>{" "}
          disponible en <Octicon icon={MarkGithub} size={11} />
        </p>
      </>
    </footer>
  );
};

export default Footer;
