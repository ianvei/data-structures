class Node {
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        console.log(this)
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }

        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            let temp = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            temp.tail = null;
        }

        
        this.length--
        console.log(this);
        console.log(temp)
        return temp;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        const temp = this.head;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else{
            
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        
        this.length--
        console.log(this);
        console.log(temp);
        return temp;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        console.log(this);
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let tempNode;
        const half = this.length / 2
        if(index > half){
            tempNode = this.tail;
            for(let i = this.length-1; i > index; i--){
                // console.log(tempNode)
                tempNode = tempNode.prev;
                // console.log(tempNode)
                console.log('g')
            }
        } else {
            tempNode = this.head;
            for(let i = 0; i < index; i++){
                // console.log(tempNode)
                tempNode = tempNode.next;
                // console.log(tempNode)
            }
        }
        console.log(tempNode)
        return tempNode
    }

    set(val, index){
        if(this.get(index)){
            const changedNode = this.get(index);
            changedNode.val = val;
            console.log('true')
            console.log(this)
            return true;
        }
        console.log(this)
        return false;
    }

    insert(val, index){
        if(this.get(index)){
            const newNode = new Node(val);
            let oldNode = this.get(index);
            oldNode = oldNode.prev
            oldNode.next.prev = newNode;
            newNode.next = oldNode.next;
            newNode.prev = oldNode;
            oldNode.next = newNode;
            console.log('true')
            console.log(this)
            this.length++
            return this;
        }
    }

    remove(index){
        if(this.get(index)){
            let oldNode = this.get(index);
            oldNode = oldNode.prev
            oldNode.next.prev = oldNode.prev;
            oldNode.prev.next = oldNode.next;
            oldNode.next = null;
            oldNode.prev = null;
            this.length--
            console.log(this)
            return this   
        }
    }

    reverse() {
        let current = this.head;
        let previousNode = null;

        while(current !== null){
            previousNode = current.prev;
            current.prev = current.next;
            current.next = previousNode
            current = current.prev
        }
        let temp = this.head
        this.head = this.tail;
        this.tail = temp;
         

        console.log(this);
        return this;
    }
    // implement reverse!
}


const list = new DoublyLinkedList;

list.push('parker');
list.push('trevor');
list.push('daniel');
list.unshift('dog');
list.push('mog');

list.get(2);
list.insert('harker', 2);
// list.remove(2)
list.reverse();

// ['dog', 'park', 't', 'd', 'mog']

// list.shift()
// list.pop();