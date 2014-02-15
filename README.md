completer
=========

Bare-bones / Framework-free autocomplete.

Example using ~13,000 word dictionary with no noticeable lag: http://jsfiddle.net/9BmFQ/2/

Usage:

```
<script  src="./completer.js"></script>

<input class="complete-me">

<script>
    var dict1 = new completer(['test','tes','te','tesla'])

    dict1.bind('complete-me',function(completions){
        //put your completion menu/dom manipulations here
        console.log(completions)
    })

</script>
```
