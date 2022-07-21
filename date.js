//you can write both ways but exports is just node.js thing
exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    day = today.toLocaleDateString("en-GB", options);
    return day;
}

module.exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: 'long'
    }

    day = today.toLocaleDateString("en-GB", options);
    return day;
}
