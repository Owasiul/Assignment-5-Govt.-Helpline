// heart
const heart = document.querySelectorAll(".heartBtn");
heart.forEach((btn) => {
  btn.addEventListener("click", function () {
    const heartCounts = document.getElementById("heart");
    let count = parseInt(heartCounts.innerText);
    count += 1;
    heartCounts.innerText = count;
  });
});
// copy
const copyBtns = document.querySelectorAll(".copyBtn");
copyBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const copyCounts = document.getElementById("copy");
    let count = parseInt(copyCounts.innerText);
    count += 1;
    copyCounts.innerText = count;
  });
});
// call
const callBtns = document.querySelectorAll(".callBtn");
callBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const coin = document.getElementById("coin");
    let coinConvert = parseInt(coin.innerText);
    const card = btn.closest(".card");
const callId = card.querySelector(".callId").innerText;
const callNum = card.querySelector(".callNum").innerText;

    if (coinConvert <= 0) {
      alert(`আপনার পর্যাপ্ত ব্যালেন্স নেই, ন্যূনতম ২০ কয়েন প্রয়োজন`);
    } else {
      alert(`${callId}.. ${callNum}... কল হচ্ছে`);
      coin.innerText = coinConvert - 20;
    }
  });
});
