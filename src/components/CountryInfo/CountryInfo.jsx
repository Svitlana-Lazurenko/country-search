import { Link, useLocation } from 'react-router-dom';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
  Button,
} from './CountryInfo.styled';

export const CountryInfo = ({
  flag,
  capital,
  country,
  id,
  languages = [],
  population,
}) => {
  const location = useLocation();

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>
        <Button type="button">Back</Button>
      </Link>
      <CountryWrapper key={id}>
        <Flag>
          <Image src={flag} alt={country} />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Capital: <Accent>{capital}</Accent>
          </CountryCapital>

          <CountryTitle>{country}</CountryTitle>

          <CountryDetail>
            Population: <Accent>{population}</Accent>
          </CountryDetail>

          <CountryDetail>
            Languages: <Accent>{languages.join(', ')}</Accent>
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
    </>
  );
};
