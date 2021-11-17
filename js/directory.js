const main = document.querySelector('main');
let html = '';

for ( i = 0; i < records.length; i++ ) {
	let record = records[i];
	html += `
		<h2>${record.torneo}</h2>
		<h2>${record.copa}</h2>
		<h3>${record.winnerOne} / ${record.winnerTwo} | ${record.team}</h3>
		<p>Torneos Ganados: ${record.winnerOne}: ${record.winOneRanking} / ${record.winnerTwo}: ${record.winTwoRanking}</p>
		<p>Fecha: ${record.date}</p>
		<image src="${record.photo}" alt="${record.project}" class="imgtwo">
`;
}

main.insertAdjacentHTML('beforeend', html);
