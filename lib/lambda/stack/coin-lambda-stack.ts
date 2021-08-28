import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { CoinTableStack } from '../../dyanamo-db/coin-table-stack';
import { Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

export class CoinLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const dynamodb = new CoinTableStack(this, 'CoinTableStack', {});
    const put_coin_lambda = new NodejsFunction(this, 'PutCoin', {
      entry: 'lib/lambda/application/put-coin.ts',
      runtime: Runtime.NODEJS_14_X,
      environment: {
        TABLE_NAME: dynamodb.CoinTable.tableName,
        PRIMARY_KEY: 'UserId',
      }
    });

    // dynamodb読み取り権限をLambdaに付与
    dynamodb.CoinTable.grantReadWriteData(put_coin_lambda);
  }
}