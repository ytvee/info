import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactsForm from "../../components/ContactsForm";
import MediaGallery from "../../components/MediaGallery";
import { pageLabels } from "../../components/AppHeader/meta";
import Seo from "../../components/seo";
import { posts } from "./meta";
import "./style.css";

const ContactPage = () => {
    return (
        <DefaultLayout>
            <div className="contacts-blocks">
                <ContactsForm />
                <MediaGallery
                    galleryTitle={"Медиа-проекты с моим участием"}
                    posts={posts}
                />
            </div>
        </DefaultLayout>
    );
};

export const Head = () => <Seo pageTitle={pageLabels.CONTACTS} />;

export default ContactPage;
