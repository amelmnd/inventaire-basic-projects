var fallObjects=
    new Array();
    function newObject(url,height,width){
        fallObjects[fallObjects.length]=new Array(url,height,width);
    }


var numObjs=50, waft=10, fallSpeed=50, wind=0;
newObject("smile_1.gif",29,27);
newObject("smile_2.gif",22,20);
newObject("smile_3.gif",15,15);
newObject("smile_4.gif",26,25);
newObject("smile_5.gif",23,23);
newObject("smile_6.gif",26,25);
newObject("smile_7.gif",32,33);

function winSize(){
    winWidth=(moz)?window.innerWidth:document.body.clientWidth;
    winHeight=(moz)?window.innerHeight:document.body.clientHeight;
}
    

function fallObject(num,vari,nu){
	objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),
                           -10,(parseInt(Math.random()*waft))*((Math.random()>0.2)?1:-2),
                           0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),
                           vari,fallObjects[vari][1],fallObjects[vari][2]);
	if(nu==1){
        document.write('<img id="fO'+i+'" style="position:fixed;" src="'+fallObjects[vari][0]+'">'); 
             }
}


function fall(){
	for(i=0; i<numObjs;i++)
    {
        var fallingObject=document.getElementById('fO'+i);
		if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8]))))
        {
            fallObject(i,objects[i][6],0);
        }
		objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
		with(fallingObject.style)
        { 
            top=objects[i][1]+winOffset+'px';left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+'px';
        }
	}
	setTimeout("fall()",100);
}

var objects = new Array(),
winOffset=0,
winHeight,
winWidth,
togvis,
moz=(document.getElementById&&!document.all)?1:0;winSize();

for (i=0;i<numObjs;i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1);}
fall();

if (!Function.prototype.bind){
    Function.prototype.bind = function (bind){
        var self = this;
        return function(){
            return self.apply(bind, arguments);
        };
    };
}