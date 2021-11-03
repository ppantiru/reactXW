import useFetch from './useFetch';
var parseString = require('xml2js').parseString;

const XMLPage = (props) => {
  const [data] = useFetch(props.xmlLocation);
  const pageContent = `${data}`;
  const xml = pageContent;
  var title = '';
  var author = ''
  parseString(xml, function (err, result) {
    console.dir(result.page.title[0]);
    title = result.page.title[0];
    author = result.page.author[0]
  });
  return `${author}`;
};

export {XMLPage}
