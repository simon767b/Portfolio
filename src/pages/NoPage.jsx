import React from "react";
import { Helmet } from "react-helmet-async";

export default function NoPage() {
  return (
    <>
      {/*Denne side er bare en tom side til 404 errors*/}
      <Helmet>
        <title>404 Page</title>
        <meta
          name="description"
          content="This is the 404 page of my portfolio."
        />
      </Helmet>
    </>
  );
}
