import React, { useReact} from "react";
import Header from "./Header";
import Footer from "./Footer";
import pageComponents from "./pages/index";

const pages = Object.keys(pageComponents);

export default function Homepage() {
    const [currentPage, setCurrentPage] = useState("About");

    const Page = () => pageComponents[currentPage]();
    const handlePageChange = (page) => setCurrentPage(page);
    return (
      <>
        <Header
          handlePageChange={handlePageChange}
          pages={pages}
          currentPage={currentPage}
        />
        <Page className="m-3 p-2 d-flex container min-vh-100" />
        <Footer />
      </>
    );
}