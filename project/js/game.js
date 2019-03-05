function updateCash(cash) {
		$('.charInfo .charCash').html('cash: ' + cash);
	}
	
	
	
function updateDate(dater) {

	$('.righter .date').html('date: ' + $.datepicker.formatDate('dd M yy', dater));
	$('.righter .time').html('time: ' +dater.getHours()+':00');
	
}

	function timerDate(dater) {
		dater.setHours(dater.getHours() + 1);
		localStorage.setItem('userDate', dater);
	$('.righter .date').html('date: ' + $.datepicker.formatDate('dd M yy', dater));
	$('.righter .time').html('time: ' +dater.getHours()+':00');
}

setInterval(function() {
	timerDate(dater);
}, 5000);

$(document).ready(function() {
	cash = localStorage.getItem('userCash');
	
	if (localStorage.getItem('userDate') == undefined) {
		dater = new Date( 2000, 1, 1, 15, 00  );
		localStorage.setItem('userDate', dater);
	} else {
		dater = new Date(localStorage.getItem('userDate'));
		localStorage.setItem('userDate', dater);
	}
	
	if (cash == undefined) {
		cash = 1000;
	}
	
	
	
	updateCash(cash);
	
	updateDate(dater);
	
	
	
	
    jQuery.fn.center = function() {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }
	
    $('.programWindow').center();

    $('.dropdown-menu a').on("click", function() {
        var activator = $(this).attr("href");

        $(activator).toggle("slow");
    });

    $('.desIcons a').on("dblclick", function() {
        var activator = $(this).attr("href");

        $(activator).toggle("slow");
    });

    $('.windowBar .close').on("click", function() {
        var activator = $(this).attr("href");
        $(activator).toggle("slow");
    });

    $(".desIcons .figure").hover(
        function() {
            $(this).draggable();
            $(this).draggable('enable')
        },
        function() {
            $(this).draggable('disable')
        }
    );

    $(".programWindow .windowBar").hover(
        function() {
            $(this).parent('.programWindow').draggable();
            $(this).parent('.programWindow').draggable('enable')
        },
        function() {
            $(this).parent('.programWindow').draggable('disable')
        }
    );

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

});