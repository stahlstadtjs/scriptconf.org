declare module JSX {
  interface IntrinsicElements {
    "tito-button": Partial<HTMLElement> & { event: string }
  }
}
