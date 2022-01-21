    let divisor = 2;
    let s = 0;
    for (let i = 3; i <= 39; i += 2) {

        s += i / divisor;
        divisor *= 2;
    }
    s += 1;
    console.log((s).toFixed(2));