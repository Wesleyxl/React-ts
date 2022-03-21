import React from "react";

import WelcomeText from "../../components/WelcomeText";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <WelcomeText />
    </Container>
  );
};

export default Home;
