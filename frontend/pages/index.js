import gql from "graphql-tag";
import { graphql } from "react-apollo";
import _ from "lodash";

const Component = ({ data }) => (
  <div>
    {!data.loading &&
      _.map(
        data.posts,
        post =>
          console.log(post) || (
            <div key={post._id}>
              <img src={post.image} />
              <h1>{post.title}</h1> <h4>{post.description}</h4>
            </div>
          )
      )}
  </div>
);

export default graphql(
  gql`
    {
      posts {
        _id
        title
        description
        image
      }
    }
  `,
  {
    props: ({ data }) => ({
      data
    })
  }
)(Component);
