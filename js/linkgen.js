$(document).ready(function() {
    
	var c = $("#search-input"),

		d = $("#url-result"),
		g = $("#cursor"),
		a = $(".preview-search-link");
	d.attr("value", window.location);
	d.mouseup(function() {
		this.select()
	});
	d.focus(function() {
		this.select()
	});

	function b(i) {
	   
	}
	
			if (window.location.search == "") {
		d.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
		
 document.getElementById("instructions2").innerHTML = "Type a search & click a button";
		$("#search-form").submit(function(i) {
			i.preventDefault();
			i.stopPropagation();
			//blank out so page doesn't preview search automatically
		 //   window.location = d.attr("value");
			
		document.getElementById("instructions2").innerHTML = "All Done! Share the link Or Preview";
		document.getElementById("url-output").style.display = "block";
		document.getElementById("addthisbuttons").style.display = "block";
  document.getElementById("copybutton").style.display = "block";
			return false
		});
		c.keyup(function(j) {
			var i = $("#search-input").val();
			$(this).attr("value", $(this).val());
	  d.attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(i));
	 a.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(i));
		
			
		})
	} 
else {
GoSearch();

		var e = window.location.search;
		var f = e.split("&");
		var h = decodeURIComponent(f[0]);
		if (h.substr(0, 3) == "?q=") {
		
	
			h = h.substr(3);
			h = h.replace(/(\S)\+(\S)/g, "$1 $2");
			
		
		}    if (h.length > 0) {
			
			d.text(window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
			d.attr("href", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
		  
						
							   
var Keywords = document.URL.split("?q=")[1];
window.location.href = "https://google.gogoprivate.com/search/____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________/index.php?https://www.bing.com/search?q="+ Keywords;
						  
					}
			} 
	$("#search-form").click(function() {
		$("#search-input").focus()
	});
	$("#shorten-url-result").click(function(i) {
		i.preventDefault();
		i.stopPropagation();
		var k = "https://is.gd/create.php?format=json&url=" + encodeURIComponent(d.attr("value")),
			j;
		if (!j) {
			$.getJSON(k, function(l) {
				j = l.shorturl;
				j = j.replace("http:", "https:");
				d.prop("value", j);
				
				myShare();
			   // myFunction();
			})
		} else {
			d.prop("value", j);
			
			  myShare();
		  //  myFunction();
		}
	});
	
});
