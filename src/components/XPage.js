import useFetch from './useFetch';
import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom'

const XPage = (props) => {
  const [data] = useFetch(props.location);
  return parseWithLinks(`${data}`);
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
