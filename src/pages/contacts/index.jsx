import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactsForm from "../../components/ContactsForm";
import Gallery from "../../components/Gallery";
import { pageLabels } from "../../components/AppHeader/meta";
import { posts } from "./meta";
import "./style.css";

const ContactPage = () => {
    return (
        <DefaultLayout>
            <div className="contacts-blocks">
                <ContactsForm />
                <Gallery
                    title={"Медиа-проекты с моим участием"}
                    posts={posts}
                />
            </div>
        </DefaultLayout>
    );
};

export default ContactPage;

export const Head = () => <title>{pageLabels.CONTACTS}</title>;
