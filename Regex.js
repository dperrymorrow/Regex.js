if(window.dpm == undefined){
  window.dpm ={};
}
dpm.Regex = {}

// adds commas to
dpm.Regex.digits = function(number){
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

dpm.Regex.removeComments = function(string){
  return string.toString().replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/, "$1");
}

dpm.Regex.tabsToSpaces = function(string){
  return string.toString().replace( /s{\t}{ }gm/, "$1");
}

dpm.Regex.tabsToSpaces = function(string){
  return string.toString().replace( /s{\t}{ }gm/, "$1");
}

dpm.Regex.singleSpaceOnly = function(string){
  return string.toString().replace( /s{ +}{ }gm/, "$1");
}

dpm.Regex.singleSpaceOnly = function(string){
  return string.toString().replace( /s{ +}{ }gm/, "$1");
}

dpm.Regex.removeLeadingWhitespace = function(string){
  return string.toString().replace( /s{^\s+}{}gm/, "$1");
}

dpm.Regex.removeTrailingWhitespace = function(string){
  return string.toString().replace( /s{\s+$}{}gm/, "$1");
}

dpm.Regex.removeLineBreaks = function(string){
  return string.toString().replace( /s{\n}{}gm/, "$1");
}
