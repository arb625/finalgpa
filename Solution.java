# Complete the function below.
def check_points_for_lamp(points,lamps):
    for point in points:
        if point in lamps:
            return True
        
def get_rcd_points(x,y,n):
    rcd_points = []
    if x > 2:   
        for i in range(1,x-1):
            rcd_points.append([i,y])
    if x < n-1:   
        for i in range(x+2,n+1):
            rcd_points.append([i,y])
    if y > 2:   
        for j in range(1,y-1):
            rcd_points.append([x,j])
    if y < n-1:   
        for j in range(y+2,n+1):
            rcd_points.append([x,j])
    i,j = x,y
    skip = True
    while i <= n and j <= n:
        i += 1
        j += 1
        if skip:
            skip = False
            continue
        rcd_points.append([i,j])
    i,j = x,y
    skip = True
    while i >= 1 and j >= 1:
        i -= 1
        j -= 1
        if skip:
            skip = False
            continue
        rcd_points.append([i,j])
    i,j = x,y
    skip = True
    while i >= 1 and j <= n:
        i -= 1
        j += 1
        if skip:
            skip = False
            continue
        rcd_points.append([i,j])
    i,j = x,y
    skip = True
    while i <= n and j >= 1:
        i += 1
        j -= 1
        if skip:
            skip = False
            continue
        rcd_points.append([i,j])
    return rcd_points

def checkIllumination(n, lamps, queries):
    answers = []
    for query in queries:
        x, y = query
        if (check_points_for_lamp(get_rcd_points(x,y,n), lamps)):
            answers.append("LIGHT")
        else:
            answers.append("DARK")
    return answers