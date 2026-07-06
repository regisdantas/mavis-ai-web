import React from "react";
import { HeaderContainer } from "./styles";

interface IHeaderProps {
  title?: string;
  logo?: string;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <HeaderContainer>
      <div id="header-portal" className="titlebar">
        <span className="logo-title" onClick={() => window.location.reload()}>
          <img src={props.logo} />
          <h1>{props.title}</h1>
        </span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
