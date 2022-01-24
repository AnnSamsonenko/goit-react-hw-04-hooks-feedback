import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const Message = styled.p`
  ${font({ fs: 16, fw: 600, lh: 20 })};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.buttonText};
`;
