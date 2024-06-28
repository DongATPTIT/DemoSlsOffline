import {APIGatewayProxyEvent} from "aws-lambda";
import { prismaClientDatabase } from "./database";

type IUserDTo = {
    name: string
    email: string
}
export const handler = async (event: APIGatewayProxyEvent) => {
    const result =  await prismaClientDatabase.user.findMany({
        where:
          {name: event.pathParameters?.name}});
    return {
        statusCode: 200,
        body: JSON.stringify(result)   
     } 

}