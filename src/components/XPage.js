import useFetch from './useFetch';
import parse, { domToReact } from 'html-react-parser';
import { Link, useParams } from 'react-router-dom'

const XPage = () => {
  const {space, page} = useParams()
  const [data] = useFetch(`/xwiki/bin/get/${space}/${page ? page : 'WebHome'}`);
  const pageContent = data;
  return parseWithLinks(`${pageContent}`);
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

export {XPage}
