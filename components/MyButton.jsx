var React = require('react');

var MyButton = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>{listItem}</li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.onClick}>增加新菜单</button>
  </div>;
};

module.exports = MyButton;
