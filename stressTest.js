// stress-test.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 200 },
    { duration: '30s', target: 0 }, // recovery
  ],
};

export default function () {
  const res = http.get('https://www.esprit.tn');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
