const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeObj;

    switch (shape) {
        case 'circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'square':
            shapeObj = new Square(shapeColor);
            break;
        default:
            throw new Error('Invalid shape selected');
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeObj.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
}

module.exports = generateLogo;
