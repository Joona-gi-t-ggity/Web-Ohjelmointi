with open("numbers.txt", encoding="utf-8") as file:
    lines = file.readlines()

xOff = 50
yOff = 15
mult = 3
numSum = 100
height = 20

colorIn = ["#BD82A0","#D4AEC1","#F5F5F5","#BABADE","#9797CD"]
colorOut = ["#8a5779","#866e79","#9c9c9c","#767694","#5b5b80"]

lastY = yOff
for line in lines:
    lineList = line.strip().split(", ")
    lastX = xOff
    for partId in range(len(lineList)):
        if partId == 0:
            print(f"<!-- {lineList[0]} -->")
            print(f'<text x="0" y="{lastY+yOff}" fill="#000000" font-size="{height}"> {lineList[0]} </text>')
        else:
            thisWidth = int(lineList[partId])*mult
            thisColorIn = colorIn[partId-1]
            thisColorOut = colorOut[partId-1]
            tsX = lastX
            tsY = lastY

            lastX += thisWidth

            print(f'<rect width="{thisWidth}" height="{height}" x="{tsX}" y="{tsY}" rx="0" ry="0"')
            print(f'  style="fill:{thisColorIn}; stroke: {thisColorOut}; stroke-width:1"/>')
    lastY += yOff*2