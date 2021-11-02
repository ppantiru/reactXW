import useFetch from './useFetch';
import parse, { domToReact } from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
const dom = require('xmldom').DOMParser
const xpath = require('xpath')

const XMLPage = () => {
  const [nodevalue, setNodeValue] = useState('');
  const {space, page} = useParams()
  const [data] = useFetch(`/xwiki/bin/get/${space}/${page ? page : 'WebHome'}?xpage=xml`);
  const pageContent = `${data}`;
const xml = new dom().parseFromString(pageContent);
const node = xpath.select(`//title`, xml);
  return `${node.length < 1 ? '' : node[0].textContent}`;
};

  function parseWithLinks(text) {
    const options = {
      replace: ({ name, attribs, children }) => {
        if (name === 'a' && attribs.href) {
          return <Link to={attribs.href}>{domToReact(children)}</Link>;
        }
      }
    };
        
    return parse(text, options);
  }

export {XMLPage}
