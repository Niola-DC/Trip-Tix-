import React, { useState } from "react";
import BookTicket from "./book-ticket/BookTicket";
import DashboardModal from "./header/DashboardModal";
import Header from "./header/Header";
import ViewTicket from "./view-ticket/ViewTicket";
import Why from "./why_book_with_us/Why";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    console.log("Toggling modal:", !isModalOpen); // Debug log
    setIsModalOpen(!isModalOpen);
  };

  

  return (
    <section>
      <Header handleToggleModal={handleToggleModal} />
      <ViewTicket />
      <BookTicket />
      <Why />
      <DashboardModal isOpen={isModalOpen} onClose={handleToggleModal} />
    </section>
  );
}
