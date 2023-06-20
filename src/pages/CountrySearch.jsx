import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const region = searchParams.get('region') ?? '';

  const fetchData = async () => {
    try {
      const data = await fetchByRegion(region);
      setCountries(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (region === '') return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [region]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ region: value });
    setLoading(true);
    if (region === '') return;
    fetchData();
  };

  const onChange = e => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} onChange={onChange} />
        {loading && <Loader />}
        {error && <Heading>{error.message}</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
