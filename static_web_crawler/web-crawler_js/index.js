const { crawlPage } = require('./crawl.js');
const { sortPages } = require('./report.js');
const {printReport} = require("./report");

const main =  () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    (function getValidInput () {
        readline.question(`Which URL do you want to crawl?`, async urlName => {
            const trimmedUrl = urlName.trim();
            let validUrl = false;

            if (trimmedUrl.includes(' ')) {
                console.log('Please try again and enter only one URL');
                getValidInput();
            } else if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
                console.log(`Crawling ${trimmedUrl}...`);
                readline.close();
                const [pages, extPages] = await crawlPage(trimmedUrl, trimmedUrl, {}, {});
                printReport(pages, extPages, trimmedUrl);
                return;
            } else {
                console.log('Please try again and enter a valid URL that starts with http:// or https://');
                getValidInput();
            }
        });
    })();
}


const before = new Date;
const beforeTime = before.getMilliseconds;

main();

const after = new Date;
const afterTime = after.getMilliseconds;
