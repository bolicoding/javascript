function headingGenerator (title, type) {
  return `<h${type}>${title}</h${type}>`;
}

headingGenerator('Hello', 1)



headingGenerator = (title, type) => {
  return `<h${type}>${title}</h${type}>`;
}

headingGenerator('Hi', 2)