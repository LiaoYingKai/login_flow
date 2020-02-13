import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoSuccess, addTodo } from '../../actions/todo-actions';
import './style.scss';

const propTypes = { 
	todos: PropTypes.array,
	addTodoSuccess: PropTypes.func,
	addTodo: PropTypes.func,
};

class About extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
		this._handleChangeValue = this._handleChangeValue.bind(this);
	}

	_handleChangeValue(event) {
		this.setState({
			inputValue: event.target.value
		});
	}
	render() {
		const { inputValue } = this.state;
		const { _handleChangeValue } = this;
		const { todos = [], addTodoSuccess, addTodo } = this.props;

		return (
			<div className="about">
				<div >
					TODO：
					<input onChange={ (event) => { _handleChangeValue(event); }} value={inputValue}></input>
					<button onClick={ () => { addTodoSuccess(inputValue); }}>同步 Add</button>
					<button onClick={ () => { addTodo(inputValue); }}>非同步 Add</button>
				</div>
				<ul>
					{
						todos.map((item, index) => (
							<li key={`${item}__${index}`}>
								{item}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

About.propTypes = propTypes;

function mapStateToProps(state) {
	return {
		todos: state.todo.get('data').toArray(),
	};
}
function mapDispatchToProps(dispatch) {
	return  {
		addTodoSuccess: (todo) => dispatch(addTodoSuccess(todo)),
		addTodo: (todo) => dispatch(addTodo(todo))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
