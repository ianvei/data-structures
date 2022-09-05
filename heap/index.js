class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(val){
        this.values.push(val);
        
        let parent = Math.floor(((this.values.length-2) / 2));
        let index = this.values.length-1
        while(this.values[parent] < val){
            if(parent < 0){
                break;
            }
            let temp = this.values[parent];
            this.values[parent] = val;
            this.values[index] = temp;
            index = parent;
            parent = Math.floor(((parent-1) / 2));
        }
        return this.values;
    }

    extractMax(){
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values[this.values.length-1] = temp;
        this.values.pop();

        let index = 0;
        while(true){           
            let firstChild = this.values[2 * index + 1]
            let secondChild = this.values[2 * index + 2]
            let swapIndex = firstChild > secondChild? 2 * index + 1 : 2 * index + 2;

            if(!firstChild){
                swapIndex = 2*index+2
            }
            if(!secondChild){
                swapIndex = 2*index+1
            } 

            if (this.values[index] < this.values[swapIndex]){
                console.log(this.values[index], this.values[swapIndex])
                let temp = this.values[index];
                this.values[index] = this.values[swapIndex];
                this.values[swapIndex] = temp;
                index = swapIndex;
            } else {
                console.log(this.values)
                return false;
            }
        }
    }
}

class PriorityQueue{
    constructor(){
        this.values = [{val: 'parker', priority: 41}, {val: 'pardfasoker', priority: 39}, {val: 'pardoker', priority: 33}]
    }
    insert(val, priority){
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        
        // let parent = Math.floor(((this.values.length-2) / 2));
        let index = this.values.length-1
        console.log(parent)
        console.log(this.values[parent])
        let element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor(((index-1) / 2));
            let parent = this.values[parentIndex];
            if(element.priority <= parent.priority){
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        // while(this.values[parent].priority < priority){
        //     if(parent < 0){
        //         break;
        //     }
        //     let temp = this.values[parent];
        //     this.values[parent] = newNode;
        //     this.values[index] = temp;
        //     index = parent;
        //     parent = Math.floor(((parent-1) / 2));
        // }
        // console.log(this.values)
        console.log(this.values)
        return this.values;
    }

    extractMax(){
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values[this.values.length-1] = temp;
        this.values.pop();

        let index = 0;
        while(true){           
            let firstChild = this.values[2 * index + 1]
            let secondChild = this.values[2 * index + 2]
            let swapIndex;
            console.log(this.values)
            if(!firstChild){
                swapIndex = 2*index+2
            } else {
                swapIndex = firstChild.priority > secondChild.priority? 2 * index + 1 : 2 * index + 2;
            }
            if(!secondChild){
                swapIndex = 2*index+1
            } else {
                swapIndex = firstChild.priority > secondChild.priority? 2 * index + 1 : 2 * index + 2;
            }

            if (this.values[index].priority < this.values[swapIndex].priority){
                console.log(this.values[index], this.values[swapIndex])
                let temp = this.values[index];
                this.values[index] = this.values[swapIndex];
                this.values[swapIndex] = temp;
                index = swapIndex;
            } else {
                console.log(this.values)
                return false;
            }
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// const heap = new MaxBinaryHeap();
// heap.values = [41,39,33,18,27,12];
// heap.insert(55);

// heap.insert(35);
// heap.insert(1);
// heap.insert(45);
// heap.insert(199);
// console.log(heap.values)
// heap.extractMax();
// heap.extractMax();

// const priorityQueue = new PriorityQueue();
// const testNode = new Node('parker', 5)
// console.log(testNode)
// priorityQueue.insert('parker', 45);
// priorityQueue.extractMax();

const frequency = (string) => {
    const letterCount = {};
    for(let letter of string){
        if(!letterCount[letter]){
            letterCount[letter] = 0;
        } 
        letterCount[letter] += 1;
    }
    console.log(letterCount)
    return letterCounter(letterCount);
}

const letterCounter = (obj) => {
    let letterVar;
    let max = 0;
    for(letter in obj){
        if(obj[letter] > max){
            max = obj[letter];
            letterVar = letter;
        }
    }
    console.log(letterVar, max);
    return 
}

frequency('parkerarkerrrr');
