import { useState } from "react";
import Layout from "../../components/layout";
import PortfolioModal from "../../components/portfolio-modal";
import SiteTitle from "../../components/site-title";

import MainItem from "../api/main";

const Portfolio = () => {
  const [item, setItem] = useState(MainItem);
  const [modalContent, setModalContent] = useState(MainItem);

  const [openModal, setOpenModal] = useState(false);

  const filterItem = (catItem) => {
    const updatedItem = MainItem.filter((curElem) => {
      return curElem.category === catItem;
    });

    if ("all" === catItem) {
      setItem(MainItem);
    } else {
      setItem(updatedItem);
    }
  };

  const itemClickHandle = (id) => {
    const updatedItem = MainItem.filter((curElem) => {
      return curElem.id === id;
    });

    setModalContent(updatedItem);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Layout>
      <div className="mx-auto py-10">
        <SiteTitle title="Portfolio" />
        <div className="flex mt-4">
          <button
            onClick={() => filterItem("all")}
            className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
          >
            All
          </button>
          <button
            onClick={() => filterItem("Cat1")}
            className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
          >
            Cat 1
          </button>
          <button
            onClick={() => filterItem("Cat2")}
            className="inline-block py-2 px-5 bg-base-color text-white mr-4 transition-all duration-300 hover:bg-body-color rounded-sm font-dosis font-medium tracking-wider uppercase"
          >
            Cat 2
          </button>
        </div>
        <div className="flex flex-wrap -mx-4">
          {item.map((elem) => {
            const { id, title, category, description } = elem;
            return (
              <div key={id} className="w-1/2 p-4">
                <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-lg"
                    src="https://images.pexels.com/photos/12166061/pexels-photo-12166061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight font-dosis text-body-color">
                      {title}
                    </h5>
                    <p className="mb-3 font-normal text-body-color font-bitter font-normal">
                      {description}
                    </p>
                    <a
                      onClick={() => itemClickHandle(id)}
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-base-color rounded-sm hover:bg-body-color focus:outline-none transition-all duration-300 font-bitter"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modalContent.map((item) => {
        const { id, title, category, description } = item;

        return (
          openModal && <PortfolioModal title={title} onClose={handleClose} />
        );
      })}
      {}
    </Layout>
  );
};

export default Portfolio;
