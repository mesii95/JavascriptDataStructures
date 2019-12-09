class Stack {

    /**
     * Creates a Stack object
     */
    constructor(){
        this.data = [];
        this.size = 0;
    }

    /**
     * Add an element to the top of the Stack.
     * @param {*} dataElement
     * @returns {*} The data element pushed to this stack, or null if
     * nothing was pushed.
     */
    push(dataElement){
        if(dataElement === null){ return null; }
        
        // push returns the new length
        this.size = this.data.push(dataElement)
        this.size++;
        return dataElement;
    }

    /**
     * Add an Array of elements to the Stack
     * @param Array allElements
     * @returns the input array, or null
     */
    pushAll(allElements){
        if(!allElements.constructor === Array){ return null; }
        
        for(var e of allElements){
            this.data.push(e)
            this.size++;
        }
        return allElements;
    }

    /**
     * Removes an element from the end of the Stack
     * @returns {*} The data element that was removed from the stack.
     */
    pop(){
        if(this.length == 0){ return null; }
        this.size--;
        return this.data.pop();
    }

    /**
     * Looks at the element at the top of the stack, but does not remove it.
     * @returns {*} The element at the top of the stack.
     */
    peek(){
        if(this.data.length === 0) { return null; }
        return this.data[this.data.length - 1]
    }

    /**
     * Test if the stack is empty
     * @returns true if the stack is empty
     */
    emtpy(){
        return this.data.length === 0;
    }

    /**
     * @returns The size of the Stack
     */
    size(){
        return this.size;
    }
}