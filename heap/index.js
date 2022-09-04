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
        console.log(this.values);
    }
}



const heap = new MaxBinaryHeap();
heap.values = [41,39,33,18,27,12];
heap.insert(55);
// heap.insert(35);
heap.insert(1);
heap.insert(45);