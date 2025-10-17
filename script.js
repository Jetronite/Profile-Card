document.addEventListener("DOMContentLoaded", () => {
  const userTime = document.querySelector('[data-testid="test-user-time"]');
  
  if (userTime) {
    userTime.textContent = Date.now();
    setInterval(() => {
      userTime.textContent = Date.now();
    }, 1000);
  }
});
