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
