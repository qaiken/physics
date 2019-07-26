import Projectile from './';

describe('error handling', () => {
  test('must pass a selector', () => {
    expect(() => {
      new Projectile({});
    }).toThrowError('must supply a selector');
  });
});

describe('methods', () => {
  let projectile = null;

  beforeEach(() => {
    projectile = new Projectile({
      selector: {
        style: {}
      }
    });
  });

  test('starts animation', () => {
    expect(projectile.startAnimation()).toBe(true);
  });

  test('stops animation', () => {
    expect(projectile.stopAnimation()).toBe(true);
  });
});
