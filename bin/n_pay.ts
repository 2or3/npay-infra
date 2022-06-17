#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CoinTableStack } from '../lib/dynamo-db/coin-table-stack';

const app = new App();
new CoinTableStack(app, 'CoinTableStack', {});
