export interface Collection {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  dimensions: string;
  material: string;
  colors: string[];
  price: string;
  collectionSlug: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  instructor: string;
  skillLevel: string;
  schedule: string;
  price: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
