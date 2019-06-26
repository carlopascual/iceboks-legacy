import gql from "graphql-tag";
import _ from "lodash";
import { graphql } from "react-apollo";
import styled from "@emotion/styled";
import Post from "~/components/post";
import Categories from "~/components/categories";
import { Header } from "~/components/layout";
import { breakpoints } from "~/breakpoints";

const Outline = styled.div`
  display: grid;

  @media (max-width: ${breakpoints.mobile}px) {
    grid-row-gap: 50px;
  }
`;

const Component = ({ data }) => (
  <>
    <Header />
    <Categories style={{ marginBottom: "20px" }} />
    <Outline>
      {!data.loading && _.map(data.posts, post => <Post {...post} />)}
    </Outline>
  </>
);

export default graphql(
  gql`
    {
      posts {
        _id
        title
        description
        image
        url
        categories {
          title
        }
      }
    }
  `,
  {
    props: ({ data }) => ({
      data
    })
  }
)(Component);
