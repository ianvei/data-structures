class Graph{
    constructor(){
        this.adjacencyList = {};
        this.visited = {}
    }

    addVertex(key){
        if(!this.adjacencyList[key]){
            this.adjacencyList[key] = [];
        }
        console.log(this.adjacencyList);
    }

    generateVisited(){
        for(let vert in this.adjacencyList){
            this.visited[vert] = false;
        }
        console.log(this.visited)
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

    depthFirstRecursive(vertex){
        this.generateVisited();
        let adjacentNodes = [];

        const depthFirstHelper = (vertex) => {
            if(!vertex){
                return;
            }
            adjacentNodes.push(vertex)
            this.visited[vertex] = true;
            for(let vert of this.adjacencyList[vertex]){
                    if(!this.visited[vert]){
                        depthFirstHelper(vert);
                    }
            }   
        }
        depthFirstHelper(vertex);
        console.log(adjacentNodes)
        return adjacentNodes
    }

    depthFirstIterative(start){
        let stack = []
        let result = []
        stack.push(start);
        
        while(stack.length > 0){
            let currentVert = stack.pop();
            if(!this.visited[currentVert]){
                this.visited[currentVert] = true;
                result.push(currentVert)
                for(let vert of this.adjacencyList[currentVert]){
                    stack.push(vert)
                }
            }

        }
        console.log(result)
    }

    breadthFirst(start){
        let stack = []
        let result = []
        stack.push(start);
        let currentVert = start;
        while(stack.length > 0){
            currentVert = stack.shift()
            if(!this.visited[currentVert]){
                this.visited[currentVert] = true;
                result.push(currentVert)
                for(let vert of this.adjacencyList[currentVert]){
                    stack.push(vert)
                }
            }
            
            
        }
        console.log(result);
    }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', "D")
graph.addEdge('C', "E")
graph.addEdge('D', "E")
graph.addEdge('D', "F")
graph.addEdge('E', "F")
// graph.generateVisited();
// graph.depthFirst('A');
graph.breadthFirst("A");

// graph.removeVertex("Tokyo")
// graph.removeEdge('Tokyo', 'Aspen')
// graph.removeEdge('Tokyo', 'Dallas')
