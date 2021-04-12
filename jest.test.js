const { Worker, SHARE_ENV } = require('worker_threads');

describe('Jest', () => {
    it('can share env in worker_threads', () => {
        const shareEnvWorker = new Worker('./worker.js', { env: SHARE_ENV });

        return new Promise(resolve => {
            shareEnvWorker.once('exit', () => {
                expect(process.env.JEST_SHARE_ENV).toEqual('foo');
                resolve();
            });
        });
    });
});
