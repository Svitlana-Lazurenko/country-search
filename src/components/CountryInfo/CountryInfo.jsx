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
  console.log(location);
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>
        <button type="button">Back</button>
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
