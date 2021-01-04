const Keys = require('../../Config/Keys');
module.exports = (survey) => {
    return `<html>
        <body>
            <div style="text-align: center;">
                <h3>${survey.title}</h3>
                <p>Please answer the following questions.</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${Keys.redirectDomain}/api/surveys/redirect">Yes</a>
                </div>
                <div>
                    <a href="${Keys.redirectDomain}/api/surveys/redirect">No</a>
                </div>
            </div>
        </body>
    </html>`;
}