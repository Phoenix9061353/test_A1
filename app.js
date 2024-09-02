const btnBlue = document.querySelector('.md_btn_blue');
const btnMain = document.querySelector('.md_btn_main');
const body = document.querySelector('body');

// btnBlue.addEventListener('click', () => {
//   body.setAttribute('data-theme', 'blue');
// });
// btnMain.addEventListener('click', () => {
//   body.setAttribute('data-theme', 'main');
// });

//隨主題色更換按鈕顏色
const btnMd = document.querySelectorAll('.md_btn');
// console.log(btnMd);
btnMd.forEach((b) => {
  b.addEventListener('click', () => {
    body.setAttribute('data-theme', b.classList[1].slice(7));
  });
});

//按下對應按鈕時，跑出相關的訊息
const btnLt = document.querySelectorAll('.lt_btn');
btnLt.forEach((b) => {
  b.addEventListener('click', () => {
    alert(`${b.getAttribute('title')}`);
  });
});
