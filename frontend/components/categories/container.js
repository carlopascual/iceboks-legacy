import Component from "./component";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

export default graphql(
  gql`
    {
      categories {
        title
      }
    }
  `,
  {
    props: ({ data }) => ({
      categories: data.categories,
      loading: data.loading
    })
  }
)(Component);
