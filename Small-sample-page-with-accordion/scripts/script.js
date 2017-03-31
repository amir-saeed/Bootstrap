(function() {
    /*
    *  Function to create accordion
    */
    var acc = document.getElementsByClassName("accordion-toggle");
    var accContent = document.getElementsByClassName("accordion-content");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            for (var i = 0; i<accContent.length;i++) {					
                accContent[i].style.display = "none";				
	        }

            // Create toggle to add active class 
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            toggler(this);
            
        };
    }

    /*
    *   Remove button action below
    */

    var buttons = document.getElementsByClassName('removeButton');
    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function() {
            removeButtonFunction(this);
        };
    }

    function removeButtonFunction(elem) {
        var x = document.getElementById(elem.id);
        x.parentNode.previousSibling.previousElementSibling.remove();
        x.parentNode.remove();  
    }

    /*
     *  Private function to show / hide accordion panels 
    */
    function toggler(elem) {
        var panel = elem.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
})();

