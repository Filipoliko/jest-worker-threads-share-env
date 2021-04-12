# Jest Worker Threads Share Env Test

This repo shows, that `SHARE_ENV` in `worker_threads` does not work share the environment variables when running tests in Jest environment.

## Installation

```bash
npm install
```

## Run Test

Scenario:
- Init worker (`worker.js`) with option `env: SHARE_ENV` ([docs](https://nodejs.org/docs/latest-v14.x/api/worker_threads.html#worker_threads_worker_share_env))
- Worker sets environment variable `JEST_SHARE_ENV` to `foo`

Now we expect, that thanks to using `SHARE_ENV`, the environment variable would also propagate to master process. This does not work when running tests in Jest environment.

To run both, Node and Jest version of the test, use the following command:

```bash
npm test
```

To run the Node version only:

```bash
node assert.js
```

To run the Jest version only:

```bash
npx jest
```
