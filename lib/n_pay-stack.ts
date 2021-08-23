import * as cdk from '@aws-cdk/core';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';
import { RemovalPolicy } from '@aws-cdk/core';

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
  }
}
