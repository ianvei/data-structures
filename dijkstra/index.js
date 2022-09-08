class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(key){
        if(!this.adjacencyList[key]){
            this.adjacencyList[key] = [];
        }
        console.log(this.adjacencyList);
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        // console.log(this.adjacencyList[vertex1]);
        this.adjacencyList[vertex2].push({node: vertex1, weight});
        console.log(this.adjacencyList);
    }

    findShortest(start, end){
        let distances = {};
        let previous = {};
        let priorityQueue = new PriorityQueue;
        let path = [];

        for(let key in  this.adjacencyList){
            if(key === start){
                distances[key] = 0;
                priorityQueue.enqueue(key, 0)
            } else {
                distances[key] = Infinity;
                priorityQueue.enqueue(key, Infinity)
            }

            previous[key] = null;
        };

        while(priorityQueue.values.length > 0){
            let smallest = priorityQueue.dequeue().val;
            
            if(smallest === end){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                console.log(path.reverse())
                return path.reverse();
            }

            if(smallest || this.adjacencyList[smallest] !== Infinity){
                for(let vertex of this.adjacencyList[smallest]){
                    console.log(vertex)
                    let candidate = distances[smallest] + vertex.weight;
                    if (candidate < distances[vertex.node]){
                        distances[vertex.node] = candidate;
                        previous[vertex.node] = smallest;
                        priorityQueue.enqueue(vertex.node, candidate);
                    }
                }

            }

            
        }

        console.log(distances, previous, priorityQueue.values)
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    }

    dequeue(){
        return this.values.shift();
    }

    
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.findShortest('A', 'E');