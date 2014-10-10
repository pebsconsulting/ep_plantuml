exports.aceGetFilterStack = function(name, context){
  return [
    context.linestylefilter.getRegexpFilter(
      new RegExp("http.+((\.[pP][nN][gG])|(\.[jJ][pP][gG])|(\.[gG][iI][fF])|(\.[jJ][pP][eE][gG])|(\.[bB][mM][pP]))", "g"), 'image')
  ];
}


exports.aceCreateDomLine = function(name, args){
  // processes each line, we want to only take the last line..

  console.log("line");
  if (args.cls.indexOf('image') > -1) { // If it's an image
    var src;
    cls = args.cls.replace(/(^| )image:(\S+)/g, function(x0, space, image) {
      src = image;
      console.log("image source", src);
      return space + "image image_" + image;
    });

   return [{
     cls: cls,
     extraOpenTags: '<img src="' + src + '" style="max-width:100%" /><br/>',
     extraCloseTags:''
   }];
  }
}


