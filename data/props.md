# Props

| Prop          | Type                     | Default | Values                                                                                                                                                                                                                                  | Description                                                        |
| ------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| variant       | string                   | default | default \| destructive \| outline \| secondary \| ghost \| link \| expandIcon \| ringHover \| shine \| gooeyRight \| gooeyLeft \| linkHover1 \| linkHover2 \| rainbow \| rainbow-outline \| hearbeat \| deno1 \| deno2 \| smooth-bounce | Type of the button.                                                |
| size          | string                   | default | default \| sm \| lg \| icon                                                                                                                                                                                                             | Size of the button.                                                |
| className     | string                   | -       | -                                                                                                                                                                                                                                       | Custom CSS class for styling.                                      |
| children      | Preact.ComponentChildren | -       | -                                                                                                                                                                                                                                       | Children elements.                                                 |
| asChild       | boolean                  | false   | true \| false                                                                                                                                                                                                                           | Make it Enable to pass all props of button to its immediate child. |
| Icon          | Preact.ComponentType     | -       | Any icon from Icon libraries                                                                                                                                                                                                            | Use it with variant 'expandIcon' and specify iconPlacement.        |
| iconPlacement | string                   | -       | left \| right                                                                                                                                                                                                                           | Use it with variant 'expandIcon' and specify Icon.                 |

## Credits

- Special thanks to [Shadcn](https://ui.shadcn.com/),
  [enhanced-button](https://enhanced-button.vercel.app/),
  [Magic UI](https://magicui.design/) and [Syntax UI](https://syntaxui.com/) for
  the inspiration.
