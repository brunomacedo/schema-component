function FirstSchema({
  type,
  schema,
  ...rest
}) {
  if (type) {
    return (
      {
        '@context': 'https://schema.org/',
        '@type': type,
        ...rest,
        ...schema,
      }
    );
  }

  return false;
}

export default FirstSchema;
