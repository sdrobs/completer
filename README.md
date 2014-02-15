completer
=========

Bare-bones / Framework-free autocomplete.

Example using ~13,000 word dictionary with no noticeable lag: http://jsfiddle.net/9BmFQ/

Usage:

```
<script  src="./completer.js"></script>

<input class="complete">

<script>
    var dict1 = new completer(['test','tes','te','tesla'])

    dict1.bind('complete',function(completions){
        //put your completion menu/dom manipulations here
        console.log(completions)
    })

</script>
```
