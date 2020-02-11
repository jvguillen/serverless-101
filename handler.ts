import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

export const goodbye: APIGatewayProxyHandler = async (event, _context) => {
  const body = event.body ? JSON.parse(event.body) : undefined
  const name = body.name ? body.name : undefined 
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Goodbye ${name}`,
      input: event,
    }, null, 2),
  };
}
