export default class Section {
  constructor({ items, renderer }, elementsList)  {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(elementsList);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
