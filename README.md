# data_flow_event_driven_development
data_flow_event_driven_development

## Usage

~~~javascript
class MyTarget extends EventDriver {
  constructor () {
    super();
    this.foo = "foo";
    this.bar = "bar";
    this.baz = "baz";
    this.target = document.getElementById("myButton");
    this
    .drive("click", "sayFoo")
    .on("click", false);
  }
  sayFoo (e) {
    alert(this.foo);
    this.drive("click", "sayBar");
  }
  sayBar (e) {
    alert(this.bar);
    this.drive("click", "sayBaz");
  }
  sayBaz (e) {
    alert(this.baz);
    this.free("click");
  }
  click (e) {
    alert("Once More!");
    this.drive("click", "sayFoo");
  }
}
~~~