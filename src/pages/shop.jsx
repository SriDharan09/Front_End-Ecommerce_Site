import React from "react";
import { useState } from "react";
import ShopItems from "../components/shopItems";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // update pagination and track the current page
  const updatePagination = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };
  return (
    <>
      {/* Shop Banner */}
      <section className="shop-banner mt-2">
        <div className="text-center shop-banner-details d-flex flex-column justify-content-center p-3">
          <span className="text-white h2 shop-banner-head">
            {" "}
            Get Trendy Fashion OutFits
          </span>
          <h5 className="text-white mt-4 shop-banner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta
            debitis, et repellendus consequatur eligendi. Dolor totam cum, nulla
            temporibus, neque provident voluptate, quo accusantium obcaecati
            dolore at culpa ex!
          </h5>
        </div>
      </section>

      {/* Shop Products component that links to Shop items -> shop products */}
      <section className="shop-products p-5 ">
        <div className="container-xxl">
          <div className="row">
            <ShopItems />
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="paginationn p-3">
        <div className="container-xxl">
          <div className="row">
            <div
              className="d-flex justify-content-center align-items-center
        "
            >
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePagination(currentPage - 1);
                      }}
                    >
                      Previous
                    </a>
                  </li>

                  <li
                    className={`page-item ${currentPage === 1 ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePagination(1);
                      }}
                    >
                      1
                    </a>
                  </li>

                  <li
                    className={`page-item ${currentPage === 2 ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePagination(2);
                      }}
                    >
                      2
                    </a>
                  </li>

                  <li
                    className={`page-item ${currentPage === 3 ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePagination(3);
                      }}
                    >
                      3
                    </a>
                  </li>

                  <li
                    className={`page-item ${
                      currentPage === 3 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePagination(currentPage + 1);
                      }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
