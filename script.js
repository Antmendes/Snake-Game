
let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
let direction = 'right'
let game = setInterval(startGame, 150)  
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = 'beige'  // estilo do contexto
    context.fillRect(0, 0, 16 * box, 16 * box) // desenha o local do jogo
}

function criarSnake(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'black'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function criarComida(){
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update)

// funçao pra determinar a direçao
function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left'
    if(event.keyCode == 38 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 && direction != 'up') direction = 'down'
}

function restart(){
    startGame()
}





function startGame(){
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box // bloco pra que a cobra nao fuja da tela
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game)
            alert('Game Over :(')
            alert('Atualize a página para reiniciar!')
            
        }
        
    }
    

    criarBG()
    criarSnake()
    criarComida()

    

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    // coordenadas da cobra
    if(direction == 'right') snakeX += box
    if(direction == 'left') snakeX -= box
    if(direction == 'up') snakeY -= box
    if(direction == 'down') snakeY += box

    if(snakeX != food.x || snakeY != food.y){
        snake.pop()  // retira o ultimo elemento
    }else{
      food.x =  Math.floor(Math.random() * 15 + 1) * box
      food.y = Math.floor(Math.random() * 15 + 1) * box
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead) // acrescenta um elemento ao topo

}

