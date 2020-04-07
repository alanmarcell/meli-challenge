import React, { useContext } from 'react';
import { searchDatasource } from '../../datasource/meli.datasource';
import RouteContext from '../../routes/RouteContext';

export default () => {
  const { urlSearchParam } = useContext(RouteContext);

  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const searchDatasourceRes = await searchDatasource(urlSearchParam);

      setResults(searchDatasourceRes.data.items);
      setIsLoading(false);
    }
    if (urlSearchParam) {
      fetchData();
    }
  }, [urlSearchParam]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      {results.map((a) => (
        <div key={a.id}>{a.title}</div>
      ))}
    </>
  );
};
