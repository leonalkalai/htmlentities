let entities = $('#remote > .front > #square'); //selector for square container spawning spans
let entitiestable = $('#remote > .back > #tablelist > table');

disp = ()=> { // arrow main function 
  let str =  ["&","<",">","\\","/","[","]","{","}","=","(",")",",",".",";","|","?","'",'"',"`","$","+","-","_","*"]; // declare values for array

      // HTML entities Encode/Decode
      function htmlspecialcharsconv(str) {
        var map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "[": "&lbrack;",
            "]": "&rbrack;",
            "{": "&lbrace;",
            "}": "&rbrace;",
            "\"": "&Backslash;",
            "/": "&sol;",
            "(": "&lpar;",
            ")": "&rpar;",
            "'": "&apos;",
            '""': "&quot;",
            "=": "&equals;",
            ';': "&semi;"
        };
        return str.replace(/[&<=>{;}\]']/g, function(m) { return map[m]; })
        .toString().trim()
        .replace("[","&lbrack;")
        .replace("\\","&Backslash;")
        .replace("/","&sol;")
        .replace("(","&lpar;")
        .replace(")","&rpar;")
        .replace(",","&comma;")
        .replace(".","&period;")
        .replace("|","&vert")
        .replace("?","&quest;")
        .replace("'","&apos;")
        .replace('"',"&quot;")
        .replace("`","&grave;")
        .replace("$","&dollar;")
        .replace("+","&plus;")
        .replace('-',"&minus;")
        .replace("_","&lowbar;")
        .replace("*","&ast;")
        ;

      }

      (function(window){
        window.htmlentities = {
          /**
           * Converts a string to its html characters completely.
           *
           * @param {String} str String with unescaped HTML characters
           **/
          encode : function(str) {
            var buf = [];
            
            for (var i=str.length-1;i>=0;i--) {
              buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
            }
            
            return buf.join('');
          },
          /**
           * Converts an html characterSet into its original character.
           *
           * @param {String} str htmlSet entities
           **/
          decode : function(str) {
            return str.replace(/&#(\d+);/g, function(match, dec) {
              return String.fromCharCode(dec);
            });
          }
        };
      })(window);


        function htmlDecode(value) {
          return $("<td/>").html(value).text();
        }

        function htmlEncode(value) {
          return $('<td/>').text(value).html();
        }


        for (var i = 0; i < str.length; i++){
            entitiestable.append(
            '<tr>' +
            '<td>' + (i + 1) +'</td>' +
            '<td>' + htmlentities.decode(str[i]) +'</td>' +
            '<td>' + htmlEncode( htmlentities.encode(str[i])) +'</td>' +
            '<td>' + htmlEncode (htmlspecialcharsconv(str[i])) +'</td>' +
            '</tr>'
            )    
        }


        entities.each(function(i, el) {
          var el = $(el);
          for (var i = 0; i < str.length; i++){
            el.append(
              "<span class='square'>"+
              "<span class='symbol'>"+ htmlentities.decode(str[i]) +""+"</span>"+
              "<span class='dec'>"+ htmlEncode( htmlentities.encode(str[i])) +"</span>"+
              "<span class='ent'>"+ htmlEncode (htmlspecialcharsconv(str[i])) +"</span>"+
              "</span>"
            ); 

          }
        });

//function to 
        $('.symbol').each(function(i, el) {
          var el = $(el);
          var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
            el.css({'color' : randomColor,});
        });
    
 
}

 disp( entities.toArray() ); // execute function and convert to array


 $('#remote').click(function(){
  $(this).toggleClass('flipped');
  $(this).toggleClass('tableshow');
});

