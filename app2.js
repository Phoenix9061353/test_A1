const btnNext = document.getElementById('next');
const btnBack = document.getElementById('back');
const step = Array.from(document.querySelectorAll('.step'));
let count = 0;

btnNext.addEventListener('click', () => {
  if (count <= 3) {
    count += 1;
    step[count].classList.add('step_active');
  }
});
btnBack.addEventListener('click', () => {
  if (count > 0) {
    step[count].classList.remove('step_active');
    count -= 1;
  }
});
