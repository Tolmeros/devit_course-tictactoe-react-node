
function getProcessEnv(name) {
    let val = process.env[name];
    if ((val === undefined) || (val === null)) {
        throw ("missing env var for " + name);
    }
    return val;
}

exports.getProcessEnv = getProcessEnv;
