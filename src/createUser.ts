import {APIGatewayProxyEvent} from "aws-lambda";
import { prismaClientDatabase } from "./database";

type IUserDTo = {
    name: string
    email: string
}
export const handler = async (event: APIGatewayProxyEvent) => {
    const  {name,email} = JSON.parse(event.body!) as IUserDTo;
    const result = await prismaClientDatabase.user.create({
        data: {
          name, 
          email     
        }
      });
    return {
        statusCode: 200,
        message: JSON.stringify(result)    }
}