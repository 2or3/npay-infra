const AWS = require('aws-sdk');

import { handler } from "../../../lib/lambda/application/put-coin";

test('put coin handler', async () => {
    const data = {
        'statusCode': 200
    };
    jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'put').mockImplementationOnce((): any => {
        return data;
    });

    const result = await handler({
        parameters: {
            userId: 100,
            coinCharge: 300
        }
    });
});
