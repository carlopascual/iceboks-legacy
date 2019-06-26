import styled from "@emotion/styled";

// follows google chrome's breakpoints
export const breakpoints = {
  mobile: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  fourk: 2560
};

const BreakpointWrapper = styled.div`
  // mobile
  @media (max-width: ${breakpoints.mobile}px) {
    background: orange;
    ${props => props.mobile}
  }

  // tablet
  @media (min-width: ${breakpoints.mobile +
      1}) and (max-width: ${breakpoints.tablet}) {
    background: blue;
    ${props => props.tablet}
  }

  // laptop
  @media (min-width: ${breakpoints.tablet +
      1}) and (max-width: ${breakpoints.laptop}) {
    ${props => props.laptop}
  }

  // desktop
  @media (min-width: ${breakpoints.laptop +
      1}) and (max-width: ${breakpoints.desktop}) {
    ${props => props.desktop}
  }

  // 4k
  @media (min-width: ${breakpoints.fourk}px) {
    ${props => props.fourk}
  }
`;

export default BreakpointWrapper;
