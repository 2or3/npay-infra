import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { AssetCode, Function, Runtime } from "@aws-cdk/aws-lambda";
import { NPayStack } from '../../dyanamo-db/coin-table-stack';

export class CoinLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const dynamodb = new NPayStack(this, "test", {});
    const getItemLambda = new Function(this, "getOneItemFunction", {
      code: new AssetCode("lib/lambda/application"),
      handler: "put-coin.handler",
      runtime: Runtime.NODEJS_14_X,
      environment: {
        TABLE_NAME: dynamodb.CoinTable.tableName,
        PRIMARY_KEY: "UserId",
      },
    });

    // dynamodb読み取り権限をLambdaに付与
    dynamodb.CoinTable.grantReadData(getItemLambda);
  }
}