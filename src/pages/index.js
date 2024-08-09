import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { pageLabels } from "../components/AppHeader/meta";
import Seo from "../components/seo";
import "./style.css";

// TODO: сделать подсветку текущей страницы сайта
// TODO: Собрать семантику запросов для блога
// TODO: добавить описание в siteMetadata
// TODO: отрефакторить страницу об авторе
// TODO: сделать новую цветовую палитру и перепроверить каждый элемент сайта --> то же самое с размером шрита

const IndexPage = () => {
    
    return (
        <DefaultLayout>
            <main>MAIN PAGE</main>
        </DefaultLayout>
    );
};

export const Head = () => <Seo pageTitle={pageLabels.BLOG} />

export default IndexPage;
