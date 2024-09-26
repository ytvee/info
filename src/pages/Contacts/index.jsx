import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactsForm from "../../components/ContactsForm";
import MediaGallery from "../../components/MediaGallery";
import { mediaCards } from "../../utils/constants";
import "./style.css";

const Contacts = () => {
    return (
        <DefaultLayout>
            <div className="contacts-blocks">
                <ContactsForm />
                <MediaGallery
                    galleryTitle={"Медиа-проекты с моим участием"}
                    posts={mediaCards}
                />
            </div>
        </DefaultLayout>
    );
};

export default Contacts;
