type Props = {
    params: Promise<{
      slug: string;
    }>;
  };
  
  export default async function ResourceDetails({
    params,
  }: Props) {
    const { slug } = await params;
  
    return (
      <main className="py-20">
        <h1 className="text-center text-5xl font-bold">
          {slug}
        </h1>
      </main>
    );
  }