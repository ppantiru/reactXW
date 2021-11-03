const usePathGen = (base, spaces, page, rest) => {
  let url = base;
  let leaf = '';
  let spaceList = [];
  `${page}` === '' ? leaf = 'WebHome' : leaf = page

  if(rest){
    spaceList = spaces.map((space) => `spaces/${space}/`);
  }else{
    spaceList = spaces.map((space) => `${space}/`);
  }
  var spaceJam = '';
  spaceList.forEach(element => {
    spaceJam = spaceJam + element;
  });
  url = url + spaceJam + 'pages/' +leaf;
  return [url];
};

export default usePathGen;
