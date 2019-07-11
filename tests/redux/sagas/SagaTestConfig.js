import { runSaga } from 'redux-saga';

export async function recordSaga(saga, payload) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action)
    },
    saga,
    payload,
  ).done;
  return dispatched;
}