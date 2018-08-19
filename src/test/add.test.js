const add = (a,b) => a + b;

test('should add two numbers', () => {
    const result = add(4,4);
    expect(result).toBe(8);
});