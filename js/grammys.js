$.ajax({
	url : 'https://luisangeles99.github.io/Grammmys-Lab-3/data/grammys.json',
	type : 'GET',
	dataType : 'json',
	success : function(data){
		console.log(data)
		var newHtml=''

		for(var i = 0; i<10; i++){
			newHtml +=`
				<option value="${data.fields[i].field_id}">
					${data.fields[i].field}
				</option>
			`	
		}
		$('#category_types').append(newHtml)
		loadCategory()

	},
	error : function (errorMsg){
		console.log(errorMsg)
	},
})

function loadCategory(){
	$.ajax({
		url : 'https://luisangeles99.github.io/Grammmys-Lab-3/data/grammys.json',
		type : 'GET',
		dataType : 'json',
		success: function(data){
			$('#category_types').on('change', function(event){
				var id=$(this).val()
				$('#nominees_section').html("")
				var newHtml=''
				newHtml+=`
					<h1>${data.fields[id-1].field}</h1>
					<p>${data.fields[id-1].description}</p>
				`
				 
			for(var i = 0; i<data.fields[id-1].categories.length; i++){
				newHtml+=`
					<h2>${data.fields[id-1].categories[i].category_name}</h2>
					<p>${data.fields[id-1].categories[i].description}</p>
				`
				for(var j=0; j<data.fields[id-1].categories[i].nominees.length; j++){
							if(data.fields[id-1].categories[i].winner_id==j){
								newHtml+=`
								<ul>
									<li><h4 class="winner">${data.fields[id-1].categories[i].nominees[j].nominee}</h4>
									<span>Winner</span>
								`
							}
							else{
								newHtml+=`
								<ul>
									<li><h4>${data.fields[id-1].categories[i].nominees[j].nominee}</h4>
									
								`
							}
					newHtml+=`
							</li>
							<h5>${data.fields[id-1].categories[i].nominees[j].artist}</h5>
							<p>${data.fields[id-1].categories[i].nominees[j].info}</p>
							<br>
						</ul>
					`
				}
				newHtml+=`
					<div id="separacion"></div>
				`
			}
			$('#nominees_section').append(newHtml)
			})
	},
		error: function(errorMsg){
			console.log(errorMsg)
		},
	})
}
	