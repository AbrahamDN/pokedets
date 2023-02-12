const getIdFromUrl = (url: URL | string) => {
  const getId = /pokemon(.*)\//.exec(url as string);
  const id = getId !== null ? getId[1].match(/\d+/g) : null;

  return id ? parseInt(id[0]) : null;
};

export default getIdFromUrl;
