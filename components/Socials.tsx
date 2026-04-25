import SocialIcons from "./SocialIcons";

export default function Socials() {
  return (
    <section id="socials" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold text-white">Find Me Online</h2>
      <p className="mt-3 text-white/70">All active social links render automatically from your config file.</p>
      <div className="mt-8">
        <SocialIcons />
      </div>
    </section>
  );
}
