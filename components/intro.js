import { CMS_NAME, CMS_URL } from '../lib/constants';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Kirschenman Field Reports
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Field report logs of Kirschenman produce for strategic partners.
      </h4>
    </section>
  );
}
