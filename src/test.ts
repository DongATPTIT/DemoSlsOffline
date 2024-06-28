import {APIGatewayProxyEvent} from "aws-lambda"
export const handler = async () => {
    return {
        statusCode: 200,
        message: JSON.stringify({ message: "Test OK" })    }
}