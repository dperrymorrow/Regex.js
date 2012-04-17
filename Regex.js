if(window.dpm == undefined){
  window.dpm ={};
}
dpm.Regex = {}

// adds commas to
dpm.Regex.addCommasToNumber = function(number){
  return String(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

dpm.Regex.removeComments = function(string){
  return String(string).replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/, '');
}

dpm.Regex.removeTabs = function(string){
  return String(string).replace( /[\t]+/g, '');
}

dpm.Regex.singleSpaceOnly = function(string){
  return String(string).replace( / /g, " ");
}

dpm.Regex.removeLeadingWhitespace = function(string){
  return String(string).replace( /\s{2,}/, "");
}

dpm.Regex.removeTrailingWhitespace = function(string){
  return String(string).replace( /s{\s+$}{}gm/, "");
}

dpm.Regex.removeLineBreaks = function(string){
  return String(string).replace( /[\n]+/g, "");
}

dpm.Regex.htmlEntities = function(string){
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

dpm.Regex.camelCaseToWords = function(str){
  return str.replace(/([A-Z])/g, " $1");
}

dpm.Regex.uuid = function(){
  var s = [], itoh = '0123456789ABCDEF';
  for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
  s[14] = 4;  // Set 4 high bits of time_high field to version
  s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence
  for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
}
