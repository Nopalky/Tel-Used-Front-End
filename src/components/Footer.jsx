export default function Footer() {
  return (
    <footer className="mt-10 bg-brand p-10 text-white w-full max-md:px-4 max-md:py-7">
      <div class="mb-5 text-xl font-bold italic leading-[1.1] text-brand-dark">
        <p>Tel</p>
        <p>Used</p>
      </div>
      <div class="mx-auto flex w-full gap-20 max-md:flex-col max-md:gap-5">
        <div class="contact">
          <p className="text-xs font-medium">Contact Us</p>
        </div>
        <div class="most-popular">
          <p className="inline-block border-b border-white pb-0.75 text-xs font-medium">Most Populat Categories</p>
        </div>
      </div>
      <p class="mt-7.5 border-t border-white/50 pt-3 text-center text-[10px]">© 2022 All rights reserved. Reliance Retail Ltd.</p>
    </footer>
  );
}
