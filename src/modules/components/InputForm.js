import React, { Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
  <form class="form-inline">
    <div class="form-group">
      <label for="exampleInputName2">Name</label>
      <input type="text" onChange={props.setName}
        class="form-control" id="name" placeholder="Product1"/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail2">Comment</label>
      <textarea class="form-control"  onChange={props.setComment} rows="1"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleInputName2">Price</label>
      <input type="number"
        onChange={props.setPrice}
        class="form-control" id="price" placeholder="12.00 € "/>
    </div>
    <div class="form-group">
      <label for="exampleInputName2">Tax</label>
      <input type="number"
        onChange={props.setTax}
        class="form-control" id="tax" placeholder="19 %"/>
    </div>
  </form>
);
