import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layouts/DefaultLayout";
import BlogGalleryItem from "../DEPRECATED/BlogGalleryItem";
import { pageLabels } from "../components/AppHeader/meta";
import Seo from "../components/seo";
import "./style.css";

// TODO: сделать подсветку текущей страницы сайта в навигации
// TODO: SVG Sprite и hover на стрелочку под постом
// TODO: Собрать семантику запросов для блога
// TODO: добавить описание в siteMetadata
// TODO: поменять шрифты на ретро или газетные
// TODO: отрефакторить страницу об авторе
// TODO: поменять цвет выделения текста
// TODO: убрать выделение некоторых текстов (заголовков постов, подзаголовков страниц)
// TODO: добавить ховер фон цвет на посты
// TODO: сделать новую цветовую палитру и перепроверить каждый элемент сайта --> то же самое с размером шрита
// TODO: удалить класс text
// TODO: выставить transition везде

const IndexPage = ({ data }) => {
    const postsLength = data.allMdx.nodes.length;
    const bigPost = data.allMdx.nodes[postsLength - 1];
    const smallPosts = [
        data.allMdx.nodes[postsLength - 2],
        data.allMdx.nodes[postsLength - 3],
    ];

    return (
        <DefaultLayout>
            <main className="blog-container">
                <div className="text blog-page-big-title">Б Л О Г</div>

                <div className="last-posts-gallery">
                    <div className="big-post-container">
                        hello
                    </div>
                    <div className="small-posts-container">
                        hello
                    </div>
                </div>

                <div className="blog-gallery">
                    hello
                </div>
            </main>
        </DefaultLayout>
    );
};

export const query = graphql`
    query PostQuery {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo pageTitle={pageLabels.BLOG} />;

export default IndexPage;
