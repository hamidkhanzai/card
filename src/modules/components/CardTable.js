import React, { Component } from 'react';
import _ from 'lodash';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import deleteIcon from '../../images/delete_icon.png';


export default class CardTable extends Component {
  render() {
    return (
      <div class="table-responsive table-padding">
        <table class="table table-bordered table-padding">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Comments</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Total Items</th>
            <td></td>
          </tr>
          {this.props.data.map((item) => (
            <tr>
              <td> {item.id} </td>
              <td> {item.name} </td>
              <td> {item.comment} </td>
              <td> {_.floor(item.price, 2).toFixed(2)} € </td>
              <td> {item.tax} %</td>
              <td>
                {_.round(item.tax / 100 * item.price +
                  item.price, 2).toFixed(2)}
              </td>
              <img src={deleteIcon} height="22" width="22"
                 onClick={() => this.props.deleteItem(item.id)} />
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
