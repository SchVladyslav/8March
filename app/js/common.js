$(function() {
  const linkObserver = new IntersectionObserver((entries, itemObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentBlock = entry.target.className;
        currentBlock === "brama-wrapper" ? console.log("wrapper-brama") : null;
        console.log("test", currentBlock);
      }
    });
  });
  const bramaLink = document.querySelector(".brama-link");
  const parallink = document.querySelector(".paral-link");
  linkObserver.observe(bramaLink);
  linkObserver.observe(parallink);
});
