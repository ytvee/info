import * as React from "react";
import AppHeader from "../components/AppHeader";
import DefaultLayout from "../layouts/DefaultLayout";
import "./style.css";

const IndexPage = () => {
  return (
    <div className="app">
      <DefaultLayout>
        <p>hello</p>
      </DefaultLayout>
    </div>
  )
}

export default IndexPage;

export const Head = () => <title>YT Blog</title>
