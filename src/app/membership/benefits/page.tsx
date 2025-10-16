const benefits = [
  "Exclusive job opportunities",
  "Mentorship from industry leaders",
  "Networking with global tech baddies",
  "Access to private events & workshops",
  "Discounts on tech resources",
];

export default function BenefitsPage() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-extrabold text-pink-500 mb-4">
        Membership Benefits
      </h1>
      <p className="text-gray-700 mb-6 max-w-2xl">
        Here’s what you gain when you join our community:
      </p>

      <ul className="space-y-4">
        {benefits.map((benefit, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-800 text-lg"
          >
            <span className="text-pink-500 font-bold">✔</span>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}
