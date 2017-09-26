var Human, a, kek, new_human;

kek = function() {
  return console.log('KEKss');
};

a = {};

kek();

Human = (function() {
  function Human(name) {
    this.name = name;
  }

  Human.prototype.method = function() {
    return console.log(this.name);
  };

  return Human;

})();

new_human = new Human('Kek');
