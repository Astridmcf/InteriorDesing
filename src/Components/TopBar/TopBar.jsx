import "../../App.css";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import { FaQuestionCircle } from "react-icons/fa";
import ModuloLogin from "../LoginLogoutModal/LoginModal/LoginModal";
import ModuloLogout from "../LoginLogoutModal/LogoutModal/LogoutModal";
import NameDisplay from "./NameDisplay.jsx";
import CompanyName from "./CompanyName.jsx";
import TopBarButton from "./TopBarButton.jsx";
import ModuloInformacion from "./InfoModal";

@inject("store")
@observer
class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleLoginShow = this.handleLoginShow.bind(this);
    this.handleLogoutShow = this.handleLogoutShow.bind(this);
    this.handleInfoShow = this.handleInfoShow.bind(this);
  }

  handleLoginShow(e) {
    e.preventDefault();
    this.props.store.cambiarModuloLogin(true);
  }

  handleLogoutShow(e) {
    e.preventDefault();
    this.props.store.cambiarModuloLogout(true);
  }

  handleInfoShow(e) {
    e.preventDefault();
    this.props.store.cambiarModuloInformacion(true);
  }

  render() {
    const { store } = this.props;
    return (
      <div className="top-bar">
        <div className="horizontal-flex">
          <img src="./logo-no-moon.svg" className="top-bar-logo" alt="" />
          <CompanyName message="InteriorDesing" />
        </div>
        <div className="horizontal-flex">
          {store.obtenerInicioDeSesion && (
            <div className="horizontal-flex">
              <NameDisplay nombreDeUsuario={store.nombreDeUsuario} />
              <TopBarButton
                message="Logout"
                clickFunc={this.handleLogoutShow}
              />
            </div>
          )}
          <Button
            className="custom-light-button"
            variant="light"
            onClick={this.handleInfoShow}
          >
            <FaQuestionCircle />
          </Button>
        </div>

        <ModuloLogin />
        <ModuloLogout />
        <ModuloInformacion />
      </div>
    );
  }
}

export default TopBar;
