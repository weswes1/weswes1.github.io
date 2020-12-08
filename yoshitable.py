import numpy as np
from matplotlib import pyplot as plt
from PIL import Image 
from numpy import asarray
from artToolsUpdated import *


cryingMan = np.zeros((500,500,4))
kiyoshi = Image.open('kiyoshismall.png') 
numpydata = asarray(kiyoshi)

switch = 1 ;

for i in range(0,500):
	for j in range(0,500):
		cryingMan[i,j] = [240,230,255,255]

	
for i in range(0,160):
	for j in range(0,250):
		cryingMan[i+130,j+130] = numpydata[i,j]

for i in range(0,500):
	for j in range(0,500):
		if (cryingMan[i,j][2]!=255):
			cryingMan[i,j] = [0,0,0,255]


for i in range(0,160):
	for j in range(0,250):
		if (cryingMan[i+130,j+130][2]==255):
			cryingMan[i+130,j+130] = [173, 216, 230,255]


#for i in range()    dark brown
#101,67,33


for stop in range(0,50):
		for i in range(0,80):
			if(stop-i > 0):
				cryingMan[499-i,499-stop] = [101,67,33,255]

for stop in range(0,50):
		for i in range(0,80):
			if(stop-i > 0):
				cryingMan[499-i,450-stop] = [101,67,33,255]

for colstart in range(0,400):
	for i in range(0,80):
				cryingMan[499-i,i+colstart] = [101,67,33,255]


for stop in range(0,20):
	for colstart in range(0,40):
		for i in range(0,80):
			for j in range(0,2):
				if (5*stop-i):
					cryingMan[499-i,j+i+colstart*10] = [0,0,0,255]


for stop in range(0,20):
	for i in range(0,20):
		for j in range(0,2):
			if (5*stop-i > 0):
				cryingMan[499-i-j,i-stop*10] = [0,0,0,255]


for depth in range(0,3):
	for i in range(0,80):
		cryingMan[i,i+depth]=[0,0,0,255]
		cryingMan[495-i,495-i+depth]=[0,0,0,255]
		cryingMan[i,495-i+depth]=[0,0,0,255]
		cryingMan[495-i,i+depth]=[0,0,0,255]


for depth in range(0,3):
		for i in range(0,340):
			cryingMan[80+depth,80+i]=[0,0,0,255]
			cryingMan[421+depth,80+i]=[0,0,0,255]
			cryingMan[80+i,80+depth]=[0,0,0,255]
			cryingMan[421-i,420+depth]=[0,0,0,255]


for depth in range(0,3):
		for i in range(0,250):
			cryingMan[127+depth,130+i]=[0,0,0,255]
			cryingMan[290+depth,130+i]=[0,0,0,255]

for depth in range(0,3):
		for i in range(0,164):
			cryingMan[127+i,380+depth]=[0,0,0,255]
			cryingMan[127+i,130+depth]=[0,0,0,255]


for i in range(0,4):
	for j in range(0,300):
		cryingMan[380+i,430-j]=[0,0,0,255]
		cryingMan[430+i,480-j]=[0,0,0,255]


makeRect(20,140,[255,182,193,255],[453,320],cryingMan)

for k in range(0,60):
	for depth in range(0,4):
		for i in range(0,50):
			if(i%3==0):
				switch*=-1;
			if (switch<0):
				cryingMan[380+i+depth,i+430-5*k]=[0,0,100,255]
			if (switch>0):
				cryingMan[380+i+depth,i+430-5*k]=[0,255,0,255]

for k in range(0,60):
	for depth in range(0,4):
		for i in range(0,50):
			if(i%3==0):
				switch*=-1;
			if (switch<0):
				cryingMan[379+i+depth,i+430-5*k]=[0,0,100,255]
			if (switch>0):
				cryingMan[380+i+depth,i+430-5*k]=[0,255,0,255]

for i in range(0,5):
	for j in range(0,50):
		cryingMan[430+j,470+i] = [0,0,0,255]
		cryingMan[430+j,190+i] = [0,0,0,255]
		cryingMan[380+j,140+i] = [0,0,0,255]


for depth in range (0,90):
	for i in range(0,60):
		cryingMan[350-i-depth,490-i]=[0,0,245,255]
		if (depth%3==0):
			cryingMan[350-i-depth,490-i]=[230,230,230,255]
			cryingMan[350-i-depth-1,490-i]=[255,255,255,255]


diagnol(425,450,25,50,[160,82,45,255],cryingMan);
diagnol(425,425,25,50,[160,82,45,255],cryingMan);

for i in range(0,30):
	for j in range(0,30):
		cryingMan[430+i,430+j]=[160,82,45,255];

diagnol(427,427,23,5,[0,0,0,255],cryingMan);
diagnol(427,452,23,5,[0,0,0,255],cryingMan);

for i in range(0,5):
	for j in range(0,26):
		cryingMan[430+i,430+j]=[0,0,0,255];
		cryingMan[448+i,450+j]=[0,0,0,255];




makeEllipse(10,7,[430,445],[0,0,255,255],cryingMan);
makeEllipse(5,7,[437,448],[255,255,255,255],cryingMan);

for i in range(0,3):
	makeEllipse(10,7,[430,445],[0,0,255,255],cryingMan)


for i in range(0,50):
	for j in range (0,40):
		cryingMan[475-i-j,190-i]=[255,182,193,255]


for i in range(0,40):
	for j in range(0,2):
		cryingMan[385-i,485+j]=[0,0,0,255]

makeEllipse(3,2,[385,486],[0,0,0,255],cryingMan)

for i in range(0,4):
	if (i%2==0):
		makeEllipse(20-2*i,30-3*i,[398,450],[0,0,0,255],cryingMan)
	else:
		makeEllipse(20-2*i,30-3*i,[398,450],[180,190,255,255],cryingMan)


for i in range(0,4):
	if (i%2==0):
		makeEllipse(10-2*i,20-3*i,[380,430],[0,0,0,255],cryingMan)
	else:
		makeEllipse(10-2*i,20-3*i,[380,430],[180,190,255,255],cryingMan)

for i in range(0,4):
	if (i%2==0):
		makeEllipse(10-2*i,20-3*i,[415,460],[0,0,0,255],cryingMan)
	else:
		makeEllipse(10-2*i,20-3*i,[415,460],[180,190,255,255],cryingMan)


makeEllipse(30,60,[40,250],[250,250,250,255],cryingMan);


for j in range(0,80):
	for i in range(0,40):
		cryingMan[470-i-j,50+i] = [80,82,45,255];

for j in range(0,80):
	for i in range(0,40):
		cryingMan[470-i-j,110+i] = [80,82,45,255];



makeRect(30,30,[80,82,45,255],[380,120],cryingMan);

for i in range(0,2):
	for j in range(0,60):	
		cryingMan[390+i,50+j]=[0,0,0,255]
		cryingMan[350+i,90+j]=[0,0,0,255]

for j in range(0,30):
	for i in range(0,20):
		cryingMan[350+i-j,120-i] = [0,0,0,255];

for j in range(0,26):
	for i in range(0,16):
		cryingMan[350+i-j,118-i] = [192,192,192,255];


for i in range(0,7):
	if (i%2==0):
		makeCircle(15,[475-3*i,90],[255,0,0,255],cryingMan)
	else:
		makeCircle(15,[475-3*i,90],[200,200,255,255],cryingMan)

for i in range(0,2):
	for j in range(0,40):
		cryingMan[390+i-j,50+j]=[0,0,0,255]
		cryingMan[390+i-j,110+j]=[0,0,0,255]




makeCircle(15,[450,90],[240,230,255,255],cryingMan)


for i in range(0,80):
	for j in range(0,2):
		cryingMan[391+i,50-j]=[0,0,0,255]
		cryingMan[391+i,110-j]=[0,0,0,255]

for i in range(0,20):
	for j in range(0,2):
		cryingMan[410-j,90+i]=[0,0,0,255]

for i in range(0,27):
	for j in range(0,2):
		cryingMan[410+i,90+j]=[0,0,0,255]


for col in range(0,40):
	for i in range(0,20):
		cryingMan[300+col-i,40+i]=[255,255,255,255]

equaliteralTriange(10,[318,42],[0,0,255,255],cryingMan)
equaliteralTriange(10,[320,42],[255,255,255,255],cryingMan)

equaliteralTriange(12,[320,48],[0,255,0,255],cryingMan)
equaliteralTriange(12,[322,48],[255,255,255,255],cryingMan)

for i in range(0,4):
	cryingMan[311-i,53]=[0,255,0,255]
	cryingMan[311+i,53]=[0,255,0,255]
	cryingMan[309,53-i]=[0,255,0,255]
	cryingMan[309,53+i]=[0,255,0,255]

for i in range(0,3):
	cryingMan[311-i,47]=[0,0,255,255]
	cryingMan[311+i,47]=[0,0,255,255]
	cryingMan[309,47-i]=[0,0,255,255]
	cryingMan[309,47+i]=[0,0,255,255]


makeCircle(2,[306,47],[0,0,0,255],cryingMan)
makeCircle(2,[306,52],[0,0,0,255],cryingMan)



illuminate(50,250,[0,250,0,255],10,200000,cryingMan)

makeEllipse(3,8,[380,72],[255,0,0,255],cryingMan);
makeCircle(3,[380,72],[0,230,0,255],cryingMan);

for i in range(0,30):
	for j in range(0,30):
		cryingMan[280+i,100+j]=[255,255,255,255]


equaliteralTriange(12,[302,107],[0,0,0,255],cryingMan)
equaliteralTriange(12,[304,107],[255,255,255,255],cryingMan)

for i in range(0,7):
	for j in range(0,2):
		cryingMan[296-i,112+j]=[0,0,0,255]

for i in range(0,1):
	for j in range(0,6):
		cryingMan[295-i,109+j]=[0,0,0,255]

makeCircle(2,[291,113],[0,0,0,255],cryingMan)



for i in range(0,50):
	for j in range(0,50):
		cryingMan[i+200,j+25]=[255,255,255-i*20,255]

for i in range(0,50):
	for j in range(0,50):
		cryingMan[i+150,j+25]=[255,255-i*20,255,255]

for i in range(0,50):
	for j in range(0,50):
		cryingMan[i+100,j+25]=[255-i*20,255,255,255]

for i in range(0,50):
	for j in range(0,50):
		cryingMan[i+250,j+25]=[255-i*20,255-i*20,255,255]



plt.imshow(cryingMan.astype('uint8'), interpolation='nearest')
plt.show()