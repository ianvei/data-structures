class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        const node = new Node(val);
        // node.val = val;
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return this
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        
        let current = this.head;
        let previous = current;
        while(current.next){
            previous = current
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length -= 1;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length -= 1;
        if(this.length === 0 ){
            this.tail = null;
        }
        return this.head
    }

    unShift(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            let current = this.head;
            let newHead = node;
            newHead.next = current;
            this.head = newHead;
        }   
        this.length += 1;
        return node;
    }

    get(index){
        let count = 0;
        if(index > this.length || index < 0){
            return null;
        }

        let current = this.head;
        
        while(count !== index){
            console.log(current)
            current = current.next;
            count++
        }
        return current;
    }

    set(index, value){
        let nodeToUpdate = this.get(index)
        if(nodeToUpdate){
            nodeToUpdate.val = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        const node = new Node(value);
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === this.length){
            this.push(value);
            return true;
        }
        if(index === 0){
            this.unShift(value);
            return true;
        }

        const previousNode = this.get(index-1);
        node.next = this.get(index);
        previousNode.next = node;
        
        this.length += 1;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length){
            return undefined;
        }

        if(index === this.length - 1){
            this.pop();
        }

        if(index === 0){
            this.shift();
        }

        const previousNode = this.get(index-1);
        previousNode.next = previousNode.next.next;
        this.length -= 1;
        return previousNode
    }

    reverse(){

        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next;

        while(current != null){
            next = current.next 
            current.next = prev;
            prev = current;
            current = next;
        }

    }

}

const list = new SinglyLinkedList();

// const parker = new Node(3);
// const trevode = new Node(6);
// const dode = new Node(9);

// list.push(3)
// list.push(6)
// list.push(9);
// // list.set(8, 'parker')
// list.insert(1, 'dog')
// list.remove(2);
// list.remove(1);

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse();
console.log(list);
// list.shift()
// list.unShift(2)
// list.shift()
// list.shift();
// console.log(list.get(2))
// list.shift();
// list.shift();
// list.shift();

// list.pop()
// list.pop()
// list.push(dode);
// list.pop();
// list.pop()

// console.log(list)