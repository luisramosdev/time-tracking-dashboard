import data from './data.json' assert {type: 'json'};

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

let bgColors = [
'hsl(15, 100%, 70%)',
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
'hsl(43, 84%, 65%)'
];

drawElements(dailyArray);

dailyBtn.addEventListener('click', ()=>{
	weeklyBtn.classList.remove('main-card__frequency--active');
	monthlyBtn.classList.remove('main-card__frequency--active');
	dailyBtn.classList.add('main-card__frequency--active');
	drawElements(dailyArray)
});

weeklyBtn.addEventListener('click', ()=>{
	dailyBtn.classList.remove('main-card__frequency--active');
	monthlyBtn.classList.remove('main-card__frequency--active');
	weeklyBtn.classList.add('main-card__frequency--active');
	drawElements(weeklyArray)
});

monthlyBtn.addEventListener('click', ()=>{
	dailyBtn.classList.remove('main-card__frequency--active');
	weeklyBtn.classList.remove('main-card__frequency--active');
	monthlyBtn.classList.add('main-card__frequency--active');
	drawElements(monthlyArray)
});

function drawElements(array){

	secondSection.innerHTML = '';
	array.forEach( (element, index)=>{
		let title = data[index].title;
		let titleLowerCase = title.toLowerCase().replace(' ', '-');

		secondSection.innerHTML += `
		<div class="card">
	        <div class="card__background" style="background-color: ${bgColors[index]}">
	        	<img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
	        </div>
        	<div class="card__details">
	        	<div class="card__activity">
	            	<p class="card__title">${data[index].title}</p>
	            	<img src="./images/icon-ellipsis.svg" alt="three dots">
	          	</div>
          		<div class="card__time">
		            <p class="card__hours">${element.current}hrs</p>
		            <p class="card__previous">Previous - ${element.previous}hrs</p>
          		</div>
    		</div>
      	</div>`
	})
}