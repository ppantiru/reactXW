import useFetch from './useFetch';
import { useParams } from 'react-router-dom';
const dom = require('xmldom').DOMParser
const xpath = require('xpath')

const XMLPage = (props) => {
  const {space, page} = useParams()
  const [data] = useFetch(`/xwiki/bin/get/${space}/${page ? page : 'WebHome'}?xpage=xml`);
  const pageContent = `${data}`;
  const xml = new dom().parseFromString(pageContent);
  const node = xpath.select(`//${props.title}`, xml);
  return `${node.length < 1 ? '' : node[0].textContent}`;
};

export {XMLPage}
