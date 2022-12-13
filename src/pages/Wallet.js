import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  writeEmail: state.email,
});

export default connect(mapStateToProps)(Wallet);
