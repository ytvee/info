import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { pageLabels } from "../components/AppHeader/meta";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import "./style.css";

// TODO: сделать подсветку текущей страницы сайта в навигации
// TODO: Собрать семантику запросов для блога
// TODO: добавить описание в siteMetadata
// TODO: поменять шрифты на ретро или газетные
// TODO: отрефакторить страницу об авторе
// TODO: сделать новую цветовую палитру и перепроверить каждый элемент сайта --> то же самое с размером шрита

const IndexPage = ({ data }) => {
    console.log(data);
    return (
        <DefaultLayout>
            <main>
                Blog PAGE
                <div>hello</div>
                <div>
                    {data.allFile.nodes.map((node) => (
                        <p key={node.name}>{node.name}</p>
                    ))}
                </div>
            </main>
        </DefaultLayout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export const Head = () => <Seo pageTitle={pageLabels.BLOG} />;

export default IndexPage;
