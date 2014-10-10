var contents = "";

exports.aceEditEvent = function (hook_name, args, cb) {

  // Should we do this event?
  if(!args.callstack.docTextChanged) return false; // we should only run this if the pad contents is changed..
  var newContents = $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").text();
  if(contents === newContents) return false;

  // Contents hasn't changed so proceed, store contents
  contents = newContents;
  console.log("contents changed to ", contents);

  // Get Image based on contents
  $.get("wut", function(){
   
    // Do something with retrieved image, probably append it to teh document, it depends what's returned..
  
  });

}
