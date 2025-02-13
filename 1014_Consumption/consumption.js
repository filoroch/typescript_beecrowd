var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B] = input.split('\n').map(parseFloat);

const averageConsuption = (X, Y) => {
    const totalDistanceKM = X;
    const totalCoastGasoline = Y;
    const averageConsumptionCar = totalDistanceKM/totalCoastGasoline;

    return averageConsumptionCar.toFixed(3);
};

console.log(`${averageConsuption(A, B)} km/l`);
