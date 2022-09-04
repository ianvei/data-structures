class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            console.log(this.root)
            return this;
        }

        let currentNode = this.root;
        let flag = true;

        while(flag){
            if(val === currentNode.val){
                flag = false;
                return undefined
            }
            if(val > currentNode.val){
                if(!currentNode.right){
                    currentNode.right = newNode
                    // console.log(tree)
                    flag = false;
                    return tree
                }
                currentNode = currentNode.right
            } else {
                if(val < currentNode.val){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        // console.log(tree)
                        flag = false;
                        return tree
                    }
                    currentNode = currentNode.left
                }
            }
        }
        flag = false;
        return tree
    }    

    find(val){

        let currentNode = this.root;
        let flag = true;

        while(flag){
            if(val === currentNode.val){
                flag = false;
                console.log(currentNode)
                return true
            }
            if(val > currentNode.val){
                if(!currentNode.right){
                    console.log('nope')
                    flag = false;
                    return undefined
                }
                currentNode = currentNode.right
            } else {
                if(val < currentNode.val){
                    if(!currentNode.left){
                        console.log('nope')
                        flag = false;
                        return undefined
                    }
                    currentNode = currentNode.left
                }
            }
        }
        flag = false;
        return tree
    }

    bfs(){
        let visited = [];
        let queue = [];
        let node = this.root;
        queue.push(node); 

        while(queue.length){
            node = queue.shift();
            visited.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }

        console.log(visited);
        return visited;
    }

    dfsPreOrder(){
        const values = [];
        let current = this.root;
        const helper = (node) => {
            if(!node.val){
                return null;
            }
            values.push(node.val);
            
            if(node.left){
                current = node.left;
                helper(current);
            }
            if(node.right){
                current = node.right;
                helper(current);
            }
            
            return values;
        }
        helper(current);
        console.log(values);
        return values;
    }

    dfsPostOrder(){
        const values = [];
        let current = this.root;
        const helper = (node) => {
            if(!node.val){
                return null;
            }
            if(node.left){
                current = node.left;
                helper(current);
            }
            if(node.right){
                current = node.right;
                helper(current);
            }
            values.push(node.val);
            return values;
        }
        helper(current);
        console.log(values);
        return values;
    }

    dfsInOrder(){
        const values = [];
        let current = this.root;
        const helper = (node) => {
            if(!node.val){
                return null;
            }
            if(node.left){
                current = node.left;
                helper(current);
            }
            values.push(node.val);
            if(node.right){
                current = node.right;
                helper(current);
            }
            
            return values;
        }
        helper(current);
        console.log(values);
        return values;
    }

}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
 
tree.dfsInOrder();
console.log(tree);
