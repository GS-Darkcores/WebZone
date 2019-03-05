 $(document).keydown(function(e) {
        if (e.keyCode == 66 && e.ctrlKey) {
			$('#terminal').toggle('slow');
        }
    });
jQuery(function($) {
    var id = 1;
    $('.console').terminal(function(command, term) {
        if (command == 'help') {
            term.echo("available commands are:");
            term.echo("- cash");			
            term.echo("- date");
            term.echo("- restarter");
            term.echo("- close");
        } else if (command == 'close'){
			
            $('#terminal').toggle();
			
        } else if (command == 'cash'){
			
            cash = +cash + 1000;
            term.echo("Your cash = " + cash);
			updateCash(cash);
			localStorage.setItem('userCash', cash);
			
			
        }else if (command == 'date'){
			
            
				dater.setHours(dater.getHours() + 12);
				localStorage.setItem('userDate', dater);
			$('.righter .date').html('date: ' + $.datepicker.formatDate('dd M yy', dater));
			$('.righter .time').html('time: ' +dater.getHours()+':00');
			
			
        } else if (command == 'restarter'){
			
            localStorage.removeItem("userCash");
            localStorage.removeItem("userDate");
			location.reload();
			
			
        } else if (command == "js") {
            term.push(function(command, term) {
                var result = window.eval(command);
                if (result != undefined) {
                    term.echo(String(result));
                }
            }, {
                name: 'js',
                prompt: 'js> '
            });
        } else {
            term.echo("unknow command " + command);
        }
    }, {
        greetings: "multiply terminals demo use help to see available commands",
        onBlur: function() {
            // prevent loosing focus
            return false;
        }
    });
	
    $(".terminalWindow .windowBar").hover(
        function() {
            $(this).parent('.terminalWindow').draggable();
            $(this).parent('.terminalWindow').draggable('enable')
        },
        function() {
            $(this).parent('.terminalWindow').draggable('disable')
        }
    );
});
