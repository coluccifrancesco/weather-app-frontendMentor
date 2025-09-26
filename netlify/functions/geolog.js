exports.handler = async (event, context) => {

    const apiKey = process.env.API_KEY;
    const geocodingUrl = process.env.GEOCODING_URL;
    const limitAndKeyPrefix = process.env.LIMIT_AND_KEY_PREFIX;
    const input = event.queryStringParameters.city

    try {

        const response = await fetch(`${geocodingUrl}${input}${limitAndKeyPrefix}${apiKey}`)
        const data = await response.json()

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
    } catch (error) {
    
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}