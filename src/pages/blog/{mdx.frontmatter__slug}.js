import * as React from "react";
import Seo from "../../components/seo";
import DefaultLayout from "../../layouts/DefaultLayout";
import { pageLabels } from "../../components/AppHeader/meta";

const BlogPost = () => {
    return (
        <DefaultLayout>
            <div className="">
                <h1>Hello</h1>
            </div>
        </DefaultLayout>
    );
};

// export const Head = () => <Seo pageTitle={pageLabels.CONTACTS} />;

export default BlogPost;
