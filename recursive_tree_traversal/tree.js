'use strict';

// a tree to be climbed.
module.exports = {
  root : {
    name : 'Bjorn',
    age : 28,
    has_parent : null,
    is_leaf : false,
    has_children : true,
    children : [{
      name : 'Manny',
      age : 22,
      has_parent : true,
      is_leaf : false,
      has_children : true,
      children : [{
            name : 'Spencer Toyama',
            age : 28,
            has_parent : false,
            is_leaf : true,
            has_children : false,
            children : []
          }, {
            name : 'Shannon',
            age : 65,
            has_parent : true,
            is_leaf : false,
            has_children : true,
            children : [{
              name : 'Kingtak',
              age : 302,
              has_parent : true,
              is_leaf : false,
              has_children : true,
              children : [{
                name : 'Wray',
                age : 1337,
                has_parent : true,
                is_leaf : false,
                has_children : true,
                children : [{
                  name : 'Edgar Allan Poe',
                  age : 560,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                }, {
                  name : 'Albert Einstein',
                  age : 91,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                } ]
              }, {
                name : 'Nikola Tesla',
                age : 16,
                has_parent : true,
                is_leaf : true,
                has_children : false,
                children : []
              }]
            }, {
              name : 'Peter',
              age : 36,
              has_parent : true,
              is_leaf : false,
              has_children : true,
              children : [{
                name : 'Garfield The Cat',
                age : 783,
                has_parent : true,
                is_leaf : true,
                has_children : false,
                children : []
              }, {
                name : 'Cortney',
                age : 243,
                has_parent : true,
                is_leaf : false,
                has_children : true,
                children : [{
                  name : 'Brian',
                  age : 32,
                  has_parent : true,
                  is_leaf : false,
                  has_children : true,
                  children : [{
                    name : 'Eylem',
                    age : 24,
                    has_parent : true,
                    is_leaf : false,
                    has_children : true,
                    children : [{
                      name : 'Milton S. Hershey',
                      age : 8008,
                      has_parent : true,
                      is_leaf : true,
                      has_children : false,
                      children : []
                    }]
                  }, {
                    name : 'Albert',
                    age : 87,
                    has_parent : true,
                    is_leaf : false,
                    has_children : true,
                    children : [{
                      name : 'Charles',
                      age : 0,
                      has_parent : true,
                      is_leaf : false,
                      has_children : true,
                      children : [{
                        name : 'Gene Shoemaker',
                        age : 62,
                        has_parent : true,
                        is_leaf : true,
                        has_children : false,
                        children : []
                      }]
                    }, {
                      name : 'Neil deGrasse Tyson',
                      age : 65,
                      has_parent : true,
                      is_leaf : true,
                      has_children : false,
                      children : []
                    }]
                  }]
                }, {
                  name : 'Carl Sagan',
                  age : 23,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                }]
              }, {
                name : 'Mark',
                age : 100,
                has_parent : true,
                is_leaf : false,
                has_children : true,
                children : [{
                  name : 'Marty McFly',
                  age : 43,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                }, {
                  name : 'Jayson',
                  age : 817,
                  has_parent : true,
                  is_leaf : false,
                  has_children : true,
                  children : [{
                    name : 'Bill Nye',
                    age : 13,
                    has_parent : true,
                    is_leaf : true,
                    has_children : false,
                    children : []
                  }, {
                    name : 'Ann Druyan',
                    age : 914,
                    has_parent : true,
                    is_leaf : true,
                    has_children : false,
                    children : []
                  }, {
                    name : 'Jon Stewart',
                    age : 841,
                    has_parent : true,
                    is_leaf : true,
                    has_children : false,
                    children : []
                  }]
                }, {
                  name : 'Aaron Turner',
                  age : 33,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                }]
              }]
            }]
          }, {
            name : 'Mary',
            age : 910,
            has_parent : true,
            is_leaf : false,
            has_children : true,
            children : [{
              name : 'Stevie',
              age : 66,
              has_parent : true,
              is_leaf : false,
              has_children : true,
              children : [{
                name : 'Michelle',
                age : 22,
                has_parent : true,
                is_leaf : false,
                has_children : true,
                children : [{
                  name : 'Douglas Crockford',
                  age : 88,
                  has_parent : true,
                  is_leaf : true,
                  has_children : false,
                  children : []
                }]
              }]
            }]
          }
      ]
    },
    {
      name : 'Victor Von Doom',
      age : 500,
      has_parent : true,
      is_leaf : true,
      has_children : false,
      children : []
    }
  ]
  }
};

/*
         ,.,
        MMMM_    ,..,
          "_ "__"MMMMM          ,...,,
   ,..., __." --"    ,.,     _-"MMMMMMM
  MMMMMM"___ "_._   MMM"_."" _ """"""
   """""    "" , \_.   "_. ."
          ,., _"__ \__./ ."
         MMMMM_"  "_    ./
          ''''      (    )
   ._______________.-'____"---._.
    \                          /
     \________________________/
     (_)                    (_)

    leaves yellow and red
float downward toward the earth
      rest in my bonsai
*/