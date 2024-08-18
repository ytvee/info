import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DefaultLayout from "../../layouts/DefaultLayout";
import Seo from "../../components/seo";
import { pages } from "../../components/AppHeader/meta";
import "./style.css";

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <DefaultLayout>
            <div className="common-post-container">
                <div className="gatsby-image-container">
                    <GatsbyImage
                        image={image}
                        alt={data.mdx.frontmatter.hero_image_alt}
                    />
                </div>
                <div className="post-content-container">{children}</div>
                <div className="upper-anchor">
                    <Link to={pages[0].path} className="logo-link">
                    ← Вернуться назад
                </Link>
                </div>
            </div>
        </DefaultLayout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

// export const Head = () => <Seo pageTitle={pageLabels.CONTACTS} />;

export default BlogPost;
