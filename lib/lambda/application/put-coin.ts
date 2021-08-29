const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB;
const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';

export const handler = async (event: any = {}): Promise<any> => {
  const requestedUserId = event.parameters.userId;
  const requestedCoin = event.parameters.coinCharge;
  if (!requestedUserId) {
    return {
      statusCode: 400,
      body: `Error: You are missing the path parameter id`,
    };
  }
  if (!requestedCoin) {
    return {
      statusCode: 400,
      body: `Error: You are missing the path parameter id`,
    };
  }

  const params = {
    TableName: TABLE_NAME,
    Item: {
      'UserId': {
        N: requestedUserId
      },
      'CoinAmount': {
        N: requestedCoin
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