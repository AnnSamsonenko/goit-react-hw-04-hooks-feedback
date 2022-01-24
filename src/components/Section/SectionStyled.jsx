import styled from "styled-components";
import { centerBlock, font } from "../../helpers/mixins";

export const Divide = styled.section`
  padding: ${(props) => props.theme.spacing(12)} 0;
`;

export const Container = styled.div`
  ${centerBlock};
  padding: 0 ${(props) => props.theme.spacing(4)};
  width: 1004px;
`;
export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 24, fw: 600, lh: 32 })};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.secondaryText};
`;
