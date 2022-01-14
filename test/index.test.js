const app = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

it('Get JSON file URL', async done => {
  const res = await request.post('/api/v1/figma', {
    url: '7jRyj8dzankbyraCDBVwBM',
    token: '306607-cc96b159-8d4a-40fb-9774-45e435e18a62'
  });

  expect(response.status).toBe(200);

  done();
})