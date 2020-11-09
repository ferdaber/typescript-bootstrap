export function matchByTextContent(textContent: string | RegExp) {
  const matcherFn = (node: Element): boolean => {
    const nodeText = node.textContent?.trim().replace(/\s+/, " ") ?? "";
    const matches =
      typeof textContent === "string"
        ? textContent === nodeText
        : textContent.test(nodeText);
    return matches && !Array.from(node.children).some(matcherFn);
  };
  return (_: unknown, node: Element) => matcherFn(node);
}
