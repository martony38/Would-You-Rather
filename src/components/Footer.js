import React from "react";
import { Jumbotron, Grid } from "react-bootstrap";
import lsLogo1 from "../icons/Logo_ls_1.png";
import lsLogo2 from "../icons/Logo_ls_2.png";

const Footer = () => (
  <Jumbotron
    style={{
      marginTop: "5rem",
      marginBottom: 0,
      background: "none"
    }}
  >
    <Grid>
      <p style={{ fontSize: "small" }}>
        Made by{" "}
        <a
          style={{ position: "relative" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://ls-portfolio.surge.sh"
        >
          <img className="styled-logo-1" alt="ls" src={lsLogo1} />
          <img className="styled-logo-2" alt="ls" src={lsLogo2} />
        </a>
      </p>
      <p style={{ fontSize: "small" }}>
        This work is licensed under{" "}
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://opensource.org/licenses/mit-license.php"
        >
          MIT
        </a>
        .
      </p>
    </Grid>
  </Jumbotron>
);

export default Footer;
