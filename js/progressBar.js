(function(Ractive, $) {
	var ProgressBar = Ractive.extend({
		el: 'progress-bar',
		template: '#tpl-progress-bar',
		data: {},
		oninit: function(){
			this.on('updateProgress', function(event, progressChange){
				var selectedPB = this.get('selectedBar');
				if(selectedPB != null){
					var newValue = (this.get('bars[' + selectedPB + ']') + progressChange);
					if(newValue < 0){
						newValue = 0;
					}						
					this.set('bars[' + selectedPB + ']', newValue);
				}
			});
		}
	});
	
	//Get data for progress bar
	$.getJSON("https://pb-api.herokuapp.com/bars").done(function(pbData){
			new ProgressBar({data: pbData});
	});
})(Ractive, jQuery);


