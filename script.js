document.addEventListener("DOMContentLoaded", () => {
  const bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
  const bookingForm = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");
  const eventTitle = document.getElementById("modalEventTitle");
  const ticketInput = document.getElementById("tickets");
  const myBookingsSpan = document.getElementById("myBookingsCount");

     let totalTickets = 0;
  document.querySelectorAll("button.btn-danger").forEach(button => {
    if (button.textContent.trim().toLowerCase() === "book now") {
      button.addEventListener("click", () => {
        const card = button.closest(".card");
        const title = card?.querySelector(".card-title")?.textContent?.trim();
        if (title) {
          eventTitle.textContent = `Book Tickets for "${title}"`;
        } else {
          eventTitle.textContent = "Book Tickets";
        }
        successMessage.classList.add("d-none");
        bookingForm.reset();
        bookingModal.show();
      });
    }
  });

 
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ticketsBooked = parseInt(ticketInput.value);
    if (!isNaN(ticketsBooked) && ticketsBooked > 0) {
      totalTickets += ticketsBooked;
      myBookingsSpan.textContent = totalTickets;
    }

    successMessage.classList.remove("d-none");

    setTimeout(() => {
      bookingModal.hide();
    }, 1500);
  });
});
