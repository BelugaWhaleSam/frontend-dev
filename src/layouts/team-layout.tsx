import { AnimatedTestimonials } from "@/components/team";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Chaitanya Sant Kumar",
      designation: "President, Entrepreneurship Club",
      src: "/team/csk.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Aashna Ratnani",
      designation: "Judging & Mentorship",
      src: "/team/ashaani.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Abhishek Nagaraja",
      designation: "Event Lead",
      src: "/team/abhishek.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Shabharish Iyer",
      designation: "Operations & Logistics",
      src: "/team/shabarish.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Usman Mohd.",
      designation: "Sponsorship & Finance",
      src: "/team/usma.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
