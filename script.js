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
    const card = btn.closest(".card");
    const callNum = card.querySelector(".callNum").innerText;
    const copyCounts = document.getElementById("copy");
    alert(`number is copied: ${callNum}`)
    let count = parseInt(copyCounts.innerText);
    count += 1;
    copyCounts.innerText = count;
  });
});
// call
const callHistory = [];
const callBtns = document.querySelectorAll(".callBtn");
callBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const coin = document.getElementById("coin");
    let coinConvert = parseInt(coin.innerText);
    const card = btn.closest(".card");
    const callId = card.querySelector(".callId").innerText;
    const callNum = card.querySelector(".callNum").innerText;
    const callHistoryContainer = document.getElementById("history_container");
    const date = new Date().toLocaleTimeString();

    if (coinConvert <= 0) {
      alert(`আপনার পর্যাপ্ত ব্যালেন্স নেই, ন্যূনতম ২০ কয়েন প্রয়োজন`);
    } else {
      alert(`কল হচ্ছে.. ${callId}.. ${callNum}.. `);
      coin.innerText = coinConvert - 20;
      const div = document.createElement("div");
      div.innerHTML = `
          <div
                class="rounded-lg p-4 mt-5 flex flex-row items-center justify-between bg-[#FAFAFA]"
              >
                <div class="astitle">
                  <h3>${callId}</h3>
                  <h4>${callNum}</h4>
                </div>
                 <span> ${date} </span>
              </div>
          `;
      callHistory.push = {
        id: callId,
        num: callNum,
        time: date,
      };
      callHistoryContainer.appendChild(div);
    }
  });
});
// clear
document.getElementById('clear').addEventListener('click', function(){
   return document.getElementById('history_container').innerHTML = ''
})
