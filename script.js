
class Queue {

    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element); 
    }
    
    dequeue() {
      return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }
    
    peek() {
      return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
   
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.join(" -> "));
    }
  }
  
  // Example usage:
  const queue = new Queue();
  const color = new Queue();
  
let game = 'x';
let xplyer = 0;
let oplyer = 0;

function evntt (id) {
    let el = document.getElementById(id);
   
    if(game === 'x' && el.innerHTML ===''){
       el.innerHTML = game;
       queuexo(id);
       game = 'o'
       document.getElementById('tital').innerHTML = 'O'
    }
    else if(game === 'o'  && el.innerHTML ===''){
        queuexo(id);
        el.innerHTML = game;
        game = 'x';
        document.getElementById('tital').innerHTML = 'X'
    }
    win();
}
queuexo = (id) =>{
    color.enqueue(id);
    queue.enqueue(id);
    let d = queue.peek();
    let peekcolor = color.peek();

    if( color.size() > 5 ){
        document.getElementById(peekcolor).style.backgroundColor = 'rgba(171, 11, 11, 0.31)';
        color.dequeue();
    }
    if(queue.size() > 6){
        document.getElementById(d).style.backgroundColor = 'rgba(171, 11, 11, 0.605)'
        document.getElementById(d).innerHTML = '';
        queue.dequeue();
    }
    
}

remove = () =>{
    let xo = document.querySelectorAll('.hedar');
    for (let i = 0 ; i < 9; i++) {
        xo[i].innerHTML =''   
        xo[i].style.backgroundColor = 'rgba(171, 11, 11, 0.605)'
  
    }
    game = 'x';
    document.getElementById('tital').innerHTML = 'X'

    document.getElementById('xp').innerHTML = xplyer;
    document.getElementById('op').innerHTML = oplyer;
    while(!queue.isEmpty()){
        queue.dequeue();
    }
    while(!color.isEmpty()){
        color.dequeue();
    }
    

}
let wineer=[];
win =()=>{
          wineer = document.querySelectorAll('.hedar') ;
            
        for(let i =0 ; i < 9 ;i++){
           
        if(wineer[i].innerHTML == wineer[(i+1)].innerHTML && 
          wineer[(i+1)].innerHTML == wineer[(i+2)].innerHTML && wineer[i].innerHTML != '' )
          {
            if( wineer[i].innerHTML == 'x'){
               xplyer++; 
              remove();
            }
            else{
                oplyer++;
                remove();  
            }
            
          }
          i++;
          i++;
        }//end lop

        let count = 0;
        while (count < 3){
            if(wineer[count].innerHTML == wineer[(count+3)].innerHTML &&
                wineer[count].innerHTML == wineer[(count+6)].innerHTML &&
                wineer[count].innerHTML != ''
              )
            {  
            if( wineer[count].innerHTML == 'x')
                { 
                xplyer++;
                remove();
                }
              else
                {  
                oplyer++;
                remove();  
                }
            }
            count++; }

        let center = 4;   
        if( 
           (wineer[4].innerHTML == wineer[0].innerHTML &&
            wineer[4].innerHTML == wineer[8].innerHTML && 
            wineer[4].innerHTML !='' )  
        )
        {
            if( wineer[4].innerHTML == 'x')
                { 
                xplyer++;
                remove();
                }
            else
                {  
                oplyer++;
                remove();  
                }
        }

        if(
            wineer[4].innerHTML == wineer[2].innerHTML &&
            wineer[4].innerHTML == wineer[6].innerHTML 
               
            )
            {
                if( wineer[4].innerHTML == 'x')
                    { 
                    xplyer++;
                    remove();
                    }
                  else if( wineer[4].innerHTML == 'o')
                    {  
                    oplyer++;
                    remove();  
                    }
            }

        }

        
