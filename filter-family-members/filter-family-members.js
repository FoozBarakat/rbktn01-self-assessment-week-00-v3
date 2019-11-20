console.log('test');
// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          //'location': 'Beijing',
          'location': 'Berkeley',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};
//
var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  var result = [];
  
  for (var key in familyTree['children']) {

  	//console.log( familyTree['children'][key] )
  	if (truthTest(familyTree['children'][key]) === true) {
  		var name = familyTree['children'][key]['firstName'] + " " + familyTree['children'][key]['lastName'];
  		result.push(name);
  	}
  	// delete familyTree['children'][key];
  	// console.log(familyTree['children']);
  	// console.log( familyTree['children'].length);
  }

  // if (familyTree['children'].length === 0) {
  // 	return result;
  // }

  return result;

  // return filterFamilyMembers(familyTree, livesInBerkeley);
};

console.log( filterFamilyMembers(familyTree, livesInBerkeley) );

