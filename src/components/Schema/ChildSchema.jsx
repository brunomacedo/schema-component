function ChildSchema(childItem = []) {
  const filterChildrenFields = childItem && childItem.filter(({ props }) => (
    props.type
    && props.name
    && props.schema
  ));

  const createChildrenTemplate = filterChildrenFields && filterChildrenFields.map(({ props }) => {
    if (props.schema instanceof Array) {
      const childList = props.schema.map(item => (
        {
          '@type': props.type,
          ...item,
        }
      ));

      return (
        {
          [props.name]: [
            ...childList,
          ],
        }
      );
    }

    return (
      {
        [props.name]: {
          ...props.schema,
        },
      }
    );
  });

  return createChildrenTemplate && Object.assign({}, ...createChildrenTemplate);
}

export default ChildSchema;
