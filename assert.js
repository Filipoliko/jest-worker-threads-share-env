const { Worker, SHARE_ENV } = require('worker_threads');
const assert = require('assert');

const shareEnvWorker = new Worker('./worker.js', { env: SHARE_ENV });

shareEnvWorker.once('exit', () => {
    assert(process.env.JEST_SHARE_ENV === 'foo');
    console.log('process.env.JEST_SHARE_ENV === \'foo\'');
});
