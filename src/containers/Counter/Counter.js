import React, { Component } from "react";
import { connect } from "react-redux";
import {
  INC_VALUE,
  ADD_VALUE,
  DEC_VALUE,
  SUB_VALUE
} from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.count} />
        <CounterControl label="Increment" clicked={this.props.increment} />
        <CounterControl label="Decrement" clicked={this.props.decrement} />
        <CounterControl label="Add 5" clicked={() => this.props.add(5)} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.remove(5)}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: val => dispatch(ADD_VALUE(val)),
    remove: val => dispatch(SUB_VALUE(val)),
    increment: () => dispatch(INC_VALUE()),
    decrement: () => dispatch(DEC_VALUE())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
