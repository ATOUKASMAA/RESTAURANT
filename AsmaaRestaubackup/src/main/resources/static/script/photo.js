$(document)
		.ready(
				function() {

					table = $('#tphoto')
							.DataTable({
										ajax : {
											url : "Photos/all",
											dataSrc : ''
										},
										columns : [
												{
													data : "id"
												},
												{
													data : "url"
												},
												
												{
													data : "restaurant.nom"
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-danger supprimer">Supprimer</button>';
													}
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';
													}
												} ]

									});
					
					$.ajax({
						url:'/Restaurants/all',
						type:'GET',
						success : function(data) {
							var option = '';
							data.forEach(e=>{
								option += '<option value ='+e.id+'>'+e.nom+'</option>';
							});
							
						$('#restaurant').append(option);
						},
						error : function(jqXHR, textStatus,
								errorThrown) {
							console.log(textStatus);
						}
						
					});

					$('#btn').click(
							function() {
								var url = $("#url");
								
								var restaurant = $("#restaurant");
								if ($('#btn').text() == 'Ajouter') {
									var p = {
										url : url.val(),
										
										restaurant : {
											id : restaurant.val()
										}
									};

									$.ajax({
										url : 'Photos/save',
										contentType : "application/json",
										dataType : "json",
										data : JSON.stringify(p),
										type : 'POST',
										async : false,
										success : function(data, textStatus,
												jqXHR) {
											table.ajax.reload();
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
									});
									$("#main-content").load(
											"./page/photo.html");
								}
							});

					$('#table-content')
							.on(
									'click',
									'.supprimer',
									function() {

										var id = $(this).closest('tr').find(
												'td').eq(0).text();
										var oldLing = $(this).closest('tr')
												.clone();
										var newLigne = '<tr style="position: relative;" class="bg-light" ><th scope="row">'
												+ id
												+ '</th><td colspan="4" style="height: 100%;">';
										newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette photo ? </h4>';
										newLigne += '<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
										newLigne += '<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

										$(this).closest('tr').replaceWith(
												newLigne);
										$('.annuler').click(
												function() {
													$(this).closest('tr')
															.replaceWith(
																	oldLing);
												});
										$('.confirmer')
												.click(
														function(e) {
															e.preventDefault();
															$
																	.ajax({
																		url : 'Photos/delete/'
																				+ id,
																		data : {},
																		type : 'DELETE',
																		async : false,
																		success : function(
																				data,
																				textStatus,
																				jqXHR) {
																			if (data
																					.includes("error") == true) {
																				$(
																						"#error")
																						.modal();
																			} else {
																				table.ajax
																						.reload();
																			}
																		},
																		error : function(
																				jqXHR,
																				textStatus,
																				errorThrown) {
																			$(
																					"#error")
																					.modal();
																		}
																	});

														});

									});

					$('#table-content').on(
							'click',
							'.modifier',
							function() {
								var btn = $('#btn');
								var id = $(this).closest('tr').find('td').eq(0)
										.text();
								
								var url = $(this).closest('tr').find('td').eq(
										1).text();
								
								var restaurant = $(this).closest('tr').find('td')
								.eq(2).text();
							
								
								btn.text('Modifier');
								$("#url").val(url);
								
								var op = $('#restaurant option').filter(function () { return $(this).html() == restaurant; }).val();
								$("#restaurant").val(op);
								$("#id").val(id);
								
								btn.click(function(e) {
									e.preventDefault();
									var p = {
										id : $("#id").val(),
										url : $("#url").val(),
										
										restaurant : {
											id : $("#restaurant").val()
											
										}
										
									};
									if ($('#btn').text() == 'Modifier') {
										$.ajax({
											url : 'Photos/save',
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'POST',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												$("#url").val('');
												
												$("#restaurant").val('');
												btn.text('Ajouter');
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/photo.html");
									}
								});
							});

					
				});