class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        this._insertLastIndex = function(data){
                let n = this.get(this.size-1);
                let newNode = new Node(n, n.previous, data);
                n.previous.setNext(newNode);
                n.setPrev() = newNode;
                this.size++;
            };
        this._insertFirstIndex = function(data){
                let n = this.get(0);
                let newNode = new Node(n, null, data);
                n.setPrev(newNode);
                this.head = newNode;
                this.size++;
            };
        this._insert = function(data, index){
                let n1 = this.get(index);
                let n2 = n1.previous;
                let newNode = new Node(n1, n2, data);
                n1.setPrev(newNode);
                n2.setNext(newNode);
            };
        this._addToEmpty = function(data){
                this.head = new Node(null, null, data);
                this.tail = this.head;
                this.size++;
            };
        this._addAfterTail = function(data){
                let n = new Node(null, this.tail, data);
                this.tail.setNext(n);
                this.tail = this.tail.next;
                this.size++;
            };
        }

    add(data, index){
        if(index == null){
            if(this.size === 0){
                this._addToEmpty(data);
            }else{
                this._addAfterTail(data);
            }
        }else {
            if(index >= this.size) { return null; }
            if(this.isEmpty === true) { this._addToEmpty(data) };
            if(this.size === 1 && index === 0) { this._insertFirstIndex(data); }

            if(index == this.size-1){
                this._insertLastIndex(data);
            }
            else if(index == 0){
                this._insertFirstIndex(data);
            }
            else {
                this._insert(data, index);
            }
        }
        return(data);
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