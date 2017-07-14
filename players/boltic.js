/*
 * Helper Boltic Player - MasterCast Application for Online Radios 
 * Copyrights: Duane Mafra - duanemafra@gmail.com
 maoe 2
 */

(function(window){
    
    function addCssHead(url){
    	var css = document.createElement('link');	
    	css.href = url; 
    	css.type = 'text/css';
    	css.rel  = 'stylesheet';
		css.media = 'all';			
		document.getElementsByTagName('head')[0].appendChild(css);
    }
    
    function addScriptHead(url){
    	var script = document.createElement('script');
		script.src = url;   
		script.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(script);
    }
    
    
    addCssHead('//cdn.rawgit.com/mastercast/assets/master/players/teste-4/boltic.min.css');
       
    if(!window.jQuery){
    	addScriptHead('//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    }
    
    var interval1 = setInterval(function(){
    	if(window.jQuery){
    		clearInterval(interval1);
    		
    		addScriptHead('//cdn.rawgit.com/mastercast/assets/master/players/teste-4/boltic.min.js');
    		
    		var keyPlayer = jQuery('script[data-player]').attr('data-player');    		
    		
    		if(typeof keyPlayer != "undefined" && keyPlayer.length == 12){
    			
    			var interval2 = setInterval(function(){    				
    				if(typeof playerBoltic == 'function'){
    					clearInterval(interval2);
    					
    					if(location.protocol == 'https:'){
    						var cors = 'https://cors-anywhere.herokuapp.com/';
    					}else{
    						var cors = '';
    					}
    					
    					var urlJSON = cors+'http://app.mastercast.com.br/assets/player/json/'+keyPlayer+'.json';
					console.log(urlJSON);
    					$.getJSON(urlJSON,function(dadosPlayer){													  
					  		playerBoltic(dadosPlayer);
						});
						
					} 
    			}, 500);
    			
    		}
    		
    	}    
	}, 500);
	
}(window));
