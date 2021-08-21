import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as NPay from '../lib/n_pay-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NPay.NPayStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
