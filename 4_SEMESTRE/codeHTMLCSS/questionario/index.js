let inputs = document.querySelectorAll('input[type="radio"]');

let btn_sub = document.getElementById('btn-submit');

let answers = { 1: '', 2: '', 3: '', 4: '', 5: '' };

const validateInputs = (e) => {
  let { value, id } = e.target;
  answers[parseInt(id[1])] = value;
  let valid = true;
  for (let key in answers) {
    if (!answers[key]) {
      valid = false;
    }
  }
  if (valid) {
    btn_sub.disabled = false;
  }
}

for (let input of inputs) {
  input.addEventListener('change', validateInputs)
};

let btn_clear = document.getElementById('btn-clear');

btn_clear.addEventListener('click', () => {
  for (let input of inputs) {
    input.checked = false;
  }
  answers = { 1: '', 2: '', 3: '', 4: '', 5: '' };
  btn_sub.disabled = true;
})