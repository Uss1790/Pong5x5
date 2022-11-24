def crash():
    if x == 0 or y == 0 or y == 4 or x == 4:
        return True
    else:
        return False
def erlaubt(koordinate: number):
    if koordinate == 0:
        vorschlag = ((int(Math.random() * 10) % 3) * 2 - 2)/2
        while vorschlag == -1:
            vorschlag = ((int(Math.random() * 10) % 3) * 2 - 2)/2
        return vorschlag
    if koordinate == 4:
        vorschlag = ((int(Math.random() * 10) % 3) * 2 - 2)/2
        while vorschlag == 1:
            vorschlag = ((int(Math.random() * 10) % 3) * 2 - 2)/2
        return vorschlag
    return ((int(Math.random() * 10) % 3) * 2 - 2)/2
def random_angle(koordinate2: number):
    global angle
    angle = erlaubt(koordinate2)
    return int(angle)
angle = 0
x = 2
y = 2

def on_forever():
    kollision = crash() 
    global x, y
    x_angle = random_angle(x)
    y_angle = random_angle(y)
    if x_angle == 0 and y_angle == 0:
        pass
    else:
        kollision = False
        while kollision == False:
            x = x + x_angle
            y = y + y_angle
            led.plot(x, y)
            basic.pause(500)
            basic.clear_screen()
            kollision = crash()
forever(on_forever)
