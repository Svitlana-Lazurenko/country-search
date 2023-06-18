import { Link } from 'react-router-dom';
import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <>
      <Grid>
        {countries.map(({ id, country, flag }) => {
          return (
            <GridItem key={id}>
              <Link to={`/country/${id}`}>
                <img src={flag} alt={country} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
