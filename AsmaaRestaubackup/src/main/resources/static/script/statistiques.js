$(document).ready(function(){
	
	
// # ===============================
// # = Nombre des Restaurants
// # ===============================
	$.ajax({
		url : 'Restaurants/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#restaurant').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});

	
	
// # ===============================
// # = Nombre des villes
// # ===============================
	$.ajax({
		url : 'Villes/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#ville').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
		
// # ===============================
// # = Nombre des series
// # ===============================
	$.ajax({
		url : 'Series/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#serie').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
	
	
// # ===============================
// # = Nombre des restaurants par zone
// # ===============================
	$.ajax({
		url : 'Restaurants/count',
		contentType : "application/json",
		dataType : "json",
		data : '',
		type : 'GET',
		async : false,
		success : function(data) {
			console.log(data);
			
			var labels = new Array();
			var dt = new Array();
			
			Object.keys(data).forEach(key => {
				   labels.push(key); // returns the keys in an object
				   dt.push(data[key]);  // returns the appropriate value
			});
				
			var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: labels,
			        datasets: [{
			            data: dt,
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255, 99, 132, 1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			    	title: {
	                    display: true,
	                    text: 'Nombre des restaurants par zone',
	                    fontSize: 21,
	                    padding: 20,
	                    fontFamily: 'Calibri',
	                },	
	                legend: {
	                    display: false
	                },
			    	type: 'line',
			        scales: {
			           
	                yAxes: [{
		                	ticks: {
				                    beginAtZero: true
				            },	
		                    scaleLabel: {
		                      display: true,
		                      labelString: 'Nombre des restaurants'
		                    }
	                }],
	                xAxes: [{
		                    scaleLabel: {
		                      display: true,
		                      labelString: 'Zones'
		                    }
		            }],
			        }
			    }
			});
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});    

	
// # ===============================
// # = Nombre des Restaurants
// # ===============================
	$.ajax({
		url : 'Zones/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#zone').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});

	
	

	
  

// # ===============================
// # = Nombre des restaurants par zone
// # ===============================
	$.ajax({
		url : 'Zones/count',
		contentType : "application/json",
		dataType : "json",
		data : '',
		type : 'GET',
		async : false,
		success : function(data) {
			console.log(data);
			
			var labels = new Array();
			var dt = new Array();
			
			Object.keys(data).forEach(key => {
				   labels.push(key); // returns the keys in an object
				   dt.push(data[key]);  // returns the appropriate value
			});
				
			var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: labels,
			        datasets: [{
			            data: dt,
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255, 99, 132, 1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			    	title: {
	                    display: true,
	                    text: 'Nombre des restaurants par zone',
	                    fontSize: 21,
	                    padding: 20,
	                    fontFamily: 'Calibri',
	                },	
	                legend: {
	                    display: false
	                },
			    	type: 'line',
			        scales: {
			           
	                yAxes: [{
		                	ticks: {
				                    beginAtZero: true
				            },	
		                    scaleLabel: {
		                      display: true,
		                      labelString: 'Nombre des restaurants'
		                    }
	                }],
	                xAxes: [{
		                    scaleLabel: {
		                      display: true,
		                      labelString: 'Zones'
		                    }
		            }],
			        }
			    }
			});
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});    
});
