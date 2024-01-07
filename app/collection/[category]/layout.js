export default function Head({ params }) {
  const category = params.category;
  return (
    <>
      <title>Schnitzer | ${category}</title>
      <meta
        name="description"
        content="Explore Cutting-Edge Gadgets at Schnitzer Tech Hub | Earphones, Smartwatches, Speakers & More"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
