const axios = require('axios');
const dotenv = require('dotenv');
const { GET_LINKS } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse')

dotenv.config()

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data;
        return formattedResponse(
            200,
            data
        )
    } catch (error) {
        console.error(error);
        return formattedResponse(
            200,
            {err: 'Something went wrong'}
        )
    }
}