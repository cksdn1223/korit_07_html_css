const content = document.getElementById("content");

function loadPage(page) {
  fetch(`./pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
      content.classList.remove("fade");
      void content.offsetWidth; // reflow 강제
      content.classList.add("fade");
    })
    .catch(err => {
      content.innerHTML = "<p>페이지를 불러올 수 없습니다 😢</p>";
    });
}

// 메뉴 클릭 이벤트 등록
document.querySelectorAll(".list li").forEach(item => {
  item.addEventListener("click", () => {
    const page = item.getAttribute("data-page");
    loadPage(page);
  });
});

// 처음 로딩 시 Home 불러오기
loadPage("home");
const homeItem = document.querySelector('.list li[data-page="home"]');
homeItem.style.background = "#005f99";
homeItem.style.fontWeight = "bold";
homeItem.style.transform = "scale(1.05)";
homeItem.style.color = "#FFD700";

document.querySelectorAll(".list li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".list li").forEach(li => {
      li.style.background = "";
      li.style.fontWeight = "";
      li.style.transform = "";
      li.style.color = "";
    });
    item.style.background = "#005f99";
    item.style.fontWeight = "bold";
    item.style.transform = "scale(1.05)";
    item.style.color = "#FFD700";
  });
});