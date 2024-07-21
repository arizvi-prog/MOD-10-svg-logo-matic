const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toBe('<rect x="50" y="20" width="200" height="200" fill="blue" />');
});
