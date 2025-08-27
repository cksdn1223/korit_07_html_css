const content = document.getElementById("content");
// content div 를 content 에 넣는다

function loadPage(page) {
  fetch(`./pages/${page}.html`) // pages 폴더에서 html 파일을 찾는다
    .then(res => res.text())  // 문자열로 변환
    .then(html => {
      content.innerHTML = html; //변환한 문자열들을 content 안에 삽입

      content.classList.remove("fade"); // content 변수에 들어가있는 content div 의 classList 중 fade 를 삭제
      void content.offsetWidth; //브라우저가 레이아웃 계산을 강제로 실행하게 함
      content.classList.add("fade");  // classList중 fade를 추가
      // 이런 연속적으로 제거했다 추가하는 작업을하면 무시해 버리고 최종 결과를 표시해
      // 애니메이션이 보이지 않는 경우가 있음
    })
    .catch(err => {
      content.innerHTML = "<p>페이지를 불러올 수 없습니다 😢</p>";
    });
}

// 메뉴 클릭 이벤트 등록
document.querySelectorAll(".list li").forEach(item => { // .list li 를 전부 선택해서 반복
  item.addEventListener("click", () => {  // .list li 에 click 이벤트를 추가
    const page = item.getAttribute("data-page");  // 속성이 data-page인 item 을 page 에 저장
    loadPage(page); // 저장한 page 를 loadPage 함수에 보냄
  });
});

// 처음 로딩 시 Home 불러오기
loadPage("home"); // 기본이 home 이니 처음에 바로 로딩
const homeItem = document.querySelector('.list li[data-page="home"]');  // 로딩 후 .list li 에 data-page 가 home 인 녀석을 homeItem에 저장
homeItem.style.background = "#005f99";  // homeItem에 저장한 녀석의 style 을 변경 누른상태로
homeItem.style.fontWeight = "bold";
homeItem.style.transform = "scale(1.05)";
homeItem.style.color = "#FFD700";

document.querySelectorAll(".list li").forEach(item => {
  item.addEventListener("click", () => {  // 마찬가지로 .list li 애들을 전부 반복시켜 클릭 이벤트 추가
    document.querySelectorAll(".list li").forEach(li => { // .list li 애들을 한번 더 반복시켜 스타일 초기화
      li.style.background = "";
      li.style.fontWeight = "";
      li.style.transform = "";
      li.style.color = "";
    });
    item.style.background = "#005f99";  // 클릭한 .list li 를 누른 상태로 스타일 변경
    item.style.fontWeight = "bold";
    item.style.transform = "scale(1.05)";
    item.style.color = "#FFD700";
  });
});