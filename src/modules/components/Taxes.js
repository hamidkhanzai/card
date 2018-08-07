import React, { Component}  from 'react';
import _ from 'lodash';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
  <div class="table-responsive table-padding">
    <table class="table table-bordered table-padding table-top">
      <tr><th>Total Brutto</th>
          <td>
           {_.sum(props.data.map(item => item.price))} €
          </td>
      </tr>
      <tr><th>Tax 19%</th>
          <td>
           { calculateTax(19, props.data).toFixed(2)} €
          </td>
      </tr>
      <tr><th>Tax 7%</th>
          <td>
           { calculateTax(7, props.data).toFixed(2)} €
          </td>
      </tr>
      <tr><th>Total Netto</th>
          <td>
           {(_.sum(props.data.map(item => item.price)) +
             calculateTax(7, props.data) + calculateTax(19, props.data))
             .toFixed(2)
             } €
          </td>
      </tr>
    </table>
  </div>
);

const calculateTax =(tax, data) => {
   return (_.sum(
        data.filter(item => parseInt(item.tax) === tax)
        .map(item => item.price)) * tax / 100)
}

