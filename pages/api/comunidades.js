import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method == "POST") {
    const TOKEN = "1d43c63f68fd5d357bdf6ac2045ed4";

    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "972693",
      ...request.body,
    });

    response.json({
      registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos um GET, mas o POST existe",
  });
}
