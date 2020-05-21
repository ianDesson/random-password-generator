import { generatePassword } from './passwordGenerator';

it('generates a different password each time', () => {
  const firstPassword = generatePassword();
  const secondPassword = generatePassword();
  expect(firstPassword).not.toEqual(secondPassword);
});

it('generates a password with the correct length', () => {
  const password = generatePassword(6);
  expect(password.length).toEqual(6);
})