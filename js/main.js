$(document).ready(function() {
	$('#carousel').owlCarousel({
		autoPlay : true,
		autoPlayTimeout : 1500, 
		items : 1,
		loop : true,
		margin : 10
	})

	$( "#city-and-state" ).submit(function( event ) {
	  var city = $( "#city" ).val();
	  var state = $( "#state" ).val();

	  $.ajax({
		    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city + "%2C%20" + state + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
		    dataType: 'jsonp',
		    success: function(results){
		        var temp = results.query.results.channel.item.condition.temp;
		        var text = results.query.results.channel.item.condition.text;
		        $('.temp-result').html(temp);
	  			$('.text-result').html(text);
		    }
		});
	  $('.city-result').html(city);
	  $('.state-result').html(state);
	  event.preventDefault();
	});
})

