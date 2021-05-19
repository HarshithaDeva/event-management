import React from 'react'
import './blog.css'

class BFooter extends React.Component{
    render(){
        return(
            <footer class="container">
                <footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
                    <button class="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button>
                    <button class="w3-button w3-black w3-padding-large w3-margin-bottom">Next &raquo;</button>
                    <p class="float-right"><a href="/#">Back to top</a></p>
                    <p>© bigdays Company. · <a href="/#">Privacy</a> · <a href="/#">Terms</a></p>
                </footer>
            </footer>
        )
    }
}

export default BFooter