import React from 'react'
import './blog.css'

class BHeader extends React.Component{
    render(){
        return(
            <div class="w3-content" style={{maxWidth:"1400px"}}>
                {/* <!-- Header --> */}
                <header class="w3-container w3-center w3-padding-32" style={{marginTop:"50px",alignContent:"center"}}> 
                    <h1><b>MY BLOG</b></h1>
                    <p>Welcome to the blog of Event Management </p> 
                </header>

                {/* <!-- Grid --> */}
                <div class="w3-row">
                    {/* <!-- Blog entries --> */}
                    <div class="w3-col l8 s12">
                        {/* <!-- Blog entry --> */}
                        <div class="w3-card-4 w3-margin w3-white">
                            <img src="https://www.campfirefw.org/wp-content/uploads/2020/05/memorablei-moments.png" alt="Memory" style={{width:"100%"}}/>
                            <div class="w3-container">
                                <h3 className="mani"><b>Memorable Moments</b></h3>
                                <h5 className="mani">Title description, <span class="w3-opacity">April 1, 2021</span></h5>
                            </div>
                            <div class="w3-container">
                                <p style={{font:"30px"}}>Life is an event. Make it memorable.
                                    Make any occasion unforgettable
                                    Our business is making memories
                                    Remembered always
                                    Exclusive events, priceless memories
                                    Memorable events don’t just happen. They happen to be our business...
                                    Because in your dreams, every detail matters
                                    Creating the Best. Day. Ever.
                                    Every love story is beautiful, but yours should be unique
                                    We build your dream around you
                                    Bringing dreams to life
                                    Your dream event, delivered
                                </p>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                        <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                        <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-tag">1</span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        {/* <!-- Blog entry --> */}
                        <div class="w3-card-4 w3-margin w3-white">
                            <img src="https://designermag.org/wp-content/uploads/2013/09/wedding-event.jpg" alt="Wedding" style={{width:"100%"}}/>
                            <div class="w3-container">
                                <h3 className="mani"><b>Wedding Events</b></h3>
                                <h5 className="mani">Title description, <span class="w3-opacity">April 2, 2021</span></h5>
                            </div>
                            <div class="w3-container">
                                <p>To love, laughter, and happily ever after
                                    Happily ever after begins here
                                    And so, the adventure begins
                                    True love is the greatest adventure
                                    To a lifetime of adventures together
                                    Together is a beautiful place to be
                                    To the moon and back..To the moon and back
                                    Lucky in love
                                    Oh happy day!
                                    Eat, drink, and be married
                                    Designing your perfect day
                                    Turning ideas into action
                                    The event you imagine, brought to life
                                    Your vision. Our innovation: Event solutions.
                                    Where your ideas take off
                                    Making events come alive
                                </p>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                        <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                        <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-badge">8</span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END BLOG ENTRIES --> */}

                    {/* <!-- Introduction menu --> */}
                    <div class="w3-col l4">
                        {/* <!-- About Card --> */}
                        <div class="w3-card w3-margin w3-margin-top">
                            <img src="https://partymojo.com.sg/wp-content/uploads/2015/04/Farm-1.jpg" alt="Birthday" style={{width:"100%"}}/>
                            <div class="w3-container w3-white">
                                <h4 className="mani"><b>Birthday Events</b></h4>
                                <h5 className="mani">Title description, <span class="w3-opacity">April 8, 2021</span></h5>
                                <p>The birthday party will be magical and delighting if you decide to bless us with your presence...</p>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                    <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-badge">6</span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Posts --> */}
                    <div class="w3-col l4">
                        <div class="w3-card w3-margin w3-margin-top">
                            <img src="https://th.bing.com/th/id/R2d080cdea6b83cae9b2b9a7084bb9f27?rik=Nph9zEARMW7C7A&riu=http%3a%2f%2fteamorange.in%2fwp-content%2fuploads%2f2017%2f02%2fevent-management-services-corporate-events.jpg&ehk=a%2f4fyhYNa%2f0MSBKXZFajSp%2b8xqYT6NQhzrXqgtEJAQI%3d&risl=&pid=ImgRaw" alt="Nature" style={{width:"100%"}}/>
                            <div class="w3-container w3-white">
                                <h4 className="mani">Corporate Function Events</h4>
                                <h5 className="mani">Title description, <span class="w3-opacity">April 12, 2021</span></h5>
                                <p>Seminars and conferences
                                    Company milestone events
                                    Team-building events.
                                </p>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                        <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                        <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-badge">7</span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w3-col l4">
                        <div class="w3-card w3-margin w3-margin-top">
                            <img src="https://cdn0.weddingwire.in/img_g/articulos-india/2018/non-troncales/mehndi-function-ideas/cover-shades.jpg" alt="Nature" style={{width:"100%"}}/>
                            <div class="w3-container w3-white">
                                <h4 className="mani">Ceremony Events</h4>
                                <h5 className="mani">Title description, <span class="w3-opacity">April 22, 2021</span></h5>
                            </div>
                            <div class="w3-container w3-white">
                                <p>A ceremony allows us to acknowlege a transition or a riteof passage
                                    Holy Union or Commitment ceremonies
                                    Civil Ceremony
                                </p>
                                <div class="w3-row">
                                    <div class="w3-col m8 s12">
                                        <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                    </div>
                                    <div class="w3-col m4 w3-hide-small">
                                        <p><span class="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span class="w3-badge" >3</span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Introduction Menu --> */}
                {/* <!-- END GRID --> */}
            </div>

        )
    }
}

export default BHeader