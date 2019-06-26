import styled from "@emotion/styled";
import { breakpoints } from "~/breakpoints";
import { BLACK, BLACK_10 } from "~/styles";

const Outline = styled.div`
  padding: 30px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 112px 1px 1fr 20px;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr 20px;
    grid-row-gap: 30px;

    .desktop {
      display: none;
    }

    .logo {
      order: 1;
    }

    .menu {
      order: 2;
    }

    .recommendation {
      order: 3;
      grid-column-end: span 2;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: ${BLACK_10};
`;

const Recommendation = ({ ...props }) => (
  <p style={{ color: BLACK }} {...props}>
    Free resources library. Know an awesome resource? Get in touch ✍️
  </p>
);

const Component = () => (
  <>
    <Outline className="header-outline">
      <img src="/static/logo.svg" className="logo" />
      <Divider className="desktop" />
      <p style={{ color: BLACK }} className="recommendation">
        Free resources library. Know an awesome resource? Get in touch ✍️
      </p>
      <img src="/static/burger.svg" className="menu" />
    </Outline>
  </>
);

export default Component;
