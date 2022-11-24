function crash(): boolean {
    if (x == 0 || y == 0 || y == 4 || x == 4) {
        return true
    } else {
        return false
    }
    
}

function erlaubt(koordinate: number): number {
    let vorschlag: number;
    if (koordinate == 0) {
        vorschlag = (Math.trunc(Math.random() * 10) % 3 * 2 - 2) / 2
        while (vorschlag == -1) {
            vorschlag = (Math.trunc(Math.random() * 10) % 3 * 2 - 2) / 2
        }
        return vorschlag
    }
    
    if (koordinate == 4) {
        vorschlag = (Math.trunc(Math.random() * 10) % 3 * 2 - 2) / 2
        while (vorschlag == 1) {
            vorschlag = (Math.trunc(Math.random() * 10) % 3 * 2 - 2) / 2
        }
        return vorschlag
    }
    
    return (Math.trunc(Math.random() * 10) % 3 * 2 - 2) / 2
}

function random_angle(koordinate2: number) {
    
    angle = erlaubt(koordinate2)
    return Math.trunc(angle)
}

let angle = 0
let x = 2
let y = 2
forever(function on_forever() {
    let kollision = crash()
    
    let x_angle = random_angle(x)
    let y_angle = random_angle(y)
    if (x_angle == 0 && y_angle == 0) {
        
    } else {
        kollision = false
        while (kollision == false) {
            x = x + x_angle
            y = y + y_angle
            led.plot(x, y)
            basic.pause(500)
            basic.clearScreen()
            kollision = crash()
        }
    }
    
})
