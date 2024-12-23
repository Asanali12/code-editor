import { Response, createServer } from "miragejs";
import { workingMock } from "../utils/mocks/workingMock";

export function makeServer({ environment = "development" }) {
  return createServer({
    environment,

    routes() {
      this.post("/send", (schema: any, request) => {
        const code = JSON.parse(request.requestBody)
        if (code.code === workingMock) {
            return new Response(200, {}, {
                status: 'success',
                output: 'Correct output',
            }); 
        }
        return new Response(200, {}, {
            status: 'error',
            output: 'Error code 1: wrong answer',
        });
      },
      { timing: 4000 }
    )
    },
  });
}