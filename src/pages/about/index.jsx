import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { pageLabels } from "../../components/AppHeader/meta";

const AboutPage = () => {
  return (
    <DefaultLayout>
      <main>Hello world about page</main>
    </DefaultLayout>
  )
}

export default AboutPage;

export const Head = () => <title>{pageLabels.ABOUT}</title>
