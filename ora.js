// document.addEventListener('DOMContentLoaded', () => {
// 	const watchBook = document.getElementById('watch-book');
// 	const loadMoreBtn = document.getElementById('load-more');
// 	let pageIndex = 0;

// 	function loadWatches() {
// 		pageIndex++;
// 		const xhr = new XMLHttpRequest();
// 		xhr.open('GET', `watches.json?page=${pageIndex}`);
// 		xhr.onload = () => {
// 			if (xhr.status === 200) {
// 				const watches = JSON.parse(xhr.responseText);
// 				watches.forEach(watch => {
// 					const watchDiv = document.createElement('div');
// 					watchDiv.classList.add('watch');
// 					watchDiv.innerHTML = `
// 						<h2>${watch.name}</h2>
// 						<img src="${watch.image}" alt="${watch.name}">
// 						<p>${watch.description}</p>
// 						<p>Price: ${watch.price}</p>
// 					`;
// 					watchBook.appendChild(watchDiv);
// 				});
// 				if (watches.length < 10) {
// 					loadMoreBtn.style.display = 'none';
// 				}
// 			} else {
// 				console.error('Error loading watches:', xhr.statusText);
// 			}
// 		};
// 		xhr.onerror = () => {
// 			console.error('Error loading watches');
// 		};
// 		xhr.send();
// 	}

// 	loadWatches();

// 	loadMoreBtn.addEventListener('click', loadWatches);
// });
function fel() {
	document.body.scrollTop = 0; i
	document.documentElement.scrollTop = 0; 
  } 

/*Ajax*/
document.getElementById('kuldes').addEventListener('click', function(){
	const faj = document.getElementById('faj').value;
	get_leiras(faj);
});

function get_leiras(faj){
    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const p = document.getElementById('leirasszoveg');
        let img = document.getElementById('suliKep');
        img.src = faj + '.jpg';
        p.innerHTML = xhttp.responseText;
    }
    
    xhttp.open('GET', faj+'.txt');
    xhttp.send();
}