var shopping_cart = [];

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(cart);
  set_cart_total_dom(total);
  update_shipping_icons(cart);
  update_tax_dom(total);
}

function delete_hander(name) {
  shopping_cart = remove_item_by_name(shopping_cart, name);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

function set_cart_total_dom(total) {
  //...
  total;
  //...
}

function update_shipping_icons(cart) {
  var buttons = get_buy_buttons_dom();
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;
    var hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  }
}

function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}

function set_free_shipping_icon(button, isShown) {
  if (isShown) button.show_free_shipping_icon();
  else button.hide_free_shipping_icon();
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

function remove_item_by_name(cart, name) {
  let new_cart = cart.slice();
  let idx = null;
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) {
      idx = i;
    }
  }
  if (idx !== null) {
    new_cart.splice(idx, 1);
  }
  return new_cart;
}

function add_element_last(cart, item) {
  var new_cart = cart.slice();
  new_cart.push(item);

  return new_cart;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}

function make_cart_item(name, price) {
  return {
    name,
    price,
  };
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}

function calc_tax(amount) {
  return amount * 0.1;
}
