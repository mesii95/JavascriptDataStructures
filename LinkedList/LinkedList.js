class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data, index){
        if(typeof index == 'number'){
            if(this.size === 0){
                this.head = new Node(null, null, data);
                this.tail = this.head;
                this.size++;
            }else{
                let n = new Node(null, this.tail, data);
                this.tail.setNext(n);
                this.tail = this.tail.next;
                this.size++;
            }
        }else {
            if(index >= this.size) { return null; }
            
            if(index == this.size -1){
                n = this.get(index);
                newNode = Node(n, n.previous, data);
    
                n.previous.setNext() = newNode;
                n.setPrev() = newNode;
            }
            else if(index == 0){
                // TODO
            }
            else {
                // TODO
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

    getTail(){
        return this.tail;
    }
    
    getHead(){
        return this.head;
    }
    
    get(index){
        if(typeof index != 'number'){ return null; }
        let n = null;

        for(let i=0; i<=index; i++){
            n = this.data.next;
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