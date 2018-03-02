const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('should set first and last name', () => {
  var user = { location: 'Brazil', age: 25 };
  var res = utils.setName(user, 'Guilherme Eduardo');
  expect(res).toInclude({
    firstName: 'Guilherme',
    lastName: 'Eduardo'
  })
});

/* it('should expect some values', () => {
  expect(12).toNotBe(13);
  expect({ name: 'Guilherme' }).toEqual({ name: 'Guilherme' });
  expect([2, 3, 4]).toInclude(2).toExclude(1);
  expect({
    name: 'Guilherme',
    age: 25,
    location: 'Brazil'
  }).toInclude({
    age: 25
  }).toExclude({
    age: 23
  });
}); */