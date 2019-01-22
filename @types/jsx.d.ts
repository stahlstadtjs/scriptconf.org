type HasChildren = {
  children: (string | JSX.Element)[]
}
type TitoElement = { event: string, releases?: string }

declare module JSX {
  interface IntrinsicElements {
    "tito-button": Partial<HasChildren> & TitoElement,
    "tito-widget": Partial<HasChildren> & TitoElement
  }
}
