class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        console.log(this);
        return this;
    }  
    
    pop(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        console.log(this)
        return temp.val;
    }

}


class Queue{
    constructor(){
        this.first = null;
        this.last = null; 
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        console.log(this);
        this.size++
        return this;
    }
    
    dequeue(){
        if(!this.first){
            return null;
        }

        if(this.first === this.last){
            this.last = null;
        }

        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        console.log(temp);
        console.log(this);
        return temp;
    }
}
const queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.dequeue()
queue.dequeue()

// stack.push(32)
// stack.push(50)
// stack.pop()
// stack.pop()
// stack.pop()

