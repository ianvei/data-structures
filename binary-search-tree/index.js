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

}

const tree = new BinarySearchTree();

// tree.root = new Node(10);

// tree.root.left = new Node(6);
// tree.root.right = new Node(15);
// tree.root.right.right = new Node(20);

// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(8);
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(8);
tree.insert(15);
tree.insert(3);

tree.insert(20);
tree.insert(13);
tree.insert(25);
tree.insert(22);
tree.insert(1);
tree.insert(2);
tree.insert(2);
// tree.insert(8);
console.log(tree);
// console.log(tree);