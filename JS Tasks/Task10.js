/*
Imagine you’re creating a circular list of players in a game. After the last player’s turn, the next player is the first one again, ensuring continuous gameplay without restarting or ending the list traversal. Circular linked lists help maintain this type of behavior seamlessly
*/
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Function to add a node
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        // If the list is empty, point the head to the new node and make it circular
        this.head = newNode;
        this.head.next = this.head;
      } else {
        // Otherwise, find the last node
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        // Point the last node to the new node and the new node back to the head
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    // Function to remove a node by value
    remove(value) {
      if (!this.head) return; // List is empty
  
      // Handle removal of the head node
      if (this.head.value === value) {
        // If there is only one node
        if (this.head.next === this.head) {
          this.head = null;
          return;
        }
  
        // Find the last node
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        // Remove the head node and update the head
        current.next = this.head.next;
        this.head = this.head.next;
        return;
      }
  
      // Handle removal of non-head nodes
      let current = this.head;
      while (current.next !== this.head && current.next.value !== value) {
        current = current.next;
      }
  
      // If we found the node to remove
      if (current.next.value === value) {
        current.next = current.next.next;
      }
    }
  
    // Function to traverse the list and log each node
    traverse() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.value);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Example usage
  const list = new CircularLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  console.log("Traversing list:");
  list.traverse(); // Should print 1, 2, 3
  
  console.log("Removing 2:");
  list.remove(2);
  list.traverse(); // Should print 1, 3
  
  console.log("Removing 1 (head):");
  list.remove(1);
  list.traverse(); // Should print 3
  