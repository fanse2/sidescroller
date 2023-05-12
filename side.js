window.addEventListener('load',()=>{
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 720

    class InputHandler {
        constructor() {
            this.keys = []
            window.addEventListener('keydown', e=>{
                console.log(e.key)
                if((e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight') 
                    && this.keys.push(e.key) === -1){
                    this.keys.push(e.key)
                }
                console.log(e.key, this.keys)
            })
            window.addEventListener('keyup', e=>{
                console.log(e.key)
                if( e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight') {
                    this.keys.splice(this.keys.indexOf(e.key),1)
                }
                console.log(e.key, this.keys)
            })
        }

    }

    class Player {
        constructor(gameWidth, gameHight) {
            this.gameWidth = gameWidth
            this.gameHight = gameHight
            this.width = 200
            this.height = 200
            this.x = 0
            this.y = this.gameHight-this.height
        }
        draw(context) {
            context.fillStyle = 'white'
            context.fillRect(this.x, this.y, this.width, this.height)
        }
        update() {
            this.x++
        }
    }

    class Background {

    } 

    class Enemy {

    }

    function handleEnemies() {

    }

    function displayStatusText() {

    }

    const input = new InputHandler()
    const player = new Player(canvas.width, canvas.height)

    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        player.draw(ctx)
        player.update()
        requestAnimationFrame(animate)
    }

    animate()
})

