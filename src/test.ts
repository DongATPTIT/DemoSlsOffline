import {APIGatewayProxyEvent} from "aws-lambda"
export const handler = async (event: APIGatewayProxyEvent) => {
    return {
        statusCode: 200,
        message: JSON.stringify({ message: "Test OK" })    }
}