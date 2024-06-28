const webCrawler = require('./queue/queue')

if(process.argv.length === 4){
    webCrawler(process.argv[2], process.argv[3]);
}
else{
    console.log("Invalid CLI Arguments");
    
}
