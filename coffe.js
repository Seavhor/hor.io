const plusButtons =  document.querySelectorAll('.sum');
const minButtons =  document.querySelectorAll('.minus');

plusButtons.forEach(btn => {
    btn.onclick = function() {
        const input = this.parentElement.querySelector('.equal');
        input.value = Number(input.value) + 1;};
});
minButtons.forEach(btn => {
  btn.onclick = function() {
    const input = this.parentElement.querySelector('.equal');
    input.value = Number(input.value) - 1;};
});