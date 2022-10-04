import { validateEmail } from '.';

describe('validations', () => {
  it('should verify that the email is valid', () => {
    const isValid = validateEmail('rafaabatistas@gmail.com');

    expect(isValid).toBeTruthy();
  });
});
