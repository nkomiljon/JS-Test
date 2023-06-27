const sumTwoItems = require('../scripts/main')

it('',  () => {

    // Arrange
    const a = 5;
    const b = 5;
    // Act
    const result = sumTwoItems(a, b);
    // Assert
    expect(result).toBe(10)
});