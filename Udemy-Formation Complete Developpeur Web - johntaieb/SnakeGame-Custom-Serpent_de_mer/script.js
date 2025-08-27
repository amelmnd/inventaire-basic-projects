window.onload = function(){
    var canvas;
    var canvasWidth = 700; 
    var canvasHeight = 500; 
    var blockSize = 20;
    var ctx;
    var delay = 100;
    var snakee;
    var applee;
    var widthInBlock = canvasWidth/blockSize;
    var heightInBlock = canvasHeight/blockSize;
    var score;
    var centerX = canvasWidth/2;
    var centreY = canvasHeight/2 ;


    init();

    function init(){
        canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        canvas.style.border = "15px solid #dcdde1";
        canvas.style.margin =" 50px auto";
        canvas.style.display = "block";
        canvas.style.backgroundColor = "rgb(49, 134, 245)"
    
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');

        snakee = new Snake([[6,4],[5,4],[4,4]], "right");
        applee = new Apple([10, 10]);

        score = 0
        refreshCanvas();
    }

    function refreshCanvas(){
        snakee.advence();
        if (snakee.checkCollision()){
            gameOver()
        }
        else
        {
            if(snakee.isEatingApple(applee)){
                score ++;
                snakee.eatApple = true;
                if(score >= 3 && score <= 9){
                    setTimeout(delay-10)
                }
                else if(score >= 10 && score <= 19 ){
                    setTimeout(delay-30)
                }
                else if(score >= 20){
                    setTimeout(delay+30)
                }

                do{
                    applee.setnewposition();
                }
                while(applee.isOnSnake(snakee))
            }
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            snakee.draw();
            applee.draw();
            drawScore();
            timeout = setTimeout(refreshCanvas, delay)
        }
    }

    function gameOver(){
        ctx.save();

        ctx.font = "bold 70px sans-serif";
        ctx.fillStyle= "#c23616";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.strokeText("Game Over",  centerX, centreY - 80)
        ctx.fillText("Game Over",  centerX, centreY - 80)
        
        ctx.font = "bold 30px sans-serif";
        ctx.strokeText("Espace pour rejouer",  centerX, centreY - 20)
        ctx.fillText("Espace pour rejouer",  centerX, centreY - 20)
        ctx.restore();
    }

    function restart(){
        snakee = new Snake([[6,4],[5,4],[4,4]], "right");
        applee = new Apple([10, 10]);

        score = 0;
        clearTimeout(timeout)
        refreshCanvas();
    }

    function drawScore(){
        ctx.save();
        ctx.font = "bold 50px sans-serif";
        ctx.fillStyle= "rgb(21, 93, 187)";
        ctx.textAlign = "center"

        ctx.fillText(score.toString(), 30, 50)
        ctx.restore();
    }
    

    function drawBlock(ctx, position){
        var x = position[0] * blockSize;
        var y = position[1] * blockSize
        ctx.fillRect(x, y, blockSize, blockSize)
    }

    function Snake(body, direction){
        this.body = body;
        this.direction = direction;
        this.eatApple = false;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#0c2461";
            
            for(var i = 0; i < this.body.length; i++){
                drawBlock(ctx,this.body[i]);
            }
            ctx.restore();
        };
        this.advence = function(){
            var nextPosition = this.body[0].slice();
            
            switch(this.direction){
                case "left" : 
                    nextPosition[0] -= 1;
                    break;
                case "right" :
                    nextPosition[0] += 1;
                    break;
                case "down" :
                    nextPosition[1] += 1;
                    break;
                case "up" :
                    nextPosition[1] -= 1;
                    break;
                default : 
                    throw("direction impossible");
            }
            
            this.body.unshift(nextPosition);
            if(!this.eatApple){
                this.body.pop();
            }
            else{
                this.eatApple = false;
            }
        };
            this.setDirection = function(newDirection){
                var allowedDirections;
                switch(this.direction){
                    case "left" : 
                    case "right" :
                        allowedDirections = ["up", "down"];
                        break;
                    case "down" :
                    case "up" :
                        allowedDirections = ["left", "right"];
                        break;
                    default : 
                        throw("direction impossible");
                }
                if(allowedDirections.indexOf(newDirection) > -1){
                    this.direction = newDirection
                }
            }
            this.checkCollision = function(){
                var wallCollision = false;
                var snakeCollision = false;
                var head = this.body[0];
                var rest = this.body.slice(1);
                var snakeX = head[0];
                var snakeY = head[1];
                var minX = 0;
                var minY = 0;
                var maxX = widthInBlock - 1;
                var maxY = heightInBlock - 1;
                var isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
                var isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;
                
                if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls){
                    wallCollision = true
                }
                for(var i = 0; i < rest.length; i++){
                    if(snakeX === rest[i][0] && snakeY === rest[i][1]){
                        snakeCollision = true;
                    }
                }
                return wallCollision || snakeCollision;

            }
            this.isEatingApple = function(appleToEat){
                var head = this.body[0];
                if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]){
                    return true;
                }
                else{
                    return false;
                }
            }
    };

    function Apple(position){
        this.position = position;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#dff9fb";
            ctx.beginPath();
            var radius = blockSize/3;
            var x = this.position[0]*blockSize + radius;
            var y = this.position[1]*blockSize + radius;
            ctx.arc(x, y, radius, 0, Math.PI*0.9, true);
            ctx.fill();
            ctx.restore();
        };
        this.setnewposition = function(){
            var newX = Math.round(Math.random() * (widthInBlock -1));
            var newY = Math.round(Math.random() * (heightInBlock -1));
            this.position = [newX, newY];
        };
        this.isOnSnake = function(snakeToCheck){
            var isOnSnake = false;
            
            for(var i = 0; i > snakeToCheck.body.length; i++){
                if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck[i][1]){
                    isOnSnake = true;
                }
                return isOnSnake;
            }
        }
    }
    document.onkeydown = function handleKeyDown(e){
        var key = e.keyCode;
        var newDirection;
        switch(key){
            case 37 : 
                newDirection = "left";
                break;
            case 38 : 
                newDirection = "up";
                break;
            case 39 : 
                newDirection = "right";
                break;
            case 40 : 
                newDirection = "down";
                break;
            case 32 : 
                restart();
                return;
            default : 
                return;
        }
        snakee.setDirection(newDirection);
    }
}