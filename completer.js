//ie < 9
if (!Object.keys) {
  Object.keys = function(obj) {
    var keys = [];

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        keys.push(i);
      }
    }

    return keys;
  };
}
//

function completer(words){
    var self = this
    this.dict = {}

    var prerender = function(words){
        words = words.sort()

        for(var i = 0; i < words.length;i++){
            var word = words[i]

            var context = self.dict
            for(var j = 0; j < word.length; j++){
                var letter = word[j]
                if(context[letter])
                    context = context[letter]
                else{
                    context[letter] = {}
                    context = context[letter]
                }

            }

            if(!context.isWord)
                context.isWord = true
        }
    }

    prerender(words)
}

completer.prototype.complete = function(fragment){
    var context = this.dict

    for(var i = 0; i < fragment.length; i++){
        var letter = fragment[i]
        if(context[letter])
            context = context[letter]
        else{
            context[letter] = {}
            context = context[letter]
        }

    }

    var words = []
    var dfs = function(ctx,currpath){
        if(ctx.isWord)
            words.push(fragment + currpath)
        var paths = Object.keys(ctx)
        for(var i = 0; i<paths.length; i++){
            if(paths[i].length == 1)
                dfs(ctx[paths[i]],currpath + paths[i])
        }

    }
    dfs(context,'')
    console.log(words)
}

completer.prototype.bind = function(classname,callback){
    var self = this
    var elements = document.getElementsByClassName(classname)

    for(var i = 0; i < elements.length; i++){
        var element = elements[i]

        element.onkeyup = function(){
            callback(self.complete(element.value))
        }
    }
}