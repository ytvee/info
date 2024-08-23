import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetaData";

// TODO: настроить seo -> https://www.gatsbyjs.com/blog/100days-seo/#gatsby-skip-here

const Seo = ({ pageTitle }) => {
    const siteTitle = useSiteMetadata();

    return (
        <title>
            {pageTitle} | {siteTitle}
        </title>
    );
};

export default Seo;
