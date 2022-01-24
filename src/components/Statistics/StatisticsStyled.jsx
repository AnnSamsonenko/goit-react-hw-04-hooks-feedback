import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const List = styled.ul`
  padding: ${(props) => props.theme.spacing(6)};
  max-width: ${(props) => props.theme.spacing(72)};
  border-radius: ${(props) => props.theme.spacing(4)};
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: ${(props) => props.theme.colors.buttonBg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.buttonText};
  box-shadow: -5px -5px 20px ${(props) => props.theme.colors.white},
    5px 5px 20px ${(props) => props.theme.colors.colorShadow};
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(3)};
  }
`;
