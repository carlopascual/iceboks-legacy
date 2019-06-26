import _ from "lodash";
import styled from "@emotion/styled";
import { breakpoints } from "~/breakpoints";
import decode from "ent/decode";
import { PRIMARY, BLACK_5, BLACK_25 } from "~/styles";

const Outline = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${BLACK_5};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0px;

    &:hover {
      background: initial;
    }
    .preview {
      display: none;
    }
  }
`;

const Category = styled.h5`
  display: inline;
  font-size: 12px;
  color: ${PRIMARY};
  font-weight: 600;
  text-transform: uppercase;
`;

const Url = styled.h5`
  font-size: 12px;
  line-height: 1.67;
  color: ${BLACK_25};
  font-weight: 400;
`;

const Component = ({
  title,
  description,
  categories,
  image,
  url,
  ...props
}) => (
  <Outline>
    <div style={{ marginRight: "20px" }}>
      {_.get(categories, "length", 0) >= 0 && (
        <div style={{ marginBottom: "6px" }}>
          {_.map(categories, category => (
            <Category style={{ marginRight: "10px" }}>
              {category.title}
            </Category>
          ))}
        </div>
      )}
      {console.log(unescape(title, "all"))}
      <h2 style={{ marginBottom: "10px" }}>{decode(title)}</h2>
      <p>{decode(description)}</p>
      <Url style={{ marginTop: "6px" }}>{url}</Url>
    </div>
    {console.log(props)}
    <img className="preview" style={{ height: "108px" }} src={image} />
  </Outline>
);

export default Component;
