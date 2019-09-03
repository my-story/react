import React, { Component } from "react"
import Link from "next/link";


class SearchBar extends Component {

	lastName = (name) => {
		if(name.length >= 7) {
			return(
				<p>...</p>
			)
		} else {
			return(
				<div>{name}</div>

			)
		}
	}

render() {

const search = this.props.results || []

if(this.props.results.length === 0){
    return (
    <div className="searchbar-container">
			  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566509579/search.svg" />
        <input onChange={this.props.getFilter} className="search-bar" type="text" placeholder="Search" />
    </div>
    )
} else {
    return (
			<div className="searchbar-container">
			  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566509579/search.svg" />
				<input onChange={this.props.getFilter} className="search-bar" type="text" placeholder="Search" />
					<div className="search-results-container">
					{search.map((result, index) => {
						return (
							<Link href={`http://localhost:3000/review/${result._id}`} key={index} >
							<div className="search-result">
								<img src={result.profilePic} alt={result.name.firstName} id="search-picture"/>
								<p>{result.name.firstName} {this.lastName(result.name.lastName)}</p>
							</div> 
							</Link>
							)
            })}
			</div>
        </div>
    )
}

}

}
export default SearchBar