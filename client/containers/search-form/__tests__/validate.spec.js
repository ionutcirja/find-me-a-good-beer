import validate from '../validate';

describe('Search validation', () => {
  describe('food', () => {
    it('should return an error if food value is an empty string', () => {
      expect(validate({ food: '' })).toHaveProperty('food');
    });

    it('should return an error if food value starts with a space', () => {
      expect(validate({ food: ' chips' })).toHaveProperty('food');
    });

    it('should return an error if food value ends with a space', () => {
      expect(validate({ food: 'lamb ' })).toHaveProperty('food');
    });

    it('should return an error if food value contains just spaces', () => {
      expect(validate({ food: '  ' })).toHaveProperty('food');
    });

    it('should not return an error if food value is valid', () => {
      expect(validate({ food: 'beef' })).not.toHaveProperty('food');
    });
  });
});
