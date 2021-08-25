import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';
import { RemovalPolicy } from '@aws-cdk/core';

export class NPayStack extends Stack {
  public readonly CoinTable: Table;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // DynamoDB for coin api
    this.CoinTable = new Table(this, 'NCoinTable', {
      partitionKey: {
        name: 'UserId',
        type: AttributeType.STRING
      },
      removalPolicy: RemovalPolicy.DESTROY
    });
  }
}
