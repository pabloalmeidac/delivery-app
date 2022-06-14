import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyPaper = styled(Paper)(() => ({
}));

export const PaperEdited = styled(MyPaper)(() => ({
  maxWidth: 400,
  marginTop: '2rem',
  padding: '2rem',
  mr: 2,
}));

const MyButton = styled(Button)(() => ({
}));

export const ButtonEdited = styled(MyButton)(() => ({
  display: 'block',
  padding: '10px',
  margin: 'auto',
}));

export function GridEdited({ children }) {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={ { minHeight: '100vh' } }
    >
      { children }
    </Grid>
  );
}

GridEdited.propTypes = {
  children: PropTypes.element.isRequired,
};

// export function ContainerCheckout({ children }) {
//   return (
//     <Container
//       container
//       spacing={ 0 }
//       direction="column"
//       alignItems="center"
//       justifyContent="center"
//       style={ { minHeight: '100vh' } }
//     >
//       { children }    
//     </Container>
//   );
// }

// ContainerCheckout.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export function ContainerCheckoutItems({ children }) {
  return (
    <Container
      sx={{
        backgroundColor: 'green',
        width: '200px',
        height: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        mr: 0,
        mt: 1,
      }}
    >
      { children }    
    </Container>
  );
}

ContainerCheckoutItems.propTypes = {
  children: PropTypes.element.isRequired,
};