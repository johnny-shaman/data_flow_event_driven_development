class EventDriver {
  on (k, o) {
    this.target.addEventListener(k, this, o);
    return this;
  }
  off (k) {
    this.target.removeEventListener(k, this);
    return this;
  }
  drive (k, n) {
    this.target.dataset[k] = n;
    return this;
  }
  driven (k) {
    return this.target.dataset[k] || k;
  }
  free (k) {
    delete this.target.dataset[k];
    return this;
  }
  handleEvent (e) {
    this[this.driven(e.type)](e);
  }
}
