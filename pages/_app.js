import React from 'react';
import App, { Container } from 'next/app';
import Cookies from 'universal-cookie';
import NavBar from '../src/components/NavBar';
import { QtyProvider } from "../src/components/contexts/QtyContext"
import { UserProvider } from "../src/components/contexts/UserContext";
import AuthServices from '../src/services/AuthServices';
import '../src/index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import 'antd/dist/antd.css'; 
import Footer from '../src/components/Footer';

class MyApp extends App {
  state = {
    loggedInUser: "",
    islogged: "",
    error: null,
    details: '',
    clientAddress: '',
    getQty: this.getQty(),
  }

  getUser = (user) => {
    this.setState({
      loggedInUser: user,
      islogged: true,
    });
  }

  checkLogged() {
    AuthServices.loggedin()
      .then(res => {
        this.setState({ islogged: true, loggedInUser: res.data });
      })
      .catch(e => {
        this.setState({ islogged: false });
        console.log(e);
      });
  };

  bye = () => {
    if (this.state.islogged) {
      this.setState({
        loggedInUser: {},
        islogged: false
      })
    } else {
      console.log("already logged out");
    }
  }

  componentDidMount = () => {
    this.checkLogged();
  }

  getQty() {
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");

    let total = 0;
    if (cookieArr === undefined) {
      return;
    } else {
      for (let i = 0; i < cookieArr.length; i++) {
        total += cookieArr[i].qty;
      }
    }
    return total;
  }

  updateQty = () => {
    this.setState({
      getQty: this.getQty()
    });
  }

  getAddress = (address) => {
    this.setState({
      clientAddress: address
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    if (this.state.islogged === "") {
      return (
        <Container>
          <div>loading...</div>
        </Container>
      );
    } else {
      return (
        <Container>
          <QtyProvider value={{ getQtyState: this.state.getQty, updateQty: this.updateQty }}>
            <NavBar islogged={this.state.islogged} checklogged={this.checkLogged} logout={this.bye} user={this.state.loggedInUser}></NavBar>
            <UserProvider value={{ user: this.state.loggedInUser, islogged: this.state.islogged, setAddress: this.getAddress, address: this.state.clientAddress }}>
              <Component {...pageProps} giveuser={this.getUser} signout={this.bye} checklogged={this.checkLogged} user={this.state.loggedInUser} />
            </UserProvider>
          </QtyProvider>
        {/* <Footer></Footer> */}
        </Container>

      );
    }
  }
}

export default MyApp;