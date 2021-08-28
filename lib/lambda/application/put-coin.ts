const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';

export const handler = async (event: any = {}): Promise<any> => {
  const requestedItemId = event.pathParameters.id;
  if (!requestedItemId) {
    return {
      statusCode: 400,
      body: `Error: You are missing the path parameter id`,
    };
  }

  const params = {
    TableName: TABLE_NAME,
    Item: {
      'UserId': {
        S: "testdata"
      }
    },
  };

  try {
    const response = await dynamodb.putItem(params).promise();
    return { statusCode: 200, body: JSON.stringify(response.Item) };
  } catch (dbError) {
    return { statusCode: 500, body: JSON.stringify(dbError) };
  }
};