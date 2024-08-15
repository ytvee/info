import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layouts/DefaultLayout";
import GalleryItem from "../components/GalleryItem";
import { pageLabels } from "../components/AppHeader/meta";
import Seo from "../components/seo";
import BigPost from "../components/BigPost";
import SmallPost from "../components/SmallPost";
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

    const LastPostsGallery = () => {
        return (
            <div className="last-posts-gallery">
                <BigPost
                    imageName={"image"}
                    date={bigPost.frontmatter.date}
                    title={bigPost.frontmatter.title}
                    description={bigPost.excerpt}
                    link={"link to post here"}
                />
                <div className="small-posts-container">
                    {smallPosts.map((post) => (
                        <SmallPost
                            key={post.id}
                            imageName={"image"}
                            date={post.frontmatter.date}
                            title={post.frontmatter.title}
                            description={post.excerpt}
                            link={"link to post here"}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <DefaultLayout>
            <main className="blog-container">
                <div className="text blog-page-big-title">Б Л О Г</div>
                <div className="text blog-page-sub-title">ПОСЛЕДНИЕ ПОСТЫ</div>
                <LastPostsGallery />
                <div className="text blog-page-sub-title">ВСЕ ПОСТЫ</div>
                <div className="blog-gallery">
                    {data.allMdx.nodes.map((node) => (
                        <GalleryItem
                            key={node.id}
                            postTitle={node.frontmatter.title}
                            description={node.excerpt}
                            link={`/blog/${node.frontmatter.slug}`}
                            date={node.frontmatter.date}
                            target={`_self`}
                        />
                    ))}
                </div>
            </main>
        </DefaultLayout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo pageTitle={pageLabels.BLOG} />;

export default IndexPage;
