import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';

import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  RemovalPolicy
}from 'aws-cdk-lib';

export class NpayUserStack extends Stack {
  public readonly NpayUser: UserPool

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const role = new Role(this, 'NpayRole', {
        assumedBy: new ServicePrincipal('Npay'),
    });

    this.NpayUser = new UserPool(this, 'NpayUserPool', {
      userPoolName: 'NpayUser'
    });

    this.NpayUser.grant(role, 'cognito-idp:AdminCreateUser');
  }
}