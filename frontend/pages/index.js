import gql from "graphql-tag";
import { graphql } from "react-apollo";
import _ from "lodash";
import Post from "~/components/post";

const Component = ({ data }) => (
  <div>{!data.loading && _.map(data.posts, post => <Post {...post} />)}</div>
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
