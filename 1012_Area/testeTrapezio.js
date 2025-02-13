lines = [3.0, 4.0, 5.2];

const trapezio = (B, b, h) => {
    return (B+b)*h/2;
}

console.log(trapezio(lines[0], lines[1], lines[2]));