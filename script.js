$(document).ready(function() {
  // Block#: #Po]h1*XQSs:*KFQ7;uV
  let on_screen_createMainScreen = function() {
    try {
      // Block#: $iVu{NC%vZZYmb:f`l8$
      $('[obj-name="ListView"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: (,AXn.t_.igRqKtdO.]/
  function on_Button_click(e) {
    try {
      // Block#: GFw^9!CHP`a{~yyA;z]*
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label", 'ciao'); // Block#: 1kqYW%-(4F~|{5lNO?77
      com.fc.JavaScriptDistLib.ListView.setProperty["Background color"]("ListView", '#ff0000'); // Block#: }:bW.bCrJk#r2GN7MeeM
      com.fc.JavaScriptDistLib.ListView.setProperty["height"]("ListView", 10); // Block#: ;x2y2rtFT=n8D|n0ra3(
      $('[obj-name="ListView"]').show();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 14063-686080-720540-732433