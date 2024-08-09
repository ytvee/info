import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetaData";

const Seo = ({ pageTitle }) => {
    const siteTitle = useSiteMetadata();

    return (
        <title>
            {pageTitle} | {siteTitle}
        </title>
    );
};

export default Seo;
