
if(window.dpm == undefined){
  window.dpm ={};
}
dpm.Regex = {}

// adds commas to
dpm.Regex.digits = function(number){
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
