// File: loadTest.js
// DO NOT RUN THIS FILE WITH `node`. Use the `k6` CLI to run it: `k6 run loadTest.js`

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {
  http.get('https://www.esprit.tn');
  sleep(1); // Wait for 1 second between iterations
}
