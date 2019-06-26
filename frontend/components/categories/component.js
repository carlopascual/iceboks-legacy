import _ from "lodash";
import styled from "@emotion/styled";
import { PRIMARY, BLACK_5, BLACK_10, BLACK, BLACK_50, WHITE } from "~/styles";
import { breakpoints } from "~/breakpoints";

const Outline = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 41px;
`;

const Sorting = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
  color: ${BLACK_50};
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    color: ${BLACK};
    background: ${BLACK_5};
    border: 1px solid transparent;
  }
`;

const Category = styled.button`
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  color: ${PRIMARY};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background: ${BLACK_5};
  }

  &:focus {
    outline: 0;
  }

  &.selected {
    color: ${WHITE};
    background: ${PRIMARY};
  }
`;

const Component = ({ loading, categories, style }) => (
  <Outline style={style}>
    <Sorting style={{ position: "absolute", left: 0 }}>Popular</Sorting>
    <div>
      {_.map(categories, category => (
        <Category style={{ margin: "0 3px" }}>{category.title}</Category>
      ))}
    </div>
    <Sorting style={{ position: "absolute", right: 0 }}>Filters</Sorting>
  </Outline>
);

export default Component;
