import React, { useState } from "react";
import Navigation from "./Nav/NavTabs";

export default function Header({ handlePageChange, pages, currentPage }) {
  return (
    <>
      <header className="header">
        <h1 className="name text-center">Sam Craig (shmuushmuu)</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          pages={pages}
        />
      </header>
    </>
  );
}