
function getProcessEnv(envName) {
    let val = process.env[envName];
    if ((val === undefined) || (val === null)) {
        throw ("missing env var for " + envName);
    }
    return val;
}

exports.getProcessEnv = getProcessEnv;
