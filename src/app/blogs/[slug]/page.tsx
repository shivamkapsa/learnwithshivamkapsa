import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { BlogContent } from "@/features/blogs/components/BlogContent";
import { BlogHero } from "@/features/blogs/components/BlogHero";
import { getBlogBySlug } from "@/features/blogs/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      url: `/blogs/${blog.slug}`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <BlogHero blog={blog} />
        <BlogContent content={blog.content} />
      </Container>
    </main>
  );
}
