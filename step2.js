const cat = require('cat')
const axios = require('axios')

function readTheFile(){
    cat('one.txt', console.log)
}

async function readTheURL(){
    res = await axios.get(cat('https://en.wikipedia.org/wiki/Cat', console.log))
    console.log(res)
}

readTheFile()
readTheURL()

/// I am having trouble with this step:
//// Modify the code that invoked cat so that, 
// based on the command-line args, it decides whether the 
// argument is a file path or a URL and calls either cat or webCat, respectively.