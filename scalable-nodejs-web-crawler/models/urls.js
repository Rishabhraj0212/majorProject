function Urls() {
    this.validUrlSet = new Set();
    this.externalUrlSet = new Set();
    this.invalidUrlSet = new Set();
}

Urls.prototype.addToValidUrlSet = function (value) {
    this.validUrlSet.add(value);
}
Urls.prototype.addToExternalUrlSet = function (value) {
    this.externalUrlSet.add(value);
}
Urls.prototype.addToInvalidUrlSet = function (value) {
    this.invalidUrlSet.add(value);
}
Urls.prototype.isContains = function (set, value) {    
    return set.has(value);
}
Urls.prototype.getValidUrlSet = function () {
    return this.validUrlSet;
}
Urls.prototype.getExternalUrlSet = function () {
    return this.externalUrlSet;
}
Urls.prototype.getInvalidUrlSet = function () {
    return this.invalidUrlSet;
}

module.exports = Urls;