function Hello(name) {
  if(typeof name == 'string') {
    return <h1>Hello, {name}</h1>;
  }
  return <h1>Who are you?</h1>;
}

function Names(names) {
  const list = [];
  for (let i = 0; i < names.length; i++) {
    list.push(<li>{names[i]}</li>);
  }
  return <ul>{lists}</li>;
}

function wrap(component) {
  return <div>{component}</div>;
}

wrap(<h1>Hello, World</h1>);
