import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountry(countryId);

        setCountry(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countryId]);

  const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading>{error.message}</Heading>}
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
