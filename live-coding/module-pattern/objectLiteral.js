const myPerson = {
  _name: 'Joe',
  favColor: 'Green',
  getName: function(){
    console.log(this.name)
  },
};
myPerson.age = 123123890123

console.log('myPerson.name: ', myPerson.name);