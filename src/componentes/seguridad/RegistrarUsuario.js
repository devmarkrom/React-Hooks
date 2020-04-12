import React, { Component } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  submit: {
    marginTop: 15,
    marginBottom: 20,
  },
};

class RegistrarUSuario extends Component {
  state = {
    usuario: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
  };

  onChange = (e) => {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario,
    });
  };

  RegistrarUSuario = (e) => {
    e.preventDefault();
    console.log("usuario del state:", this.state.usuario);
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su Cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="nombre"
                  value={this.state.usuario.nombre}
                  onChange={this.onChange}
                  fullWidth
                  label="Ingrese su nombre"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.usuario.apellido}
                  name="apellido"
                  fullWidth
                  label="Ingresa tus apellidos"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  onChange={this.onChange}
                  value={this.state.usuario.email}
                  fullWidth
                  label="Ingrese su e-mail"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  onChange={this.onChange}
                  value={this.state.usuario.password}
                  type="password"
                  name="password"
                  fullWidth
                  label="Ingrese su password"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} med={6}>
                <Button
                  onClick={this.RegistrarUSuario}
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  color="primary"
                  style={style.submit}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default RegistrarUSuario;
