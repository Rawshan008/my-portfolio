import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Layout from "../components/layout";
import PortfolioModal from "../components/portfolio-modal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Layout>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>

      {openModal && <PortfolioModal onClose={handleClose} />}
    </Layout>
  );
}
