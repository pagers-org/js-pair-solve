class List {
  listSize = 0;

  pos = 0;

  dataStore = [];

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }

    return false;
  }

  contains(element) {
    for (let index = 0; index < this.dataStore.length; ++index) {
      if (this.dataStore[index] === element) {
        return true;
      }
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }
}

const names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
print(names.toString());
names.remove('Raymond');
print(names.toString());

//

// 정방향
for (names.front(); names.currPos() < names.length(); names.next()) {
  print(names.getElement());
}

// 역방향
for (names.end(); names.currPos() >= 0; names.prev()) {
  print(names.getElement());
}
