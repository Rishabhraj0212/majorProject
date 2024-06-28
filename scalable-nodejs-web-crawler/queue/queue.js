let Queue = require('bee-queue')
    utility = require('../utility/strings'),
    urlUtility = require('../utility/url'),
    Urls = require('../models/urls'),
    webCrawler = require('../crawl/crawler.js'),
    { v4 : uuidv4 } = require('uuid');

function startCrawling(url, path) {
  
  let domain = urlUtility.getDomain(url);

  const queue = new Queue(uuidv4());
  let urls = new Urls();
  urls.addToValidUrlSet(url);
  createJob(url, queue, urls, domain, path);
  // Process jobs from as many servers or processes as you like
  queue.process(function (job, done) {
    
    webCrawler.crawl(job.data.url)
      .then((links) => {
        done(null, links);
      })
      .catch((err) => {
        done(err);
      })
  });
}

function createJob(url, queue, urls, domain, path) {

  const job = queue.createJob({ url: url });
  job.save();

  job.on('succeeded', (links) => {
    // Write in memory
    links.forEach(link => {
      if (utility.isContains(link, domain)) {
        // Check if it's already in Valid URL Set
        if (!urls.isContains(urls.getValidUrlSet(),link)) {
          
          console.log("( Valid Link ) ", link)

          // create the job
          createJob(link, queue, urls, domain, path)
          utility.writeToFile(`${path}/valid-urls.txt`, `${link}\n`, 'utf8')
          
        }
        urls.addToValidUrlSet(link);      
      }
      else {
        // It's a external link
       
        if (!urls.isContains(urls.getExternalUrlSet(),link)) {
          console.log("( External Link ) ", link)
          utility.writeToFile(`${path}/external-urls.txt`, `${link}\n`, 'utf8')
          
        }
        urls.addToExternalUrlSet(link);
        
      }
    });
  });

  job.on('failed', (err) => {
    if (!urls.isContains(urls.getInvalidUrlSet(), job.data.url)) {
      // create the job
      urls.addToInvalidUrlSet(job.data.url);

      console.log("( Invalid Url ) ", link)

      utility.writeToFile(`${path}/invalid-urls.txt`, `${job.data.url}\n`, 'utf8')

    }
  });
  job.on('progress', (progress) => {

    console.log(`Job ${job.id} reported progress: ${progress}%`);

  });
}

module.exports = startCrawling;




