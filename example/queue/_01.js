class Queue {
  constructor() {
    this.items = [];
  }

  // 큐에 요소를 추가합니다.
  enqueue(element) {
    this.items.push(element);
  }

  // 큐에서 요소를 제거하고 반환합니다.
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.items.shift();
  }

  // 큐의 첫 번째 요소를 반환하되, 큐에서 제거하지는 않습니다.
  front() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.items[0];
  }

  // 큐가 비어있는지 확인합니다.
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐의 크기(요소의 개수)를 반환합니다.
  size() {
    return this.items.length;
  }

  // 큐의 모든 요소를 문자열로 반환합니다.
  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i]} `;
    }
    return str;
  }
}

// 큐 테스트
const queue = new Queue();
console.log(queue.isEmpty()); // 출력: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.printQueue()); // 출력: 10 20 30 40
console.log(queue.size()); // 출력: 4
console.log(queue.isEmpty()); // 출력: false
console.log(queue.dequeue()); // 출력: 10
console.log(queue.front()); // 출력: 20
console.log(queue.printQueue()); // 출력: 20 30 40
