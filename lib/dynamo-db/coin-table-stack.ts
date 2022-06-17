import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';

import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  RemovalPolicy
}from 'aws-cdk-lib';

export class CoinTableStack extends Stack {
  public readonly CoinTable: Table;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // DynamoDB for coin api
    this.CoinTable = new Table(this, 'NCoinTable', {
      partitionKey: {
        name: 'UserId',
        type: AttributeType.STRING
      },
      removalPolicy: RemovalPolicy.DESTROY,
      tableName: "NCoin"
    });
  }
}
