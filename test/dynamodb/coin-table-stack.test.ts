import { expect as expectCDK, haveResourceLike, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as NPay from '../../lib/dyanamo-db/coin-table-stack';

test('NPay Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NPay.NPayStack(app, 'NPayTestStack');
    // THEN
    expectCDK(stack).to(countResources('AWS::DynamoDB::Table', 1));
    expectCDK(stack).to(haveResourceLike('AWS::DynamoDB::Table', {
      AttributeDefinitions: [
        {
          'AttributeName': 'UserId',
          'AttributeType': 'S'
        }
      ]
    }));
  }
);
