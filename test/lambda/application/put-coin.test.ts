import { DynamoDB } from "aws-sdk";
import { mocked } from "ts-jest/utils";

import { handler } from "../../../lib/lambda/application/put-coin";

jest.mock("aws-sdk");

test('put coin handler', async () => {
    const data = {
        response: {
            Item: "test"
        }
    };
    mocked(DynamoDB).mockImplementationOnce((): any => {
        return {
            putItem: (_param: any, callback: any) => {
                return {
                    promise: () => {
                        return data;
                    },
                };
            },
        };
    });

    const result = await handler({
        parameters: {
            userId: 100,
            coinCharge: 300
        }
    });
});