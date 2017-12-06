(function(){
	'use strict';
	var _ = function(id){if(id[0]=="#"){return document.getElementById(id.substring(1,id.length));}else if(id[0]=="."){return document.getElementsByClassName(id.substring(1, id.length))[0];}}
	module.exports = {
		runOnLoad: function() {
			
		},
		runOnLoadComplete : function(){
			_("#main").style.height = window.innerHeight + "px";
			_("#main").style.width = window.innerWidth + "px";
		},
		startScrollController: function() {
			var controller = new ScrollMagic.Controller(),
			boxScene = new ScrollMagic.Scene({ duration: 400, offset: 0 }).setPin("#page-2-box").addTo(controller),
			titleScene = new ScrollMagic.Scene({duration: 10, offset:0}).setPin("#page-title").addTo(controller);
			
			boxScene.on("progress", function(event){
				_("#page-2-box").style.bottom = event.progress * 600 +"px";
			});
			titleScene.on("enter", function(event){
				var old = _(".home-title").className;
				console.log(old+" animate");
				// old.className+= old+" animate";
			});

		}
	}
}).call(this);