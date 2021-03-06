import { CoinTableStack } from '../../lib/dynamo-db/coin-table-stack';
import { Construct } from 'constructs';
import { App }from 'aws-cdk-lib';

test('Coin Table Stack', () => {
  const app = new App();
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
