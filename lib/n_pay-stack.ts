import * as cdk from '@aws-cdk/core';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';
import { RemovalPolicy } from '@aws-cdk/core';
import { AssetCode, Function, Runtime } from "@aws-cdk/aws-lambda";

export class NPayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const dynamodb = new Table(this, 'NCoinTable', {
      partitionKey: {
        name: 'UserId',
        type: AttributeType.STRING
      },
      removalPolicy: RemovalPolicy.DESTROY
    });

    const getItemLambda = new Function(this, "getOneItemFunction", {
      code: new AssetCode("lib/lambda/application"),
      handler: "put-payment.handler",
      runtime: Runtime.NODEJS_14_X,
      environment: {
        TABLE_NAME: dynamodb.tableName,
        PRIMARY_KEY: "UserId",
      },
    });

    // dynamodb読み取り権限をLambdaに付与
    dynamodb.grantReadData(getItemLambda);
  }
}
