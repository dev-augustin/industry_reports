import React from 'react'

export default function Privacy() {
    // const privacy = () => {
    //     document.getElementById('main').innerHTML = "privacy";
    //   }
    return (
        <div className="main-box">
            <div>
                <img id="privacy-image" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1044&q=80" alt="privacy"></img>
            </div>
            <div>
                <h1 id="privacy-heading">Privacy</h1>
                <h3 id="privacy-subheading"> If AI developers treat privacy not as an ehical preference
                but as a fundamental human right, it would strengthen the privacy
                considerations that already exist in industry norms and technicaal standards. 
                </h3>
                <p id="paragraph-1">
                Privacy has long been a major concern for a broad field that includes government,
                business, academia, and civil society organizations. For example, there has been a
                surge in interest from developers and engineers to follow privacy-by-design36 principles, which demonstrate how norms can be incorporated at the systems-design level.
                Conducting a privacy impact assessment for technological deployments is an established tool for privacy compliance. Yet we already see tensions around the human
                right to privacy and AI development.
                </p>

                <p id="paragraph-2">For instance, Stanford University researchers trained a deep neural network to “predict” the sexual orientation of their subjects, without obtaining consent, using a set of
                images collected from online dating websites. Beyond various methodological shortcomings, the research demonstrated how a disregard for privacy rights increases the
                risks of algorithmic surveillance, where data that is collected and analyzed threatens
                to reveal personal information about users. This can put individuals and groups at risk,
                particularly those living under regimes that would use such information to repress and
                discriminate.
                </p>
            </div>
        </div>
    )
}
