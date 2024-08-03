import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactsForm from "../../components/ContactsForm";
import { pageLabels } from "../../components/AppHeader/meta";

const ContactPage = () => {
  return (
    <DefaultLayout>
      <ContactsForm />
    </DefaultLayout>
  )
}

export default ContactPage;

export const Head = () => <title>{pageLabels.CONTACTS}</title>
