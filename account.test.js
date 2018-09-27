const account = require('./account');

beforeEach(()=> {
  account.balance = 500;
})

test('should return currrent balance', () => {
  expect(account.getBalance()).toEqual(500);
});

test('should be able to deposit cash and udpate balance', () => {
  account.deposit(100);
  expect(account.getBalance()).toEqual(600);
});

test('should be able to withdraw cash and udpate balance', () => {
  account.withdraw(100);
  expect(account.getBalance()).toEqual(400);
});

test('should not update balance after depositing when account balance is 5000 or more', () => {
  account.balance = 5000;
  account.deposit(100);
  expect(account.getBalance()).toEqual(5000);
});

test('should not update balance after withdrawl when account balance is 0 or less', () => {
  account.balance = 0;
  account.withdraw(100);
  expect(account.getBalance()).toEqual(0);
});