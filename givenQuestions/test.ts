function caloriesBurned(weight: number, ride: number[][]): number {
    let calories = 0;

    for (let i = 0; i < ride.length - 1; i++) {
        const [v, t] = ride[i];
        const [viPlus1, t1] = ride[i + 1];
        
        const deltaTime = (t1 - t) / 3600; // Convert seconds to hours
        const calorieIncrement = weight * ((2.5 * v) - 6) * deltaTime;

        calories += calorieIncrement;
    }

    return Math.round(calories);
}

console.log(caloriesBurned(60, [[6, 0], [4, 1800], [0, 3600]])); // should print 390