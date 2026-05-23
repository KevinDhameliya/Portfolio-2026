import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="loader-container">
        <h1 className="loader-title" style={{ color: theme.text }}>
          Kevin Dhameliya
        </h1>

        <p className="loader-subtitle" style={{ color: theme.secondaryText }}>
          Kevin Dhameliya
        </p>
      </div>
    );
  }
}

export default LogoLoader;
