const names = [
	"Horváth Levente",
	"Huszár-Láday Milán",
	"Koncz Milán Adrián",
	"Kotyor Dominik Patrik",
	"Kovács Botond",
	"Lakossy Szófia",
	"Nagy Csenge",
	"Nagy Hunor Bálint",
	"Nemes István Márk"
]

class ItmpJackpot extends React.Component {
	constructor() {
		super()
		this.state = {
			selected: false,
			winner: ""
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		const names = this.props.names
		const randomIndex = Math.floor(Math.random() * names.length)
		this.setState({
			selected: true,
			winner: names[randomIndex]
		})
	}

	render() {
		return (
				<div>
					<h3>by {this.props.owner}</h3>
					<Names names={this.props.names}/>
					<button 
						type="button" 
						className="btn btn-secondary"
						onClick={this.handleClick}
					>
						Jackpot!
					</button>
					<h1 style={{display: (this.state.selected) ? "block" : "none"}}>The Winner: {this.state.winner}</h1>
				</div>
			)
	}
}

const Names = (props) => {
	return (
		<ul>
			{props.names.map((name, index) => {
				return (<li>{props.names[index]}</li>)
				})
			}
		</ul>
		)
}

ReactDOM.render(
	<ItmpJackpot owner="HTTP Alapítvány" names={names}/>,
	document.getElementById('root')
);