import React, { useState } from "react";
import Nav from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Resume from "./pages/Resume";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
