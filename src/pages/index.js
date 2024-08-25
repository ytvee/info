import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layouts/DefaultLayout";
import GalleryItem from "../components/GalleryItem";
import BigPost from "../components/BigPost";
import SmallPost from "../components/SmallPost";
import { pageLabels } from "../components/AppHeader/meta";
import { allPostsData } from "./meta";
import Seo from "../components/seo";
import "./style.css";

const IndexPage = ({ data }) => {
    const bigPost = data.allMdx.nodes[0];
    const smallPosts = [
        data.allMdx.nodes[1],
        data.allMdx.nodes[2],
    ];
    console.log(smallPosts[0]);

    const LastPostsGallery = () => {
        return (
            <div className="last-posts-gallery">
                <BigPost
                    date={bigPost.frontmatter.date}
                    title={bigPost.frontmatter.title}
                    description={bigPost.excerpt}
                    link={`/blog/${bigPost.frontmatter.slug}`}
                >
                    <div className="media-image-container">
                        <img
                            className="media-image post-img"
                            src={allPostsData[bigPost.frontmatter.title]}
                            alt={"image"}
                        />
                    </div>
                </BigPost>
                <div className="small-posts-container">
                    {smallPosts.map((post) => (
                        <SmallPost
                            key={post.id}
                            date={post.frontmatter.date}
                            title={post.frontmatter.title}
                            description={post.excerpt}
                            link={`/blog/${post.frontmatter.slug}`}
                        >
                            <div className="post-image-container">
                                <img
                                    className="media-image post-img"
                                    src={allPostsData[post.frontmatter.title]}
                                    alt={"image"}
                                />
                            </div>
                        </SmallPost>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <DefaultLayout>
            <main className="blog-container">
                <div className="title blog-page-big-title">Б Л О Г</div>
                <div className="subtitle blog-page-sub-title">
                    ПОСЛЕДНИЕ ПОСТЫ
                </div>
                <LastPostsGallery />
                <div className="subtitle blog-page-sub-title">ВСЕ ПОСТЫ</div>
                <div className="blog-gallery">
                    {data.allMdx.nodes.map((node) => (
                        <GalleryItem
                            key={node.id}
                            postTitle={node.frontmatter.title}
                            description={node.excerpt}
                            link={`/blog/${node.frontmatter.slug}`}
                            date={node.frontmatter.date}
                            isPost={true}
                        >
                            <div className="post-image-container">
                                <img
                                    className="media-image post-img"
                                    src={allPostsData[node.frontmatter.title]}
                                    alt={"image"}
                                />
                            </div>
                        </GalleryItem>
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
