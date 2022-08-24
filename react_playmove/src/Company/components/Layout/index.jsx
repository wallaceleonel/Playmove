import React from "react";

import Header from "../Header";
import CompanyList from "../CompanyList";
import Footer from "../Footer";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}