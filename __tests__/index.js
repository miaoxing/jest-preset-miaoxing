const preset = require('../jest-preset');

describe('preset', () => {
  test('basic', () => {
    expect(preset).toBeInstanceOf(Object);

    expect(preset.testEnvironment).toBe('jsdom');
  });
});
