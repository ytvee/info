import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layouts/DefaultLayout";
import BlogGalleryItem from "./BlogGalleryItem";
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

export const isLastTwoPosts = (posts, post) => {
    const index = post.indexOf(posts);
    const length = posts.length;
    return index >= length - 2;
};

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
                        <BlogGalleryItem
                            PostTitle={bigPost.frontmatter.title}
                            description={bigPost.excerpt}
                            date={bigPost.frontmatter.date}
                        />
                    </div>
                    <div className="small-posts-container">
                        {smallPosts.map((post) => (
                            <BlogGalleryItem
                                key={post.id}
                                PostTitle={post.frontmatter.title}
                                description={post.excerpt}
                                date={post.frontmatter.date}
                                orientation="horizontal"
                            />
                        ))}
                    </div>
                </div>

                {/* <div className="blog-gallery">
                    {data.allMdx.nodes.map((node) => (
                        <BlogGalleryItem
                            key={node.id}
                            PostTitle={node.frontmatter.title}
                            description={node.excerpt}
                            date={node.frontmatter.date}
                        />
                    ))}
                </div> */}
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
