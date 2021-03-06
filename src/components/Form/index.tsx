import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BrandSelect from '../BrandSelect';
import ModelSelect from '../ModelSelect';
import VehicleProvider from '../../VehicleContext';
import YearSelect from '../YearSelect';
import VersionSelect from '../VersionSelect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%'
    },
    paperCard: {
      padding: theme.spacing(3, 1)
    },
    marginButton: {
      padding: theme.spacing(2, 0)
    }
  })
);

const Form: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <VehicleProvider>
      <Grid container spacing={3} justify="center">
        <Paper variant="outlined" elevation={3} className={classes.paperCard}>
          <Grid item container xs={12}>
            <Grid item xs={12} md={12}>
              <p>Selecione marca, modelo, ano e versão do veículo:</p>
            </Grid>
            <Grid item container xs={12} md={12} justify="space-evenly">
              <Grid item xs={8} md={4}>
                <FormControl className={classes.formControl}>
                  <BrandSelect />
                </FormControl>
              </Grid>
              <Grid item xs={8} md={4}>
                <FormControl className={classes.formControl}>
                  <ModelSelect />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={12} justify="space-evenly">
              <Grid item xs={8} md={4}>
                <FormControl className={classes.formControl}>
                  <YearSelect />
                </FormControl>
              </Grid>
              <Grid item xs={8} md={4}>
                <FormControl className={classes.formControl}>
                  <VersionSelect />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={8} md={4}>
              <FormControl className={classes.formControl}>
                <TextField id="name" label="Nome" />
              </FormControl>
            </Grid>
            <Grid item xs={8} md={4}>
              <FormControl className={classes.formControl}>
                <TextField id="email" label="E-mail" />
              </FormControl>
            </Grid>
            <Grid item container xs={12} md={12} justify="center">
              <Grid
                item
                container
                xs={8}
                md={8}
                direction="column"
                className={classes.marginButton}
              >
                <Button variant="contained" color="primary" disabled={true}>
                  Consultar preço
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </VehicleProvider>
  );
};

export default Form;
