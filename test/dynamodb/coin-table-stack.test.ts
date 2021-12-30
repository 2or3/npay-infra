import { expect as expectCDK, haveResourceLike, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { CoinTableStack } from '../../lib/dyanamo-db/coin-table-stack';

test('Coin Table Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CoinTableStack(app, 'CoinTableStack');
  // THEN
  // expectCDK(stack).to(countResources('AWS::DynamoDB::Table', 1));
  // expectCDK(stack).to(haveResourceLike('AWS::DynamoDB::Table',
  //   {
  //     AttributeDefinitions: [
  //       {
  //         AttributeName: 'UserId',
  //         AttributeType: 'S'
  //       }
  //     ]
  //   }
  // ));
});
