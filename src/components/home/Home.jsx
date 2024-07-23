// Home.jsx
import React from "react";
import BookTicket from "./book-ticket/BookTicket";
import Header from "./header/Header";
import ViewTicket from "./view-ticket/ViewTicket";
import Why from "./why_book_with_us/Why";
import AdminDashboard from "./admin-dashboard/AdminDashboard";

export default function Home() {
  return (
    <section>
      <Header />
      <ViewTicket />
      <BookTicket />
      <Why />
      <AdminDashboard/>
    </section>
  );
}
