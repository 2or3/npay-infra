import { expect as expectCDK, haveResourceLike, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { CoinLambdaStack } from '../../lib/lambda/stack/coin-lambda-stack';

test('Coin Lambda Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CoinLambdaStack(app, 'CoinLambdaStack');
  // THEN
  expectCDK(stack).to(countResources('AWS::Lambda::Function', 1));
  expectCDK(stack).to(haveResourceLike('AWS::Lambda::Function',
    {
      Handler: 'put-coin.handler',
      Runtime: 'nodejs14.x'
    }
  ));
});
