import { Divide, Container, Title } from "./SectionStyled";
import propTypes from "prop-types";
export const Section = ({ title, children }) => {
  return (
    <Divide>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Divide>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
