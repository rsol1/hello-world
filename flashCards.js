$(function(){
	
	var model = {
		init: function(){
			if(!localStorage.cards)
				localStorage.cards = JSON.stringify([]);
		},
		add: function(obj){
			var data = JSON.parse(localStorage.cards);
			data.push(obj);
			localStorage.cards = JSON.stringify(data);
		},
		getAllCards: function(){
			return JSON.parse(localStorage.cards);
		}
	};

	var octopus = {
		addNewCard:function(newConcept){
			model.add({
				concept: newConcept
			});
		},
		getCards: function(){
			return model.getAllCards();
		},
		init: function(){
			model.init();
			view.init();
		}
		
	};

	var view = {
		init: function(){
			this.cardList = $("#cards");
			var newCardForm = $("#new-card-form");
			var newCardConcept = $("#new-card-concept");
			
			newCardForm.submit(function(e){
				octopus.addNewCard(newCardConcept.val() );
				newCardConcept.val('');
				e.preventDefault();
			});
			
			view.render();
		},
		render:function(){
			var htmlStr="";
			octopus.getCards().forEach(function(card){
				htmlStr += '<li class="card">' + card.concept + '</li>';
			});
			this.cardList.html(htmlStr);
		}
	};
	octopus.init();
})



