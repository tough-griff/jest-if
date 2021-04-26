require('./index.js');

describe('describe.if', () => {
  describe.if(true)('when true', () => {
    it('should pass', () => {
      expect(true).toBe(true);
    });
  });

  describe.if(false)('when false', () => {
    it('should skip', () => {
      throw new Error('this should not have been called');
    });
  });
});

describe.each([
  ['it', it],
  ['test', test],
])('%s.if', (name, method) => {
  method.if(true)('when true should pass', () => {
    expect(true).toBe(true);
  });

  method.if(false)('when false should skip', () => {
    throw new Error('this should not have been called');
  });
});
