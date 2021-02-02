export default class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}

  toString(callback: ((v: T) => string) | undefined = undefined) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
