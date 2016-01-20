describe('encrypt', function(message) {

  it("will downcase a sentence", function() {
    expect(encrypt("Hello")).to.equal("hello");
  });

  it("will replace every non-alphabet character with nothing", function(){
    expect(encrypt("hello...")).to.equal("hello");
  });

  it("will remove all unaccounted for spacing.", function(){
    expect(encrypt("hello world")).to.equal("helloworld");
  });

});
