const btn = document.querySelector('#category')
const jokesEl = document.querySelector('.jokes')

const categories = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

btn.addEventListener('click', ()=>{
	const category = prompt("Change category", "celebrity");
	if(category && categories.includes(category)){
		getCurrencies(category)
	} else{
		alert('Введіть коректну категорію')
	}
})

async function getCurrencies(category){
	const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
	const data = await response.json();
	const joke = await data;

	jokesEl.innerHTML = 
		`<br> category: ${joke.categories}
		<br> created at: ${joke.created_at}
		<br> value: ${joke.value}`
}

