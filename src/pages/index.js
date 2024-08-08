import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { pageLabels } from "../components/AppHeader/meta";
import "./style.css";

// TODO: адаптировать под мобилку
// TODO: разобратьсяс с высотой экрана на разных экранах
// TODO: сделать подсветку текущей страницы сайта

const IndexPage = () => {
  return (
    <DefaultLayout>
      <main>MAIN PAGE</main>
    </DefaultLayout>
  )
}

export default IndexPage;

export const Head = () => <title>{pageLabels.BLOG}</title>
