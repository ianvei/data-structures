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



const heap = new MaxBinaryHeap();
heap.values = [41,39,33,18,27,12];
// heap.insert(55);
// heap.insert(35);
// heap.insert(1);
// heap.insert(45);
// heap.insert(199);
console.log(heap.values)
heap.extractMax();