import validate from '../validate';

describe('Login validation', () => {
  describe('username', () => {
    it('should return an error if username is an empty string', () => {
      expect(validate({ username: '' })).toHaveProperty('username');
    });

    it('should return an error if username starts with a space', () => {
      expect(validate({ username: ' john' })).toHaveProperty('username');
    });

    it('should return an error if username ends with a space', () => {
      expect(validate({ username: 'john ' })).toHaveProperty('username');
    });

    it('should return an error if username contains just spaces', () => {
      expect(validate({ username: '  ' })).toHaveProperty('username');
    });

    it('should not return an error if username is valid', () => {
      expect(validate({ username: 'john' })).not.toHaveProperty('username');
    });
  });
});
