function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const countClicks = createCounter();
document.getElementById("clickBtn").addEventListener("click", function () {
  const newCount = countClicks();
  document.getElementById("countt").textContent = `Clicked ${newCount} times`;
});
