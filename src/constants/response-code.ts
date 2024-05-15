export const RESPONSE_CODE = {
    OK: {
        HTTP_STATUS: 200,
        RESULT_CODE: 20000,
        RESULT_DESCRIPTION: 'Success',
        DESCRIPTION: 'Success response'
    },
    CREATED: {
        HTTP_STATUS: 201,
        RESULT_CODE: 20100,
        RESULT_DESCRIPTION: 'Create Success',
        DESCRIPTION: 'Create Success'
    },
    MISSING_OR_INVALID: {
        HTTP_STATUS: 400,
        RESULT_CODE: 40000,
        RESULT_DESCRIPTION: 'Missing or Invalid parameter',
        DESCRIPTION: 'Missing or invalid parameters'
    },

    FORBIDDEN: {
        HTTP_STATUS: 403,
        RESULT_CODE: 40301,
        RESULT_DESCRIPTION: 'Forbidden',
        DESCRIPTION: 'Authentication fails'
    },
    UNKNOWN_URL: {
        HTTP_STATUS: 404,
        RESULT_CODE: 40400,
        RESULT_DESCRIPTION: 'Unknown URL',
        DESCRIPTION: 'The server cannot find requested resource'
    },
    DATA_NOT_FOUND: {
        HTTP_STATUS: 404,
        RESULT_CODE: 40401,
        RESULT_DESCRIPTION: 'Data not found',
        DESCRIPTION: 'Resource cannot be found'
    },
    INTERNAL_SERVER_ERROR: {
        HTTP_STATUS: 500,
        RESULT_CODE: 50000,
        RESULT_DESCRIPTION: 'System Error',
        DESCRIPTION: 'Internal Server error'
    },
}
