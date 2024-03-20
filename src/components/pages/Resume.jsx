import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    return (
        <div className='p-3 mb-2 bg-warning text-dark'>
            <h2>Resume</h2>
            <div className='p-3 mb-2 bg-warning text-dark'>
                <div className='p-3 mb-2 bg-warning text-dark card'>
                <h3 className='card-title'>Front-end Proficiencies</h3>
                <ul className='p-3 mb-2 bg-warning text-dark list-group list-group-horizontal'>
                    <li className='bg-warning list-group-item'>HTML</li>
                    <li className='bg-warning list-group-item'>CSS</li>
                    <li className='bg-warning list-group-item'>JavaScript</li>
                    <li className='bg-warning list-group-item'>React</li>
                    <li className='bg-warning list-group-item'>Bootstrap</li>
                </ul>
                </div>
                <div className='bg-warning card'>
                <h3 className='bg-warning card-title'>Back-end Proficiencies</h3>
                <ul className='bg-warning list-group list-group-horizontal'>
                    <li className='bg-warning list-group-item'>APIs</li>
                    <li className='bg-warning list-group-item'>Node</li>
                    <li className='bg-warning list-group-item' >Express</li>
                    <li className='bg-warning list-group-item'>MySQL, Sequelize</li>
                    <li className='bg-warning list-group-item'>MongoDB, Mongoose</li>
                    <li className='bg-warning list-group-item'>REST</li>
                </ul>
                </div>
                <div className='bg-warning card'>
                <h3 className='bg-warning card-title'>Dev Tools</h3>
                <ul className='bg-warning list-group list-group-horizontal'>
                    <li className='bg-warning list-group-item'>Git</li>
                    <li className='bg-warning list-group-item'>Webpack</li>
                    <li className='bg-warning list-group-item'>Babel</li>
                    <li className='bg-warning list-group-item'>Jest</li>
                    <li className='bg-warning list-group-item' >npm</li>
                </ul>
                </div>
                <div className='work-history'>
                <h3>Work History</h3>
                <div className='bg-warning card'>
                <h4 className='bg-warning card-title'>InterSign Corp -- Customer Service Rep</h4>
                <ul className='bg-warning list-group list-group-flush'>
                    <li className='bg-warning list-group-item'>2024- Present</li>
                    <li className='bg-warning list-group-item'>Assist customers with technical support and ordering products</li>
                    <li className='bg-warning list-group-item'>Handle inbound customer inquiries</li>
                    <li className='bg-warning list-group-item'>Provide excellent customer service</li>
                </ul>
                </div>
                <div className='bg-warning card'>
                <h4 className='bg-warning card-title'>USPS -- Retail Clerk</h4>
                <ul className='bg-warning list-group list-group-flush'>
                    <li className='bg-warning list-group-item'>2017-2023</li>
                    <li className='bg-warning list-group-item'>Assisted customers with shipping and mailing needs</li>
                    <li className='bg-warning list-group-item'>Managed high volume of mail with dedicated time restrictions</li>
                    <li className='bg-warning list-group-item'>Handled cash and credit transactions</li>
                    <li className='bg-warning list-group-item'>Adhered to standard policies for data protection and mailing standards</li>
                </ul>
                </div>
                <div className='bg-warning card'>
                <h4 className='bg-warning card-title'>Ibex Global LLC -- Customer Servive Rep</h4>
                <ul className='bg-warning list-group list-group-flush'>
                    <li className='bg-warning list-group-item'>2017</li>
                    <li className='bg-warning list-group-item'>Assisted customers with technical support</li>
                    <li className='bg-warning list-group-item'>Handled inbound customer inquiries</li>
                    <li className='bg-warning list-group-item'>Provided excellent customer service</li>
                </ul>
                </div>
                </div>
                <div className='education'>
                <h3>Education Background</h3>
                <div className='bg-warning card'>
                <ul className='bg-warning list-group list-group-flush'>
                    <li className='bg-warning list-group-item'>Indiana University, Bloomington IN</li>
                    <li className='bg-warning list-group-item'>Bachelors of Arts</li>
                    <li className='bg-warning list-group-item'>Double Major: English/History</li>
                </ul>
                </div>
                <div className='bg-warning card'>
                <ul className='bg-warning list-group list-group-flush'>
                    <li className='bg-warning list-group-item'>Vanderbuilt University, Nashville TN</li>
                    <li className='bg-warning list-group-item'>Full Stack Web Development</li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;