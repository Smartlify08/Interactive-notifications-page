// Create fucntion for toggling mark all as read when mark all as read is clicked
// Check if it contains the class of unread, remove the unread class

function markAllAsRead(marked, unread) {
  const notficationsAmount = document.querySelector(".amount");
  console.log(notficationsAmount);
  console.log(marked);

  marked.addEventListener("click", () => {
    console.log("Marked all as read");
    marked.classList.add("text-dark");
    notficationsAmount.textContent = "0";
    console.log(unread);
    unread.forEach((unreadnotfication) => {
      console.log(unreadnotfication);
      unreadnotfication.classList.remove("unread");
      unreadnotfication.classList.add("bg-light");
    });
  });
}

function UI() {
  const unread = document.querySelectorAll(".unread");
  const btn = document.querySelector(".mark-all");
  markAllAsRead(btn, unread);
}

UI();
