var fs = require('fs');

exports.isContains = function (str1, str2) {
    return str1.includes(str2) //true
};
exports.writeToFile = function (path, data, mode) {
    return new Promise((resolve, reject) => {
        // append data to file
        fs.appendFile(path, data, mode,
            // callback function
            function (err) {
                if (err) {
                    reject(err, false)
                } else {
                    resolve('Data is appended to file successfully.', true);
                }
            });
    });
}


