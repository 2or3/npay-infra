#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CoinTableStack } from '../lib/dynamo-db/coin-table-stack';
import { NpayUserStack } from '../lib/cognito/npay-user-stack';

const app = new App();
new CoinTableStack(app, 'CoinTableStack', {});
new NpayUserStack(app, 'NpayUserStack', {});
