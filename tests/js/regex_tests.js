
$(document).ready(function(){
  test("test adding commas to a number", 2, function() {
    equal( dpm.Regex.addCommasToNumber(10000000), '10,000,000', 'number should have commas added every 3 digits');
    equal( dpm.Regex.addCommasToNumber(10000000.05), '10,000,000.05', 'number should have commas added every 3 digits');
  });

  test("remove comments from string", 2, function() {
    equal( dpm.Regex.removeComments("// some comment\ncontent"), "\ncontent", 'comments should be stripped');
    equal( dpm.Regex.removeComments("/* some comment*/content"), "content", 'comments should be stripped');
  });

  test("convert tabs to spaces", 2, function() {
    equal( dpm.Regex.removeTabs("\tsome content"), "some content", 'single tab should be converted to spaces');
    equal( dpm.Regex.removeTabs("\t\tsome comment"), "some comment", 'double tab should be converted to spaces');
  });

  test("leading whitespace trimmed", 1, function() {
    equal( dpm.Regex.removeLeadingWhitespace("  some content\n   content"), "some content\ncontent", 'leading whitespace should be trimmed');
  });

  // test("single spaces only", 2, function() {
  //     equal( dpm.Regex.singleSpaceOnly("  some content"), "some content", 'more than one space should be trimmed');
  //     equal( dpm.Regex.singleSpaceOnly("  some   comment"), "some comment", 'double spaces should be trimmed');
  //   });
});

