const axios = require('axios');
const dotenv = require('dotenv');
const { DELETE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse')

dotenv.config()

exports.handler = async (event) => {
    const { id } = JSON.parse(event.body);
    const variables = { id };
    try {
        const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
        return formattedResponse(
            200,
            deletedLink
        )
    } catch (error) {
        console.error(error);
        return formattedResponse(
            200,
            {err: 'Something went wrong'}
        )
    }
}