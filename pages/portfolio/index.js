import { useState } from "react";
import Layout from "../../components/layout";
import PortfolioModal from "../../components/portfolio-modal";

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
      <div className="container mx-auto">
        <div className="flex justify-center mt-4">
          <button
            onClick={() => filterItem("all")}
            className="inline-block py-2 px-5 bg-black text-white mx-2"
          >
            All
          </button>
          <button
            onClick={() => filterItem("Cat1")}
            className="inline-block py-2 px-5 bg-black text-white mx-2"
          >
            Cat 1
          </button>
          <button
            onClick={() => filterItem("Cat2")}
            className="inline-block py-2 px-5 bg-black text-white mx-2"
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
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://images.pexels.com/photos/12166061/pexels-photo-12166061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {description}
                    </p>
                    <a
                      onClick={() => itemClickHandle(id)}
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
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
