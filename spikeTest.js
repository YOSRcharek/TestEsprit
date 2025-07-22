// spike-test.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 100 },  // spike!
    { duration: '10s', target: 10 },
  ],
};

export default function () {
  const res = http.get('https://www.esprit.tn');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
