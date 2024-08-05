import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { pageLabels } from "../components/AppHeader/meta";
import "./style.css";

// TODO: стилизовать тоглер тем
// TODO: расширить на весь экран фон
// TODO: добавить ссылку на лого
// TODO: адаптировать под мобилку
// TODO: 

const IndexPage = () => {
  return (
    <DefaultLayout>
      <main>MAIN PAGE</main>
    </DefaultLayout>
  )
}

export default IndexPage;

export const Head = () => <title>{pageLabels.BLOG}</title>
