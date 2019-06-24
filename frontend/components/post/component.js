import styled from "@emotion/styled";

const Outline = styled.div`
  font-weight: 400;
`;

const Component = ({ title, description, ...props }) => (
  <Outline>
    {console.log(props)}
    <h2>{title}</h2>
    <h4>{description}</h4>
  </Outline>
);

export default Component;
