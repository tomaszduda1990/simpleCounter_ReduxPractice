import React, { Component } from "react";
import { connect } from "react-redux";
import {
  INC_VALUE,
  ADD_VALUE,
  DEC_VALUE,
  SUB_VALUE,
  ADD_RESULT,
  REMOVE_RESULT
} from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    const markup = this.props.results.map((val, i) => (
      <li key={i} onClick={() => this.props.removeRes(val.id)}>
        <p>{val.result}</p>
      </li>
    ));
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
        <button onClick={() => this.props.addRes(this.props.count)}>
          STORE RESULT
        </button>

        <ul>{markup}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.ctr.count,
    results: state.res.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: val => dispatch(ADD_VALUE(val)),
    remove: val => dispatch(SUB_VALUE(val)),
    increment: () => dispatch(INC_VALUE()),
    decrement: () => dispatch(DEC_VALUE()),
    addRes: val => dispatch(ADD_RESULT(val)),
    removeRes: id => dispatch(REMOVE_RESULT(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
