describe('angularjs homepage', function() {
  it('should greet the named user', function() {   

    var greeting = element(by.binding('item.name'));

    expect(greeting.getText()).toEqual('Name 1');
  });
});