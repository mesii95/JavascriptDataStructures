class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        }

    add(data, index){
        if(index == null){
            if(this.size === 0){
                _addToEmpty(this, data);
            }else{
                _addAfterTail(this, data);
            }
        }else {
            if(index >= this.size) { return false; }
            if(this.isEmpty === true) { _addToEmpty(this, data) };
            if(this.size === 1 && index === 0) { _insertFirstIndex(this, data); }

            if(index == this.size-1){
                _insertLastIndex(this, data);
            }
            else if(index == 0){
                _insertFirstIndex(this, data);
            }
            else {
                _insert(this, data, index);
            }
        }
        this.size++;
        return true;
    }
    
    addAll(){
        
    }

    remove(){
        let removed = null;
        switch(this.size){
            case 0:
                break;
            case 1:
                removed = this.head;
                this.head = null;
                this.tail = null;
                this.size--;
                break;
            default:
                removed = this.head;
                this.head.next.setPrev(null);
                this.head = this.head.next;
                this.size--;                
                break;
        }
        return removed;
    }

    isEmpty(){
        return this.size == 0;
    }

    getTail(){
        return this.tail;
    }
    
    getHead(){
        return this.head;
    }
    
    get(index){
        if(typeof index != 'number'){ return null; }
        let n = this.head;

        for(let i=0; i<index; i++){
            n = this.next;
        }
        
        return n;
    }
    

}

function _insertLastIndex(self, data){
    let n = self.get(self.size-1);
    let newNode = new Node(n, n.previous, data);
    n.previous.setNext(newNode);
    n.setPrev() = newNode;
}

function _insertFirstIndex(self, data){
    let n = self.get(0);
    let newNode = new Node(n, null, data);
    n.setPrev(newNode);
    self.head = newNode;
}

function _insert(self, data, index){
    let n1 = self.get(index);
    let n2 = n1.previous;
    let newNode = new Node(n1, n2, data);
    n1.setPrev(newNode);
    n2.setNext(newNode);
}

function _addToEmpty(self, data){
    self.head = new Node(null, null, data);
    self.tail = self.head;
}

function _addAfterTail(self, data){
    let n = new Node(null, self.tail, data);
    self.tail.setNext(n);
    self.tail = self.tail.next;
}

class Node {

    constructor(next, previous, data){
        if(!next instanceof Node || !next === null) { return null; }
        if(!previous instanceof Node || !previous === null){ return null; }
        
        this.previous = previous;
        this.next = next;
        this.data = data;
    }

    setNext(next){
        if(!next instanceof Node || !next === null){ return null}
        this.next = next;
    }
    
    setPrev(previous){
        if(!previous instanceof Node || !previous === null){ return null}
        this.previous = previous
    }
    
    getNext(){
        return this.next;
    }

    getPrev(){
        return this.previous;
    }
    
    getData(){
        return this.data;
    }
}