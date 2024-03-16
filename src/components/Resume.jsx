import React from 'react';

function Resume() {
    return (
        <section id='resume'>
            <h2>Resume</h2>
            <div className='resume'>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                </ul>
                <h3>Dev Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                    <li>Jest</li>
                    <li>npm</li>
                </ul>
                <h3>Work History</h3>
                <h4>InterSign Corp -- Customer Service Rep</h4>
                <ul>
                    <li>2024- Present</li>
                    <li>Assist customers with technical support and ordering products</li>
                    <li>Handle inbound customer inquiries</li>
                    <li>Provide excellent customer service</li>
                </ul>
                <h4>USPS -- Retail Clerk</h4>
                <ul>
                    <li>2017-2023</li>
                    <li>Assisted customers with shipping and mailing needs</li>
                    <li>Managed high volume of mail with dedicated time restrictions</li>
                    <li>Handled cash and credit transactions</li>
                    <li>Adhered to standard policies for data protection and mailing standards</li>
                </ul>
                <h4>Ibex Global LLC -- Customer Servive Rep</h4>
                <ul>
                    <li>2017</li>
                    <li>Assisted customers with technical support</li>
                    <li>Handled inbound customer inquiries</li>
                    <li>Provided excellent customer service</li>
                </ul>
                <h3>Education Background</h3>
                <ul>
                    <li>Indiana University, Bloomington IN</li>
                    <li>Bachelors of Arts</li>
                    <li>Double Major: English/History</li>
                </ul>
                <ul>
                    <li>Vanderbuilt University, Nashville TN</li>
                    <li>Full Stack Web Development</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;