# Scalable-NodeJS-Web-Crawler

A NodeJS based web-Crawler which can scale on the go!

  - Support both Static & Dynamic Page Crawling

## Pre-requisite:

  - Linux (Ubuntu)
  - Redis
  - Nodejs

## Installation:
  - Install `NodeJS` by executing the below command in root directory of project: 
    ```sh
        $ cd init-scripts/
        $ sudo bash install-nodejs.sh
    ```
  - Install `Redis` 
    ```sh
        $ sudo bash install-redis.sh
    ```
  - Install project dependencies. In root directory of the project execute the following command: 
    ```sh
        $ npm install
    ```
## Usage:
```sh
    $ node index.js "<url>" "path-to-store-url"
    $ node index.js "https://stacksapien.com" "./temp"
```
 - In Above Example, Files like `valid-urls.txt`, `external-urls.txt` & `invalid-urls.txt` will be generated in `temp` folder of your git project directory.
