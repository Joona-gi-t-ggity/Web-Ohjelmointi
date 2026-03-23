with open("svgPoints.txt", encoding="utf-8") as file:
    rawCoords = file.readlines()
coords = []

for line in rawCoords:
    lineCoords = line.strip().split(" ")
    retTuple = (int(lineCoords[0]), int(lineCoords[1]))
    coords.append(retTuple)

div = 5 
offSets = (5, 5)

retStr = ""
for coord in coords:
    x = int(coord[0]/div)+offSets[0]
    y = int(coord[1]/div)+offSets[1]
    if int(str(coord[0]/div).split(".")[1][0]) >= 5:
        x+=1    
    if int(str(coord[1]/div).split(".")[1][0]) >= 5:
        y+=1
    retStr += f" {x} {y},"

retStr = retStr[:len(retStr)-1]

#print(retStr)

## curves :D

with open("svgCurvePoints.txt", encoding="utf-8") as file:
    rawCoords = file.readlines()
coords = []

for line in rawCoords:
    lineCoords = line.strip().split(" ")
    retTuple = (int(lineCoords[0]), int(lineCoords[1]))
    coords.append(retTuple)

retStr = ""
coordPartId = 0
for coordId in range(len(coords)):
    coord = coords[coordId]
    x = int(coord[0]/div)+offSets[0]
    y = int(coord[1]/div)+offSets[1]
    if int(str(coord[0]/div).split(".")[1][0]) >= 5:
        x+=1    
    if int(str(coord[1]/div).split(".")[1][0]) >= 5:
        y+=1
    if coordPartId == 0:
        retStr += f"M{x} {y}"
        coordPartId += 1
    elif coordPartId == 1:
        retStr += f" S{x} {y}"
        coordPartId += 1
    else:
        retStr += f" {x} {y} \n"
        coordPartId = 0

print(retStr)