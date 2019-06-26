import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/apollo/withApollo";
import { ApolloProvider } from "react-apollo";
import { Global, css } from "@emotion/core";
import { PRIMARY, BLACK, BLACK_50 } from "~/styles";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Global
          styles={css`
            body {
              margin: 0px 20px 20px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
                "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
            }

            h2 {
              font-size: 22px;
              font-weight: 600;
              line-height: 1.18;
              margin: 0;
            }

            h5 {
              margin: 0;
            }

            p {
              font-size: 15px;
              line-height: 1.33;
              color: ${BLACK_50};
              margin: 0;
            }

            a {
              font-size: 15px;
              line-height: 1.33;
              color: ${BLACK_50};

              &:hover {
                color: ${BLACK};
              }
            }
          `}
        />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
