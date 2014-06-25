if(typeof base === "undefined") var base = [];
var COLUMN = 4;

function getTable() {
	var all = [];
	$("td").each(function() {
		all.push($(this).text());
	});
	return all;
}

function removeRow(num) {
	if(base.length <= 1) return;
	base.splice(num * COLUMN, COLUMN);
	refreshTable();
	$("form").submit();
}

function fillTable(all) {
	var tbody = $(".myTable tbody");
	var row = $("<tr>");
	for(var i = 0; i < all.length; ++i) {
		row.append("<td>").find("td:last").text(all[i]);
		if(i % COLUMN - 3 === 0) {
			tbody.append(row);
			if(!(i === all.length - 1)) row = $("<tr>");
		}
	}
}

function refreshTable() {
	$("tr").remove();
	fillTable(base);
	$("tr").click(function() {
		removeRow($("tr").index(this));
	});
}

$(function(){
	if(Array.isArray(base)) {
		fillTable(base);
	}
	$(".add").click(function(event) {
		for(var i = 0; i < 4; ++i) {
			base.push(randomHash(8));
		}
		refreshTable();
	});

	$("form").submit(function() {
		$(this).find(".data").val(base.join("', '"));
	});

	$("tr").click(function(event) {
		removeRow($("tr").index(this));
	});

	$('form').ajaxForm(function() { 
		refreshTable();
    }); 

    $(".sort").click(function(event) {
    	base.shuffle();
    	refreshTable();
    	return false;
    });
});

var randomHash = (function () {
    var letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    return function (len) {
        var result = '';
        for (var i=0; i <  len; i++) {
            result += letters[Math.floor(Math.random() * letters.length)];
        };
        return result;
    };
})();

Array.prototype.shuffle = function( b )
{
 var i = this.length, j, t;
 while( i ) 
 {
  j = Math.floor( ( i-- ) * Math.random() );
  t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
  this[i] = this[j];
  this[j] = t;
 }

 return this;
};