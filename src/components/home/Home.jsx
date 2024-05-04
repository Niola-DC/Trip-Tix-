import BookTicket from "./book-ticket/BookTicket";
import Header from "./header/Header";
import ViewTicket from "./view-ticket/ViewTicket";
import Why from "./why_book_with_us/Why";

export default function Home() {
  return (
    <section>
        <Header/>
        <ViewTicket/>
        <BookTicket/>
        <Why/>
    </section>
  )
}
