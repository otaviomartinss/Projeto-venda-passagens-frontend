import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Routes, Route } from "react-router-dom";
import Cliente from "../cadastros/Cliente.jsx";
import Aluno from "../cadastros/Aluno.jsx";
import "font-awesome/css/font-awesome.css";
import { useNavigate } from "react-router-dom";
import Root from "../cadastros/Root.jsx";

// import "../css/style.css";

function Menu() {
  const history = useNavigate();
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          history(selected);
        }}
      >
        {/* fa fa-fw fa-address-book */}
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i
                className="fa fa-fw fa-address-book"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Cadastro</NavText>
            <NavItem eventKey="/cliente">
              <NavText>Cliente</NavText>
            </NavItem>
            <NavItem eventKey="/aluno">
              <NavText>Aluno</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/aluno" element={<Aluno />} />

      </Routes>
    </>
  );
}

export default Menu;
