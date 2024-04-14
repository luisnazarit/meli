Test para MELI, desarrollado bajo Nextjs

Correr en servidor los siguientes comandos:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Luego revisar en [http://localhost:3000](http://localhost:3000).


## Proyecto

- La firma de json la pueden encontrar en middleware.js
- Se aplicaron tags de SEO de twitter y Open Graph.
- No fue necesario utilizar un procesador de CSS, con tailwind se resuelve todo. Se ajustó el color amarillo a la configuración de este en tailwind.config
- Adicionalmente se agregó una carpeta de test con algunos ejemplos básicos.
-Adicionalmente se manejó el html para su correcto funcionamiento en distintas pantallas.
- Se utilizó la tipografía Poppins ya que la original de Mercadolibre (Próxima Nova), no la tengo a disposición y no era tampoco la del diseño que se envió para este test.

## Deploy

Pueden ver el funcionamiento en [https://meli-nine.vercel.app/](https://meli-nine.vercel.app/)
