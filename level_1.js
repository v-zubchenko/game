function new_btn() {
  let div_btn_1 = document.querySelector('.btn_1')
  let div_btn_2 = document.querySelector('.btn_2')
  let div_btn_3 = document.querySelector('.btn_3')
  let alphabet = 'йцукенгшщзхїфівапролджєячсмитьбю'

  for (var i = 0; i < alphabet.length; i++) {
    if(i <= 11){
      let btn = document.createElement('button')
      btn.classList.add('style_btn')
      btn.innerHTML = alphabet[i]
      div_btn_1.append(btn)
    }else if (i > 11 && i <= 22) {
      let btn = document.createElement('button')
      btn.classList.add('style_btn')
      btn.innerHTML = alphabet[i]
      div_btn_2.append(btn)
    }else if (i > 22) {
      let btn = document.createElement('button')
      btn.classList.add('style_btn')
      btn.innerHTML = alphabet[i]
      div_btn_3.append(btn)
    }
  }

}


function abc() {
  let secret_abc = ['р', 'у', 'к', 'а', 'в', 'и', 'ч', 'к', 'а']
  let div_secret = document.querySelector('.secret_abc')
  secret_abc.forEach((item, i) => {
    let div = document.createElement('div')
    div.classList.add('abc')
    div.innerHTML = item
    div_secret.append(div)
  });

}

function arraySum(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
	    sum += array[i];
	}
	return sum
}

let arr = []
function game() {
  let button = document.querySelectorAll('.style_btn')
	let abc = document.querySelectorAll('.abc')
  let win = document.querySelector('.win')
  button.forEach((item) => {
		item.addEventListener('click', function () {
			abc.forEach((item_2, i) => {
				if (item.innerHTML == item_2.innerHTML) {
					item_2.style.fontSize = '30px'

          arr[i] = 1
          let sum = arraySum(arr)
  				if (sum == abc.length) {
  					win.innerHTML = 'ПЕРЕМОГА'
  				}
				}
			});
		})
	});
}
abc()
new_btn()
game()
