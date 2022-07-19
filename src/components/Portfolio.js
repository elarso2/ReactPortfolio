import React, { useState } from "react";
import Nav from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = usetState("About");

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
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
