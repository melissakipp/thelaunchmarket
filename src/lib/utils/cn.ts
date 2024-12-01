// Helps merge Tailwind CSS classes and handle conditional classes
export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(' ');
}