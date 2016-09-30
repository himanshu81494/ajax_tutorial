ajax_post = function(url){
  // XMLHttpRequest object
  var hr = new XMLHttpRequest();
  var fn = document.getElementById("first_name").value;
  var ln = document.getElementById("last_name").value;
  var vars = "firstname="+fn+"&lastname="+ln;
  hr.open("POST", url, true);
  // Set content type header info
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //access the onreadystatechange event for  the XMLHttpRequest object
  hr.onreadystatechange = function(){
    if(hr.readyState == 4 && hr.status == 200){
      var return_data = hr.responseText;
      document.getElementById("status").innerHTML = return_data;
    }
  }
  // send the data to PHP
  hr.send(vars);
  document.getElementById("status").innerHTML = "processing..";
};