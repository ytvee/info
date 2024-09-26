import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import MaintenanceBlock from "../../components/MaintenanceBlock";
import "./style.css";

const Blog = () => {
    return (
        <DefaultLayout>
            <main className="blog-container">
                <MaintenanceBlock />
                {/* <div className="title blog-page-big-title">Б Л О Г</div>
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
                </div> */}
            </main>
        </DefaultLayout>
    );
};

export default Blog;
