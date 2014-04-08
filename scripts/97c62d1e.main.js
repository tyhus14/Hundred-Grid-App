var MainRouter=Backbone.Router.extend({routes:{rules:"Start","game/:id":"loadGame"},initialize:function(){console.log("router is born!")},Start:function(){new PlayView,fastleague=new QuickLeague,fastleague.save(null,{success:function(){window.id=this.fastleague.id,console.log(id)},error:function(a,b){alert("Failed to create new object, with error code: "+b.description)}}),$(".board-inside").hide()},loadGame:function(a){window.id=a;var b=new Parse.Query(QuickLeague);b.get(a,{success:function(a){console.log(a),window.objectBoxes=a.get("boxes"),new PlayView,fastleague=a,window.currentWinner=_.where(objectBoxes,{score:window.finalScore}),new numberGameView,$(".board-inside").show(),new GameView,new StartView,window.columnNumber=a.get("columns"),window.rowNumber=a.get("rows"),new visualNumbersView,new visualNumbersTopView,$("#id-"+window.finalScore).css("background-color","rgba(86, 191, 241, 0.3)"),$(".broncos").show(),$(".seahawks").show(),$(".teamA-score").show(),$(".squarelogoboard").show(),new teamAView,setInterval(fetchScoreQuery,1e3)},error:function(){}})}}),visualNumbersView=Parse.View.extend({className:"visual-numbers",visualNumbersTemplate:_.template($("#visualNumbers-template").text()),initialize:function(){$(".row-numbers").html(this.el),this.render()},render:function(){var a=this.visualNumbersTemplate({model:this.model});this.$el.html(a)}}),StartView=Parse.View.extend({className:"startview",startViewTemplate:_.template($("#start-view-template").text()),events:{"click .generate-numbers":"Generate"},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.startViewTemplate({model:this.model});this.$el.html(a)},Generate:function(){new numberGameView,$(".board-inside").show(),new visualNumbersView,new visualNumbersTopView,$(".shadow").removeClass("active")}}),visualNumbersTopView=Parse.View.extend({className:"visual-numbers-top",visualNumbersTopTemplate:_.template($("#visualNumbersTop-template").text()),initialize:function(){$(".column-numbers").html(this.el),this.render()},render:function(){var a=this.visualNumbersTopTemplate({model:this.model});this.$el.html(a)}}),MainView=Parse.View.extend({className:"",mainTemplate:_.template($("#main-template").text()),initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.mainTemplate({model:this.model});this.$el.html(a)}}),PlayView=Parse.View.extend({className:"Playview",PlayViewTemplate:_.template($("#play-view-template").text()),events:{"click .play-game":"Play"},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.PlayViewTemplate({model:this.model});this.$el.html(a)},Play:function(){function a(a,b,c,d){return _.flatten(_.map(_.range(a),function(a){return _.map(b,function(b){var e={};return e[d]=c[a]+""+b,e})}))}rowNumber=_.shuffle([0,1,2,3,4,5,6,7,8,9]),columnNumber=_.shuffle([0,1,2,3,4,5,6,7,8,9]),console.log(id);var b=["A","B","C","D","E","F","G","H","I","J"],c=["A","B","C","D","E","F","G","H","I","J"];numbersArray=a(10,rowNumber,columnNumber,"score"),lettersArray=a(10,b,c,"location"),allBoxes=_.zip(lettersArray,numbersArray),window.objectBoxes=_.map(allBoxes,function(a){return _.extend(a[0],a[1])}),fastleague.set("boxes",objectBoxes),fastleague.set("columns",columnNumber),fastleague.set("rows",rowNumber),new GameView,new StartView,$(".broncos").show(),$(".seahawks").show(),console.log(fastleague.get("boxes")),fastleague.save()}}),CreateLeagueView=Parse.View.extend({className:"",createLeagueTemplate:_.template($("#createleague-template").text()),events:{"click .submit-btn":"CreateUser"},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.createLeagueTemplate({model:this.model});this.$el.html(a)},CreateUser:function(){var a=new Parse.User;a.set("name",$(".js-name").val()),a.set("username",$(".js-username").val()),a.set("password",$(".js-password").val()),a.set("email",$(".js-email").val()),a.signUp(null,{success:function(){},error:function(a,b){alert("Error: "+b.code+" "+b.message)}})}}),SigninView=Parse.View.extend({className:"",signinTemplate:_.template($("#signin-template").text()),events:{"click .submit-sigin-button":"LogInUser"},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.signinTemplate({model:this.model});this.$el.html(a)},LogInUser:function(){Parse.User.logIn($(".login-username-js").val(),$(".login-password-js").val(),{success:function(a){console.log(a)},error:function(){}}),new GameView}}),QuickLeague=Parse.Object.extend("QuickLeague"),QuickLeagueCollection=Parse.Collection.extend({model:QuickLeague}),Score=Parse.Object.extend("Scores"),WinnerView=Parse.View.extend({className:"winner",boxTemplate:_.template($("#winner-template").text()),initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){var a=this.boxTemplate({model:this.model});this.$el.html(a)}}),teamAView=Parse.View.extend({className:"teamAview",teamATemplate:_.template($("#teamA-template").text()),initialize:function(){$(".teamA-score").html(this.el),this.render()},render:function(){var a=this.teamATemplate({model:this.model});this.$el.html(a)}}),numberGameView=Parse.View.extend({className:"numbergameview",numberGameTemplate:_.template($("#numbergame-template").text()),initialize:function(){$(".board-inside").html(this.el),this.render()},render:function(){var a=this.numberGameTemplate({model:this.model});this.$el.html(a)}}),GameView=Parse.View.extend({className:"gameview",gameTemplate:_.template($("#game-template").text()),initialize:function(){$(".board").html(this.el),this.render(),_.each(objectBoxes,function(a){new BoardView({data:a})})},render:function(){var a=this.gameTemplate({model:this.model});this.$el.html(a)}}),BoardView=Parse.View.extend({className:"box",boardTemplate:_.template($("#board-template").text()),events:{"blur .name-input":"addName"},initialize:function(a){this.data=a.data,this.el.id="id-"+this.data.score,$(".board").append(this.el),this.render()},render:function(){var a=this.boardTemplate({data:this.data});this.$el.html(a)},addName:function(){this.data.name=this.$el.find(".name-input").val(),console.log("this.data is",this.data),fastleague.save(),allInputsFilled=_.every(objectBoxes,function(a){return a.name&&a.name.length}),1==allInputsFilled&&($(".generate-numbers").show(),$(".shadow").addClass("active"))}});$(function(){Parse.initialize("hIvxwhUFjYfjWMn0e0cGoG8PuMWlFhDzKQcyanAn","kM82dBDl28jw7SYZ7CXnZ1KI2cpfrMOjA1lU6TWf"),router=new MainRouter,Backbone.history.start(),new MainView,currentUser=Parse.User.current();var a=new Parse.Query(Score);fetchScoreQuery=function(){a.get("VUVDX88QEH",{success:function(a){console.log(a.attributes.TeamAScore),console.log(a.attributes.TeamBScore),window.teamAscore=a.attributes.TeamAScore,window.teamBscore=a.attributes.TeamBScore,window.slicedTeamAscore=teamAscore.slice(-1),window.slicedTeamBscore=teamBscore.slice(-1),window.twoSlicedStrings="",window.finalScore=twoSlicedStrings.concat(slicedTeamAscore,slicedTeamBscore),$(".box").css("background-color","rgba(113, 160, 182, .3)"),$("#id-"+window.finalScore).css("background-color","rgba(86, 191, 241, 0.6)"),window.currentWinner=_.where(objectBoxes,{score:window.finalScore}),$(".broncos").show(),$(".seahawks").show(),new WinnerView,new teamAView},error:function(){}})}});