import { CoinLambdaStack } from '../../lib/lambda/stack/coin-lambda-stack';
import { Construct } from 'constructs';
import { App }from 'aws-cdk-lib';

test('Coin Lambda Stack', () => {
  const app = new App();
  // WHEN
  const stack = new CoinLambdaStack(app, 'CoinLambdaStack');
  // THEN
  // expectCDK(stack).to(countResources('AWS::Lambda::Function', 1));
  // expectCDK(stack).to(haveResourceLike('AWS::Lambda::Function',
  //   {
  //     Handler: 'index.handler',
  //     Runtime: 'nodejs14.x'
  //   }
  // ));
});
