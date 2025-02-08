const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e172cf50d4msh29f1444eeb528fep12e0a0jsnc5cf910a919e',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424948'})
};


let graphData = [];
fetch(url, options)
.then(res => res.json())
.then(data => {
	//console.log(data);

	for(let i=0;i<25;i++){
		graphData.push({
			"name" : data.trends[i].name,
			"volume" : data.trends[i].volume
		})
	}

	console.log(graphData);

	//object parameter that represent each object of graphdata
	//compiles all object volume and store to container variable
	let topics = graphData.map(object => {
	  return object.name
	})

	console.log(topics);

	//object parameter that represent each object of graphdata
	let volumes = graphData.map(object => {
	  return object.volume
	})

	console.log(volumes);

	const myChart = document.getElementById("myChart");
	console.log(myChart);

	let barChart = new Chart(myChart,{
		type: 'bar',
		date:{
			label:topics,
			datasets: [{
				label: '# of xeets',
				data: volumes, //will be the basis of sizes of bars
				borderWidth: 2,
				backgroundColor:[
					'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
				],
				borderColor:[
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				],
				hoverBackgroundColor:[
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				],

			}]
		},
		options : {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})
})



// let myPost = {
// 	name: "Data Visualization Workshop Done",
// 	queryUrl: "search?q=%data+Visualization+Workshop",
// 	volume: 31799
// }

// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);

// let graphData = [
// 		{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
// 		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400},	
// 	];

// graphData.push(myPost);
// console.log(graphData[0].name);
// console.log(graphData[0].volume);
// console.log(graphData[1].name);
// console.log(graphData[1].volume);
