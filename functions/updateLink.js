const axios = require('axios');
const dotenv = require('dotenv');
const { UPDATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse')

dotenv.config()

exports.handler = async (event) => {
    const {name, url, description, _id: id, archived} = JSON.parse(event.body);
    const variables = { name, url, description, id, archived};
    try {
        const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
        return formattedResponse(
            200,
            updatedLink
        )
    } catch (error) {
        console.error(error);
        return formattedResponse(
            200,
            {err: 'Something went wrong'}
        )
    }
}