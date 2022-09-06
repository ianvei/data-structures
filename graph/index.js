class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(key){
        if(!this.adjacencyList[key]){
            this.adjacencyList[key] = [];
        }
        console.log(this.adjacencyList);
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        // console.log(this.adjacencyList[vertex1]);
        this.adjacencyList[vertex2].push(vertex1);
        console.log(this.adjacencyList);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((element) => element !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((element) => element !== vertex1);
        console.log(this.adjacencyList)
    }

    removeVertex(vertex){
        for(let vert of this.adjacencyList[vertex]){
            this.adjacencyList[vert] = this.adjacencyList[vert].filter((item) => item !== vertex);
        }

        delete this.adjacencyList[vertex];
        console.log(this.adjacencyList)
    }
}

let graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addVertex('Toronto');
graph.addEdge('Tokyo', 'Aspen')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Dallas', "Aspen")
graph.addEdge('Toronto', "Aspen")
graph.addEdge('Toronto', "Tokyo")
graph.removeVertex("Tokyo")
// graph.removeEdge('Tokyo', 'Aspen')
// graph.removeEdge('Tokyo', 'Dallas')
