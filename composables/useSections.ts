export const useSections = () => {
  const config = useConfig();
  const categories = config.categories;
  const sections = config.sections;

  return sections.map((section) => {
    return {
      name: section.name,
      slug: section.slug,
      description: "Description placeholder",
      link: "/section/" + section.slug,
      categories: categories
        .filter((c) => c.section === section.slug)
        .map((c) => {
          return {
            name: c.name,
            slug: c.slug,
            description: "Description placeholder",
            link: "/category/" + c.slug,
          };
        }),
    };
  });
};
