import * as React from "react";
import AppHeader from "../../components/AppHeader";

const DefaultLayout = ({children}) => {
  return (
    <div className="container">
      <AppHeader />
      <main className="default-layout">
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout;
