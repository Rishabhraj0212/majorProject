let utility = require('../utility/strings'),
    Xray = require('x-ray'),
    x = Xray();

// crawl function takes url in parameter and return values of attribute
// 'href' from all anchor tags
exports.crawl = function (url) {
    return new Promise((resolve, reject) => {
        x(url, {
            href: ['a@href'],
        })
            .then((links) => {

                resolve(links.href.filter(link => {
                    if (link !== null && link !== undefined) {
                        return true;
                    }
                    else {
                        return false;
                    }

                }));
            })
            .catch((err) => {
                reject(err)
            })
    });

}

