import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { itemDetailsDatasource } from '../../datasource/meli.datasource';

export default () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const searchDatasourceRes = await itemDetailsDatasource(id);

      setDetails(searchDatasourceRes.data.items);
      setIsLoading(false);
    }
    if (id) {
      fetchData();
    }
  });

  if (isLoading) {
    return <>Loading</>;
  }

  return <>ITEM DETAILS</>;
};
