import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { connectUser } from '../redux/user/userActions';
class Navbar extends Component {

	render() {
		return (
			<header>
				<div class="container">
					<div class="header d-lg-flex justify-content-between align-items-center">
						<div class="header-agile">
							<h1>
								<Link to='/' class="navbar-brand logo">
									<span class="fa fa-pencil" aria-hidden="true" ></span> E-learning	<span class="fa fa-user" aria-hidden="true" ></span>
								</Link>
							</h1>
						</div>
						<div class="nav_w3ls">
							<nav>
								<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
								<input type="checkbox" id="drop" />
								<ul class="menu">
									<li class="mr-lg-3 mr-2 active"><Link to='/'>Home</Link></li>
									<li class="mr-lg-3 mr-2"><Link to='/TasksManager'>Tasks Management</Link></li>
									{this.props.connectedUserRedux.user.role === "admin" && (<li class="mr-lg-3 mr-2"><Link to='/Admin'>Dashboard</Link></li>)}
									{this.props.connectedUserRedux.user._id !== "" && (<li class="mr-lg-3 mr-2"><Link to='/profile'>Profile</Link></li>)}
									<li class="mr-lg-3 mr-2 p-0">
										{/* <!-- First Tier Drop Down --> */}
										<label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
										<Link to="/recommendations">Recommendations <span class="fa fa-angle-down" aria-hidden="true"></span></Link>
										<input type="checkbox" id="drop-2" />
										<ul class="inner-dropdown">
											<li><Link to='/recommendations/events'>Events</Link></li>
											<li><Link to='/recommendations/courses'>Courses</Link></li>
											<li><Link to='/recommendations/news'>News</Link></li>
										</ul>
									</li>
									<li class="mr-lg-3 mr-2"><Link to='/contact'>Contact Us</Link></li>


								</ul>
							</nav>
						</div>

					</div>
				</div>
			</header>
		)
	}
}

const mapStateToProps = state => {
	return {
		connectedUserRedux: state.connectedUser
	}
}

const mapDispatchToProps = dispatch => {
	return {
		connectUser: (user) => dispatch(connectUser(user))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)