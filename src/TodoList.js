import React,{Component, Fragment} from 'react';

class TodoList extends Component{
    constructor(props){
			super(props);
			this.state = {
				inputValue: "",
				list: []
			}
		}

		render(){
			return (
				<Fragment>
					<div>
						<input value = {this.state.inputValue}
									 onChange = {this.handleInputValue.bind(this)}
						/>
						<button onClick = {this.handleClick.bind(this)}>提交</button>
					</div>
					<ul>
						{
							this.state.list.map((item,index) => {
								return (
									<li key={index}
											onClick={this.handleListItem.bind(this,index)}
									>
										{item}
									</li>
								)
							})
						}
					</ul>
				</Fragment>
			)
		}
		// e为事件对象
		handleInputValue (e){
			this.setState({
				inputValue : e.target.value
			})
		}

		handleClick(){
			this.setState({
				list: [...this.state.list,this.state.inputValue],
				inputValue: ""
			})	
		}

		handleListItem(index){
			const list = [...this.state.list];
			list.splice(index,1);
			this.setState({
				list: list
			})
		}
}

export default TodoList;