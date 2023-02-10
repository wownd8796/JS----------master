// {
//   /* <script
//       src="https://code.jquery.com/jquery-3.6.3.js"
//       integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
//       crossorigin="anonymous"
//     ></script>
//     <script>
//       $.ajax({
//         method: "GET",
//         url: "https://dapi.kakao.com/v2/search/web",
//         data: { query: "영화 극한직업" },
//         headers: { Authorization: "KakaoAK ${REST_API_KEY}" },
//       }).done(function (msg) {
//         alert("Data Saved: " + msg);
//       });
//     </script> */

// }
/*
 JS to toggle scroll axis styles
*/

fetch("https://dapi.kakao.com/v2/search/vclip?query=김재중", {
  headers: { Authorization: "KakaoAK 0b60893d091cd8364a61aa1f6d5d17e1" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data.documents);
  });

const celebritys = document.querySelectorAll(".celebrity");
const groups = document.querySelector(".group");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});
