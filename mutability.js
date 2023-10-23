
  
  const clone1 = Object.assign({}, person);
  const clone2 = Object.assign({}, person);
  const samePerson = person;
  
  person.age++;
  person.country = 'FR';
  
  console.log('person:', person);
  console.log('clone1:', clone1);
  console.log('clone2:', clone2);
  console.log('samePerson:', samePerson);
  